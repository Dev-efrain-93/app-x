import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from './inicio';
import { LugaresPage } from '../lugares/lugares';
import { InicioPageRoutingModule } from './inicio-routing.module';
let ScheduleModule = class ScheduleModule {
};
ScheduleModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            InicioPageRoutingModule
        ],
        declarations: [
            InicioPage,
            LugaresPage
        ],
        entryComponents: [
            LugaresPage
        ]
    })
], ScheduleModule);
export { ScheduleModule };
//# sourceMappingURL=inicio.module.js.map