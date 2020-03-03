import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { AcercaModule } from '../acerca/acerca.module';
import { MapModule } from '../map/map.module';
import { ScheduleModule } from '../inicio/inicio.module';
import { DetallePredialModule } from '../detalle-predial/detalle-predial.module';
import { PredialModule } from '../predial/predial.module';
let TabsModule = class TabsModule {
};
TabsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            AcercaModule,
            CommonModule,
            IonicModule,
            MapModule,
            ScheduleModule,
            DetallePredialModule,
            PredialModule,
            TabsPageRoutingModule
        ],
        declarations: [
            TabsPage,
        ]
    })
], TabsModule);
export { TabsModule };
//# sourceMappingURL=tabs-page.module.js.map