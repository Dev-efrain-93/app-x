import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio';
import { InicioPageRoutingModule } from './inicio-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  declarations: [
    InicioPage
  ],
  entryComponents: [
  ]
})
export class InicioModule { }
