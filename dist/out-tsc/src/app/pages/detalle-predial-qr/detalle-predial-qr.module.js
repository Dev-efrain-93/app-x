import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetallePredialQrPage } from './detalle-predial-qr.page';
import { QRCodeModule } from 'angular2-qrcode';
import { NgxBarcodeModule } from 'ngx-barcode';
const routes = [
    {
        path: '',
        component: DetallePredialQrPage
    }
];
let DetallePredialQrPageModule = class DetallePredialQrPageModule {
};
DetallePredialQrPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            QRCodeModule,
            NgxBarcodeModule
        ],
        declarations: [DetallePredialQrPage]
    })
], DetallePredialQrPageModule);
export { DetallePredialQrPageModule };
//# sourceMappingURL=detalle-predial-qr.module.js.map