import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PredialPage } from './predial';
const routes = [
    {
        path: '',
        component: PredialPage
    }
];
let PredialPageRoutingModule = class PredialPageRoutingModule {
};
PredialPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PredialPageRoutingModule);
export { PredialPageRoutingModule };
//# sourceMappingURL=predial-routing.module.js.map