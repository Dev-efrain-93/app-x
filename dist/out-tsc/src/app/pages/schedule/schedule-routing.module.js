import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchedulePage } from './schedule';
const routes = [
    {
        path: '',
        component: SchedulePage
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SchedulePageRoutingModule);
export { SchedulePageRoutingModule };
//# sourceMappingURL=schedule-routing.module.js.map