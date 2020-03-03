import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePredialPage } from './detalle-predial';
import { DetallePredialPageRoutingModule } from './detalle-predial-routing.module';
import { IonicModule } from '@ionic/angular';
import { DetallePredialPopoverPage } from '../detalle-predial-popover/detalle-predial-popover';
let DetallePredialModule = class DetallePredialModule {
};
DetallePredialModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
            DetallePredialPageRoutingModule
        ],
        declarations: [
            DetallePredialPage,
            DetallePredialPopoverPage
        ],
        entryComponents: [
            DetallePredialPopoverPage
        ]
    })
], DetallePredialModule);
export { DetallePredialModule };
//# sourceMappingURL=detalle-predial.module.js.map