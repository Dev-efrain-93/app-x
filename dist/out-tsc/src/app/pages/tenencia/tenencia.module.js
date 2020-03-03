import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TenenciaPage } from './tenencia.page';
const routes = [
    {
        path: '',
        component: TenenciaPage
    }
];
let TenenciaPageModule = class TenenciaPageModule {
};
TenenciaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TenenciaPage]
    })
], TenenciaPageModule);
export { TenenciaPageModule };
//# sourceMappingURL=tenencia.module.js.map