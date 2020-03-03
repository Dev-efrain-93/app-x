import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleRefrendoPage } from './detalle-refrendo.page';
import { DetalleRefrendoPopoverPage } from  '../detalle-refrendo-popover/detalle-refrendo-popover';

const routes: Routes = [
  {
    path: '',
    component: DetalleRefrendoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DetalleRefrendoPage,
    DetalleRefrendoPopoverPage
  ],
  entryComponents: [
    DetalleRefrendoPopoverPage
  ]
})
export class DetalleRefrendoPageModule {}
