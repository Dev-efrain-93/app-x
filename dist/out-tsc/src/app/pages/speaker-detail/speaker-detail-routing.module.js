import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpeakerDetailPage } from './speaker-detail';
const routes = [
    {
        path: '',
        component: SpeakerDetailPage
    }
];
let SpeakerDetailPageRoutingModule = class SpeakerDetailPageRoutingModule {
};
SpeakerDetailPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SpeakerDetailPageRoutingModule);
export { SpeakerDetailPageRoutingModule };
//# sourceMappingURL=speaker-detail-routing.module.js.map