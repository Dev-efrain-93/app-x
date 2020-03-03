import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SessionDetailPage } from './session-detail';
const routes = [
    {
        path: '',
        component: SessionDetailPage
    }
];
let SessionDetailPageRoutingModule = class SessionDetailPageRoutingModule {
};
SessionDetailPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SessionDetailPageRoutingModule);
export { SessionDetailPageRoutingModule };
//# sourceMappingURL=session-detail-routing.module.js.map