import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportPage } from './support';
import { SupportPageRoutingModule } from './support-routing.module';
let SupportModule = class SupportModule {
};
SupportModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SupportPageRoutingModule
        ],
        declarations: [
            SupportPage,
        ]
    })
], SupportModule);
export { SupportModule };
//# sourceMappingURL=support.module.js.map