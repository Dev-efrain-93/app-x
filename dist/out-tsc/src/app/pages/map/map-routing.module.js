import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapPage } from './map';
const routes = [
    {
        path: '',
        component: MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], MapPageRoutingModule);
export { MapPageRoutingModule };
//# sourceMappingURL=map-routing.module.js.map