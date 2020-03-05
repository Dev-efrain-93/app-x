import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetalleAguaPotableQrPage } from './detalle-agua-potable-qr.page';

import { QRCodeModule } from 'angular2-qrcode';
import { NgxBarcodeModule } from 'ngx-barcode';

const routes: Routes = [
  {
    path: '',
    component: DetalleAguaPotableQrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    QRCodeModule,
    NgxBarcodeModule
  ],
  declarations: [DetalleAguaPotableQrPage]
})
export class DetalleAguaPotableQrPageModule {}
