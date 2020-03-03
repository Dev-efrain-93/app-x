import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { Platform, IonSlides } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { GoogleMaps, GoogleMap, Environment, GoogleMapOptions, Marker, MarkerOptions, GoogleMapsEvent, MarkerIcon, GoogleMapsMapTypeId, MarkerCluster, GoogleMapsAnimation, LatLng } from '@ionic-native/google-maps/ngx';

import { LoadingService } from '../../services/loading.service';

import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

import { DOCUMENT} from '@angular/common';
import { darkStyle } from './map-dark-style';

@Component({
  selector: 'lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  map: GoogleMap;

  customActionSheetOptions: any = {
    //header: 'Municipios'
  };

  slideOptions = {
    initialSlide: 0,
    centeredSlides: true,
    loop: true
  };

  municipios: any[];
  municipioSelected: any;
  posicionActual: any;
  ubicacionActualExito: boolean = false;

  geocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  lugaresPrueba: any[];
  lugaresMunicipioSelected: any[];
  cargandoLugares: boolean = false;
  marcasLugaresPago: LugarPago[] = [];
  ultimaMarcaLugarSeleccionado: number = 0;


  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private lugaresService: LugaresService,
    private geolocation: Geolocation,
    private platform: Platform,
    private toastService: ToastService,
    private nativeGeocoder: NativeGeocoder,
    private loadingService: LoadingService,
    private launchNavigator: LaunchNavigator
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.municipios = this.lugaresService.getMunicipios();
      this.lugaresPrueba = this.lugaresService.getLugaresPrueba();
      this.municipioSelected = this.municipios[1];//capital campeche
      
      setTimeout(()=> {
        this.inicializarMapa();
        this.setEstiloMapa();
        this.buscarLugaresMunicipio();
        //this.obtenerPosicionActualUsuario();
      }, 200);
    });

  }

  /**
   * Inicializacion del mapa en la posicion seleccionada
   */
  inicializarMapa() {
    /// This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDJxtizfmmnhBASqy8rt_ioQ3NjLO_XbJQ',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDJxtizfmmnhBASqy8rt_ioQ3NjLO_XbJQ'
    });
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.municipioSelected.lat,
          lng: this.municipioSelected.lng
        },
        zoom: 15,
        //tilt: 30,
      },
      mapType: GoogleMapsMapTypeId.ROADMAP,
      toolbar: true,
      controls: {
        'compass': true,
        'myLocationButton': true,
        'myLocation': true,   // (blue dot)
        'indoorPicker': true,
        'zoom': false,          // android only
        'mapToolbar': false     // android only
      }
    }

    this.map = GoogleMaps.create('map_canvas', mapOptions);

  }

  /**
   * Establecer estilo actual al mapa
   */
  setEstiloMapa() {
    const appEl = this.doc.querySelector('ion-app');
    let style = [];
    if (appEl.classList.contains('dark-theme')) {
      style = darkStyle;
      this.map.setOptions({styles: style});
    } else {
      this.map.setOptions({styles: []});
    }

  }

  /**
   * Centrar mapa en base a la localidad seleccionada
   */
  buscarLugaresMunicipio() {
    this.lugaresMunicipioSelected = [];
    this.marcasLugaresPago = [];
    this.cargandoLugares = true;
    this.loadingService.present();

    if(this.map)
      this.map.clear();

    //centrar maps
    console.log("Nuevo municipio seleccionado: ", this.municipioSelected);
    this.map.animateCamera({
      target: {
        lat: this.municipioSelected.lat,
        lng: this.municipioSelected.lng
      },
      zoom: 15,
      //tilt: 30,
      duration: 1000
    });

    //simular carga lugares de pago
    setTimeout(()=> {
      this.lugaresMunicipioSelected = this.lugaresPrueba.filter((elem)=> {
        return elem.IdMunicipio === this.municipioSelected.id;
      });

      if(this.lugaresMunicipioSelected.length > 0) {
        console.log("Lugares de pago municipio: " + JSON.stringify(this.lugaresMunicipioSelected, null));
        //dibujamos lugares de pago
        this.marcarLugaresPagoMunicipioSeleccionado(this.lugaresMunicipioSelected);
        this.cargandoLugares = false;
        this.loadingService.dismiss();
      } else {
        console.log("No se encontraron lugares de pago para el municipio seleccionado");
        this.cargandoLugares = false;
        this.loadingService.dismiss();
      }

    }, 500);

  }

  /**
   * Marcar en el mapa los lugares de pago del municipio seleccionado
   * @param lugares 
   */
  marcarLugaresPagoMunicipioSeleccionado(lugares:any[]) {
    if(lugares.length > 0) {

      lugares.forEach((lugar, i)=> {
        this.marcasLugaresPago.push(new LugarPago(i, lugar, lugar.Lat, lugar.Lng, this.map, this.slides));
        if(i === 0){
          this.marcasLugaresPago[i].seleccionado(this.map, this.slides)
          this.ultimaMarcaLugarSeleccionado = i;
        }
          
      });
      
    } 
  }

  /**
   * Seleccionar lugar de pago en base al slide seleccionado
   * @param event 
   */
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.slides.getActiveIndex().then(index => {
        if(index >= 0) {
          this.marcasLugaresPago[this.ultimaMarcaLugarSeleccionado].noSeleccionado();
          this.marcasLugaresPago[index].seleccionado(this.map, this.slides);
          this.ultimaMarcaLugarSeleccionado = index;
        }
        
      });
    });
  }

  /**
   * Abrir navegacion google maps hacia el destino seleccionado
   * @param destino 
   */
  abrirNavegacionLugar(destino: any) {

    console.log("Intentando navegar hacia destino..");
    console.log(destino);

    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }

    try {

      this.launchNavigator.isAppAvailable(this.launchNavigator.APP.GOOGLE_MAPS).then(isAvailable=> {
        if(isAvailable) {
          this.launchNavigator.navigate([destino.Lat, destino.Lng], options).then(success=> {
            console.log("Navegador lanzado correctamente");
          }, error => {
            console.log("Error lanzando navegador", error);
            this.toastService.info("Ocurrió un problema al intentar navegar al destino seleccionado. Intente mas tarde.");
          });
        } else {
          this.toastService.info("Google Maps no se encuentra disponible en su dispositivo. Intente mas tarde.");
        }

      }, err => {
        console.log("Error lanzando navegador", err);
        this.toastService.info("Ocurrió un problema al intentar navegar al destino seleccionado. Intente mas tarde.");
      });

    } catch(e) {
      console.log("Error lanzando navegador", e);
      this.toastService.info("Ocurrió un problema al intentar navegar al destino seleccionado. Intente mas tarde.");
    }
  }

  /**
   * Solicitar la ubicacion actual del usuario
   */
  obtenerPosicionActualUsuario() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Ubicacion actual: ", resp);
      this.posicionActual = resp;
      if(this.posicionActual) {
        this.decodificarPosicionActualUsuario();
      }
      
     }).catch((error) => {
       console.log('Error al obtener la ubicación', error);
       this.toastService.info('No fue posible acceder a su ubicación actual');
     });
  }

  /**
   * Decodificar latitud longitud para obtener los datos de la 
   * ubicacion del usuario
   */
  decodificarPosicionActualUsuario() {
    this.nativeGeocoder.reverseGeocode(this.posicionActual.coords.latitude, this.posicionActual.coords.longitude, this.geocoderOptions)
    .then((result: NativeGeocoderResult[]) => {
      console.log("Detalles ubicacion actual: ");
      console.log(JSON.stringify(result[0]))
      alert(JSON.stringify(result[0]));

      if(result && result.length > 0) {
        this.ubicacionActualExito = true;
      }

    })
    .catch((error: any) => {
      console.log('Error al decodificar la ubicación actual', error)
      this.toastService.info('No fue posible acceder a su ubicación actual');
    });
  }

}


