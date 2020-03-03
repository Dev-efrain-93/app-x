import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AcercaModule } from '../acerca/acerca.module';
import { MapModule } from '../map/map.module';
import { InicioModule } from '../inicio/inicio.module';
import { DetallePredialModule } from '../detalle-predial/detalle-predial.module';
import { PredialModule } from '../predial/predial.module';

@NgModule({
  imports: [
    AcercaModule,
    CommonModule,
    IonicModule,
    MapModule,
    InicioModule,
    DetallePredialModule,
    PredialModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
