import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PredialPage } from './predial';
import { PredialPageRoutingModule } from './predial-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
let PredialModule = class PredialModule {
};
PredialModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
            ReactiveFormsModule,
            PredialPageRoutingModule
        ],
        declarations: [PredialPage],
    })
], PredialModule);
export { PredialModule };
//# sourceMappingURL=predial.module.js.map