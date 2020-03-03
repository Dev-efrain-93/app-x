import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionDetailPage } from './session-detail';
import { SessionDetailPageRoutingModule } from './session-detail-routing.module';
import { IonicModule } from '@ionic/angular';
let SessionDetailModule = class SessionDetailModule {
};
SessionDetailModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
            SessionDetailPageRoutingModule
        ],
        declarations: [
            SessionDetailPage,
        ]
    })
], SessionDetailModule);
export { SessionDetailModule };
//# sourceMappingURL=session-detail.module.js.map