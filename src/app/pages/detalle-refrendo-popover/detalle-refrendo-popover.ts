import { Component } from '@angular/core';

import { PopoverController, Platform, NavParams } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastService } from '../../services/toast.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  template: `
    <ion-list lines="none">
      <ion-item (click)="downloadFile()"> 
        <ion-icon name="download" slot="start"></ion-icon>
        <ion-label>Descargar</ion-label>
      </ion-item>
      <ion-item (click)="generateQR()">
        <ion-icon src="../../../assets/icons/qrcode.svg" slot="start"></ion-icon>
        <ion-label>QR/Barcode</ion-label>
      </ion-item>
    </ion-list>
  `
})


export class DetalleRefrendoPopoverPage {

  detalleRefrendo: any;

  constructor(
    public popoverCtrl: PopoverController,
    private transfer: FileTransfer,
    private file: File,
    private platform: Platform,
    private toastService: ToastService,
    private navParams: NavParams,
    private router: Router,
    private fileOpener: FileOpener,
    private loadingService: LoadingService
  ) {}

  ngAfterViewInit() {
    this.detalleRefrendo = this.navParams.get('detalleRefrendo');
    console.log("Dentro del componente popover de los detalles del refrendo");
  }

  /**
   * Descargar presupuesto vehicular
   */
  downloadFile() {

    console.log("Descargando presupuesto");
    this.popoverCtrl.dismiss();

    const now = new Date(Date.now());
    const url = this.detalleRefrendo.urlPresupuesto;
    const fecha = now.toLocaleString();
    const nombreArchivo = 'presupuesto_vehicular_' + this.detalleRefrendo.serieVehiculo + '_' + fecha + '.pdf';

    this.loadingService.present();
    if(this.platform.is('desktop')) {

      let link = document.createElement("a");
      link.download = nombreArchivo;
      link.href = url;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      link = null;
      this.loadingService.dismiss();

    } else {
      
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(url, this.file.externalDataDirectory + nombreArchivo).then(
        entry => {
          console.log('Descarga finalizada: ' + entry.toURL());
          this.loadingService.dismiss();

          this.fileOpener.open(entry.toURL(), "application/pdf").then(
            () => console.log("Archivo abierto con exito", entry.toURL()))
            .catch( e=> console.log("Error al intentar abrir el archivo", entry.toURL()));

        }, 
        error => {
          this.loadingService.dismiss();
          console.log(error.exception);
          this.toastService.info(error.exception);
      });
    }
    
  }

  /**
   * Generar código QR/barcode
   */
  generateQR() {
    
    console.log("Redirigiendo a qr refrendo");
    this.popoverCtrl.dismiss();

    let navigationExtras: NavigationExtras = {
      state: {
        detalleRefrendo: this.detalleRefrendo
      }
    }

    this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo-qr', navigationExtras);
  }

}
