import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleAguaPotableDetallePage } from './detalle-agua-potable-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAguaPotableDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleAguaPotableDetallePage]
})
export class DetalleAguaPotableDetallePageModule {}
