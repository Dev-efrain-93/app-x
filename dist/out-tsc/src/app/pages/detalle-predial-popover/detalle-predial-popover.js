import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController, Platform, NavParams } from '@ionic/angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
let DetallePredialPopoverPage = class DetallePredialPopoverPage {
    constructor(popoverCtrl, transfer, file, platform, toastService, navParams, router) {
        this.popoverCtrl = popoverCtrl;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.toastService = toastService;
        this.navParams = navParams;
        this.router = router;
    }
    ngAfterViewInit() {
        this.detallePredial = this.navParams.get('detallePredial');
        console.log("dentro del componente popover de los detalles");
    }
    /**
     * Descargar presupuesto predial
     */
    downloadFile() {
        console.log("Descargando presupuesto");
        this.popoverCtrl.dismiss();
        const now = new Date(Date.now());
        const url = this.detallePredial.urlPresupuesto;
        const fecha = now.toLocaleString();
        const nombreArchivo = 'presupuesto_predial_' + this.detallePredial.numeroCuenta + '_' + fecha + '.pdf';
        if (this.platform.is('desktop')) {
            let link = document.createElement("a");
            link.download = nombreArchivo;
            link.href = url;
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            link = null;
        }
        else {
            const fileTransfer = this.transfer.create();
            fileTransfer.download(url, this.file.dataDirectory + nombreArchivo).then(entry => {
                console.log('Descarga finalizada: ' + entry.toURL());
                this.toastService.present('Descarga finalizada: ' + entry.toURL());
            }, error => {
                console.log(error);
                this.toastService.info(error);
            });
        }
    }
    /**
     * Generar código QR/barcode
     */
    generateQR() {
        console.log("Redirigiendo a qr");
        this.popoverCtrl.dismiss();
        let navigationExtras = {
            state: {
                detallePredial: this.detallePredial
            }
        };
        this.router.navigateByUrl('/app/tabs/predial/detalle-predial-qr', navigationExtras);
    }
};
DetallePredialPopoverPage = tslib_1.__decorate([
    Component({
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
    }),
    tslib_1.__metadata("design:paramtypes", [PopoverController,
        FileTransfer,
        File,
        Platform,
        ToastService,
        NavParams,
        Router])
], DetallePredialPopoverPage);
export { DetallePredialPopoverPage };
//# sourceMappingURL=detalle-predial-popover.js.map