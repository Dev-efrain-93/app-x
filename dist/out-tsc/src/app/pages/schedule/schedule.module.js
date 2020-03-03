import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulePage } from './schedule';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SchedulePageRoutingModule } from './schedule-routing.module';
let ScheduleModule = class ScheduleModule {
};
ScheduleModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SchedulePageRoutingModule
        ],
        declarations: [
            SchedulePage,
            ScheduleFilterPage
        ],
        entryComponents: [
            ScheduleFilterPage
        ]
    })
], ScheduleModule);
export { ScheduleModule };
//# sourceMappingURL=schedule.module.js.map