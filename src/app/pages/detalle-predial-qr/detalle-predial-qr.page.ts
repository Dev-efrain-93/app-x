import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastService } from '../../services/toast.service';
import { LoadingService } from '../../services/loading.service'; 

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'detalle-predial-qr',
  templateUrl: './detalle-predial-qr.page.html',
  styleUrls: ['./detalle-predial-qr.page.scss'],
})
export class DetallePredialQrPage implements OnInit {

  detallePredial: any;
  qrData = '';
  scannedCode = null;

  elementType : "svg" | "img" | "canvas" = "img";
  
  isQr = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private androidPermissions: AndroidPermissions,
    private fileOpener: FileOpener
  ) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.detallePredial = this.router.getCurrentNavigation().extras.state.detallePredial;
        this.qrData = this.detallePredial.lcc;
        console.log(this.detallePredial);
      }
      
    });

    //#region Permisos necesarios (almacenar imagenes)
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => console.log("Permissions granted", result.hasPermission),
      error => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
    //#endregion

   }

  ngOnInit() {
  }

  flipCard() {
    var card = document.querySelector('.card') as HTMLDivElement;
    card.classList.toggle('is-flipped');

    this.isQr = !this.isQr;
  }

  /**
   * Comprobar código QR coincida con linea de captura cerrada
   */
  scanCodeQR() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData;
      },
      err => {
        console.log(err);
        this.toastService.present(err);
      }
    );
  }

  /**
   * Descargar código QR
   */
  downloadCode() {
    let element = null;
    if (this.isQr) {
      element = document.querySelector('.qrcode qr-code canvas') as HTMLCanvasElement;
    } else {
      element = document.querySelector('.barcode img') as HTMLImageElement;
    }

    if (!element) {
      console.log("Elemento código no recuperado. Intente mas tarede");
      this.toastService.present("Elemento código no recuperado. Intente mas tarde");
      return false;
    }
    
    const imageData = this.isQr ? element.toDataURL('image/jpeg').toString() : element.currentSrc.toString();
    console.log('data: ', imageData);

    let data = imageData.split(',')[1];
    
    const now = new Date(Date.now());
    const fecha = now.toLocaleString();
    const nombreArchivo = 'presupuesto_predial_' + this.detallePredial.lcc + '_' + fecha;

    this.base64ToGallery.base64ToGallery(data,
      { prefix: '_img', mediaScanner: true })
      .then(
        res => {
          console.log("Imagen guardada con exito", res);
          //await this.toastService.present("El código ha sido guardado en tu Galería de Fotos");
          this.fileOpener.open(res, "image/png").then(
            () => console.log("Archivo abierto con exito", res))
            .catch( e=> console.log("Error al intentar abrir el archivo", res));
        }, 
        error => {
          console.log("Error guardando imagen en galería", error);
          this.toastService.present("Error guardando imagen en galería: " + error);
        }
      );
  }


  /**
   * Abrir pasarela pago predial
   */
  pagarPredial() {
    console.log("Redirigiendo pasarela pago predial");

    let navigationExtras: NavigationExtras = {
      state: {
        detallePredial: this.detallePredial
      }
    }

    this.router.navigateByUrl('/app/tabs/predial/pago-predial', navigationExtras);
  }

}
