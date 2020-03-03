import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastService } from '../../services/toast.service';
import { LoadingService } from '../../services/loading.service';
let DetallePredialQrPage = class DetallePredialQrPage {
    constructor(router, route, barcodeScanner, base64ToGallery, toastService, loadingService) {
        this.router = router;
        this.route = route;
        this.barcodeScanner = barcodeScanner;
        this.base64ToGallery = base64ToGallery;
        this.toastService = toastService;
        this.loadingService = loadingService;
        this.qrData = '';
        this.scannedCode = null;
        this.elementType = "img";
        this.isQr = true;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.detallePredial = this.router.getCurrentNavigation().extras.state.detallePredial;
                this.qrData = this.detallePredial.lcc;
                console.log(this.detallePredial);
            }
        });
    }
    ngOnInit() {
    }
    flipCard() {
        var card = document.querySelector('.card');
        card.classList.toggle('is-flipped');
        this.isQr = !this.isQr;
    }
    /**
     * Comprobar código QR coincida con linea de captura cerrada
     */
    scanCodeQR() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData;
        }, err => {
            console.log(err);
            this.toastService.present(err);
        });
    }
    /**
     * Descargar código QR
     */
    downloadCode() {
        let element = null;
        if (this.isQr) {
            element = document.querySelector('.qrcode qr-code canvas');
        }
        else {
            element = document.querySelector('.barcode img');
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
        this.base64ToGallery.base64ToGallery(data, { prefix: nombreArchivo, mediaScanner: true })
            .then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.toastService.present("El código ha sido guardado en tu Galería de Fotos");
        }), (error) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(error);
            yield this.toastService.present(error);
        }));
    }
};
DetallePredialQrPage = tslib_1.__decorate([
    Component({
        selector: 'detalle-predial-qr',
        templateUrl: './detalle-predial-qr.page.html',
        styleUrls: ['./detalle-predial-qr.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        BarcodeScanner,
        Base64ToGallery,
        ToastService,
        LoadingService])
], DetallePredialQrPage);
export { DetallePredialQrPage };
//# sourceMappingURL=detalle-predial-qr.page.js.map