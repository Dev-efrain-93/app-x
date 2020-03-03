import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcercaPage } from './acerca';
const routes = [
    {
        path: '',
        component: AcercaPage
    }
];
let AcercaPageRoutingModule = class AcercaPageRoutingModule {
};
AcercaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AcercaPageRoutingModule);
export { AcercaPageRoutingModule };
//# sourceMappingURL=acerca-routing.module.js.map