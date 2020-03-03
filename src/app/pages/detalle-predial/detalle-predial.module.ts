import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallePredialPage } from './detalle-predial';
import { DetallePredialPageRoutingModule } from './detalle-predial-routing.module';
import { IonicModule } from '@ionic/angular';
import { DetallePredialPopoverPage } from '../detalle-predial-popover/detalle-predial-popover';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetallePredialPageRoutingModule
  ],
  declarations: [
    DetallePredialPage,
    DetallePredialPopoverPage
  ],
  entryComponents: [
    DetallePredialPopoverPage
  ]
})
export class DetallePredialModule { }
