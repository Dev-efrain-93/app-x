import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetallePredialDetallePage } from './detalle-predial-detalle.page';
const routes = [
    {
        path: '',
        component: DetallePredialDetallePage
    }
];
let DetallePredialDetallePageModule = class DetallePredialDetallePageModule {
};
DetallePredialDetallePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DetallePredialDetallePage]
    })
], DetallePredialDetallePageModule);
export { DetallePredialDetallePageModule };
//# sourceMappingURL=detalle-predial-detalle.module.js.map