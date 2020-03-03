import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { RefrendoService } from '../../services/refrendo.service';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { ToastService } from '../../services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'refrendo',
  templateUrl: './refrendo.html',
  styleUrls: ['./refrendo.scss'],
})
export class RefrendoPage implements OnInit {

  refrendo: any;
  enviado = false;
  formularioConsultaRefrendo: FormGroup;
  
  consultasRefrendo: any[]= [];
  consultaRefrendoPrueba: any;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private refrendoService: RefrendoService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private storage: Storage
  ) { }

  public ionViewDidEnter() {
    //this.resetForm();

    //inicializar consulta fake
    this.inicializarConsultaRefrendoFake();

    //Obtener consultas recientes
    this.storage.get('consultasRefrendo').then((consultas) => {
      this.consultasRefrendo = consultas || [];
    });


  }

  ngOnInit() {

    this.formularioConsultaRefrendo = this.formBuilder.group({
      placa: ['', Validators.pattern('^$|^[A-Za-z0-9]+$')],
      serie: ['', Validators.pattern('^$|^[A-Za-z0-9]+$')]
    });

  }

  //#region Consulta refrendo fake

  inicializarConsultaRefrendoFake() {
    this.consultaRefrendoPrueba = {
      idPresupuestoTenencia: 574532,
      urlPresupuesto: "http://pruebaspagose.contribunet.campeche.gob.mx:8082/sit-contribunet/reportePresupuestoVehicularNoLogin?vehiculo=414234&presupuesto=574532",
      vehiculo: {
          idVehiculo: 414234,
          serie: "3VWJ2A1W6WM201136",
          placaActual: "DJJ9228",
          marca: "Volskswagen de",
          clase: "AUTOMOVIL",
          tipo: "SEDAN",
          modelo: "1998",
          color: "ALUMINIO",
          propietario: "PUCH  EK  MANUEL ISAAC",
          importeFactura: 120000.01,
          leyenda: " ",
          calle: "AND YUCATAN MZA 40 LTE 13",
          cilindros: 4,
          colonia: "FIDEL VELAZQUEZ",
          codigoPostal: 24023,
          numeroExterior: "1",
          municipio: "CAMPECHE",
          linea: "Jetta 4 puertas",
          puertas: 4,
          pasajeros: 5,
          capacidad: 0,
          rfv: "0",
          fechaFactura: "19/2/1998",
          procedencia: "NACIONAL",
          propietarioAnterior: "GARCIA ESPINOZA SADY ESTHER",
          claveVehicular: "0050530",
          placaAnterior: " ",
          pesoBruto: 0,
          ciudad: "CAMPECHE",
          rfc: "PUEM0810224",
          motor: "ADD170561"
      },
      serieVehiculo: "3VWJ2A1W6WM201136",
      tenenciaAnual: [
          {
              anyoFiscal: 2018,
              importeTotal: 629,
              recargoMontoTenencia: null,
              actualizacionMontoTenencia: null,
              importeTenencia: null,
              importeDerechoPlaca: 484,
              recargoDerechoPlaca: 121,
              actualizacionDerechoPlaca: 24,
              infracciones: [],
              montoHonorarios: null,
              montoMulta: null
          },
          {
              anyoFiscal: 2019,
              importeTotal: 564,
              recargoMontoTenencia: null,
              actualizacionMontoTenencia: null,
              importeTenencia: null,
              importeDerechoPlaca: 507,
              recargoDerechoPlaca: 52,
              actualizacionDerechoPlaca: 5,
              infracciones: [],
              montoHonorarios: null,
              montoMulta: null
          }
      ],
      total: 1213,
      tenenciaActualPagada: null,
      expidePlaca: false,
      aplicaDonativo: true,
      donativo: 20,
      lcc: "43191208322126037272"
    };
  }

  consultaRefrendoFake(placa?: string, serie?: string) {

    console.log("Ejecutando consulta refrendo fake");

    this.enviado = true;

    if(!((placa && placa !== "") || (serie && serie !== ""))) {
      if (this.formularioConsultaRefrendo.invalid || !((this.formularioConsultaRefrendo.value['placa'] && this.formularioConsultaRefrendo.value['placa'] !== "") || (this.formularioConsultaRefrendo.value['serie'] && this.formularioConsultaRefrendo.value['serie'] !== ""))) {
        this.toastService.present("Proporcione correctamente al menos uno de los datos solicitados");
        return;
      }
    }

    let _placa = placa || this.formularioConsultaRefrendo.value['placa'];
    let _serie = serie || this.formularioConsultaRefrendo.value['serie'];

    this.refrendo = this.consultaRefrendoPrueba;
    

    //#region Almacenar consulta como reciente
    let now = new Date(Date.now());

    this.consultasRefrendo.unshift({
      date: now,
      data: this.refrendo
    });

    let slicedArray = this.consultasRefrendo.slice(0,5);
    this.storage.set('consultasRefrendo', slicedArray);
    //#endregion

    let navigationExtras: NavigationExtras = {
      state: {
        refrendo: this.refrendo
      }
    }

    this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo', navigationExtras);
    
  }

  ejecutarConsultaRecienteFake(consulta: any) {

    console.log("Ejecutando consulta reciente fake");

    if(consulta.data.vehiculo.placaActual === "" && consulta.data.vehiculo.serie === "") {
      console.log("No se encontraron los datos necesarios para ejecutar la consulta");
      this.toastService.present("No se encontraron los datos necesarios para ejecutar la consulta");
      return;
    }

    this.formularioConsultaRefrendo.controls.placa.patchValue(consulta.data.vehiculo.placaActual);
    this.formularioConsultaRefrendo.controls.placa.updateValueAndValidity();

    this.formularioConsultaRefrendo.controls.serie.patchValue(consulta.data.vehiculo.serie);
    this.formularioConsultaRefrendo.controls.serie.updateValueAndValidity();

    this.consultaRefrendoFake(consulta.data.vehiculo.placaActual, consulta.data.vehiculo.serie);
  }

  //#endregion

  /**
   * Consultar refrendo
   * @param placa Placa del vehiculo
   * @param serie Número de serie del vehiculo
   */
  consultarRefrendo(placa?: string, serie?: string) {
    this.enviado = true;

    if(!((placa && placa !== "") || (serie && serie !== ""))) {
      if (this.formularioConsultaRefrendo.invalid || !((this.formularioConsultaRefrendo.value['placa'] && this.formularioConsultaRefrendo.value['placa'] !== "") || (this.formularioConsultaRefrendo.value['serie'] && this.formularioConsultaRefrendo.value['serie'] !== ""))) {
        this.toastService.present("Proporcione correctamente al menos un dato solicitado");
        return;
      }
    }

    this.loadingService.present();
    let _placa = placa || this.formularioConsultaRefrendo.value['placa'];
    let _serie = serie || this.formularioConsultaRefrendo.value['serie'];

    this.refrendoService.obtenerRefrendoVehicular(_placa, _serie).subscribe((response) => {
      
      if(response) {
        this.refrendo = response;
        this.loadingService.dismiss();

        //#region Almacenar consulta como reciente
        let now = new Date(Date.now());

        this.consultasRefrendo.unshift({
          date: now,
          data: this.refrendo
        });
    
        let slicedArray = this.consultasRefrendo.slice(0,5);
        this.storage.set('consultasRefrendo', slicedArray);
        //#endregion 

        let navigationExtras: NavigationExtras = {
          state: {
            refrendo: this.refrendo
          }
        }

        this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo', navigationExtras);
      } else {
        this.toastService.present("No se encontro un vehículo con la placa o serie");
        this.loadingService.dismiss();
      }

    }, (err)=> {
      this.toastService.present(err);
      this.loadingService.dismiss();
    });

  }

  /**
   * Remover consultas recientes
   */
  removerConsultasRefrendoRecientes() {
    this.storage.remove('consultasRefrendo').then(resolve => {
      this.consultasRefrendo = [];
      console.log("Consultas de refrendo recientes eliminadas");
    }, 
    err => {
      console.log(err);
      this.toastService.present(err);
    });
  }

  /**
   * Ejecutar consulta reciente con sus datos
   * @param consulta 
   */
  ejecutarConsultaReciente(consulta: any) {

    if(consulta.data.vehiculo.placaActual === "" && consulta.data.vehiculo.serie === "") {
      console.log("No se encontraron los datos necesarios para ejecutar la consulta");
      this.toastService.present("No se encontraron los datos necesarios para ejecutar la consulta");
      return;
    }

    this.formularioConsultaRefrendo.controls.placa.patchValue(consulta.data.vehiculo.placaActual);
    this.formularioConsultaRefrendo.controls.placa.updateValueAndValidity();

    this.formularioConsultaRefrendo.controls.serie.patchValue(consulta.data.vehiculo.serie);
    this.formularioConsultaRefrendo.controls.serie.updateValueAndValidity();

    this.consultarRefrendo(consulta.data.vehiculo.placaActual, consulta.data.vehiculo.serie);
  }

  resetForm() {
    this.formularioConsultaRefrendo.reset();
    this.enviado = false;
  }

  cancelarConsultarRefrendo() {
    this.router.navigateByUrl('/app/tabs/inicio', { replaceUrl: true });
  }

}
