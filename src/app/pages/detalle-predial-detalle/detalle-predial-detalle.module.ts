import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallePredialDetallePage } from './detalle-predial-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePredialDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallePredialDetallePage]
})
export class DetallePredialDetallePageModule {}