class LugarPago {
  index: number;
  position: LatLng;
  marker: Marker;
  lat: number;
  lng: number;

  constructor(index: number, lugar: any, lat: number, lng: number, map: GoogleMap, slides: IonSlides) {
    this.index = index;
    this.lat = lat;
    this.lng = lng;

    this.marker = map.addMarkerSync({
      //title: lugar.Nombre,
      //snippet: lugar.Servicios,
      animation: "DROP",
      icon: {
        url: "./assets/icons/place.png",
        size: {
          width: 25,
          height: 25
        }
      },
      position: {
        lat: this.lat,
        lng: this.lng
      }
    });

    this.marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.clickMarker(slides);
    });

  }

  /**
   * Cuando se selecciona una marca
   * @param slides 
   */
  clickMarker(slides: IonSlides) {
    //actualizar slide
    slides.slideTo(this.index, 200);
  }

  /**
   * Cuando se actualiza el slide
   * @param map 
   */
  seleccionado(map: GoogleMap, slides: IonSlides) {
    //centrar
    let position = this.marker.getPosition();

    map.animateCamera({
      target: {
        lat: position.lat,
        lng: position.lng
      },
      duration: 200
    });

    //icono
    this.marker.setIcon({
      url: './assets/icons/marker-selected.png',
      size: {
        width: 20,
        height: 35
      }
    });

    //animacion
    this.marker.setAnimation("DROP");

    //info
    //this.marker.showInfoWindow();
  }

  /**
   * Cuando se deselecciona una marca
   */
  noSeleccionado() {
    this.marker.setIcon({
      url: './assets/icons/place.png',
      size: {
        width: 25,
        height: 25
      }
    });
  }

  /**
   * Obtener indice de la marca
   */
  getIndex() {
    return this.index;
  }
}
