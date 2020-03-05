import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleAguaPotablePage } from './detalle-agua-potable';
import { DetalleAguaPotablePageRoutingModule } from './detalle-agua-potable-routing.module';
import { IonicModule } from '@ionic/angular';
import { DetalleAguaPotablePopoverPage } from '../detalle-agua-potable-popover/detalle-agua-potable-popover';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetalleAguaPotablePageRoutingModule
  ],
  declarations: [
    DetalleAguaPotablePage,
    DetalleAguaPotablePopoverPage
  ],
  entryComponents: [
    DetalleAguaPotablePopoverPage
  ]
})
export class DetalleAguaPotableModule { }
