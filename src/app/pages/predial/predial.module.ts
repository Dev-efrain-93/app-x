import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PredialPage } from './predial';
import { PredialPageRoutingModule } from './predial-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    PredialPageRoutingModule
  ],
  declarations: [PredialPage],
})
export class PredialModule {}
