import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AguaPotablePage } from './agua-potable';
import { AguaPotablePageRoutingModule } from './agua-potable-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AguaPotablePageRoutingModule
  ],
  declarations: [AguaPotablePage],
})
export class AguaPotableModule {}
