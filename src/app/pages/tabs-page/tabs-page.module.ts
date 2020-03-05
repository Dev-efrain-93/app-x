import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AcercaModule } from '../acerca/acerca.module';
import { InicioModule } from '../inicio/inicio.module';
import { DetalleAguaPotableModule } from '../detalle-agua-potable/detalle-agua-potable.module';
import { AguaPotableModule } from '../agua-potable/agua-potable.module';

@NgModule({
  imports: [
    AcercaModule,
    CommonModule,
    IonicModule,
    InicioModule,
    DetalleAguaPotableModule,
    AguaPotableModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
