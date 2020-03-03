import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetallePredialPage } from './detalle-predial';
const routes = [
    {
        path: '',
        component: DetallePredialPage
    }
];
let DetallePredialPageRoutingModule = class DetallePredialPageRoutingModule {
};
DetallePredialPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DetallePredialPageRoutingModule);
export { DetallePredialPageRoutingModule };
//# sourceMappingURL=detalle-predial-routing.module.js.map