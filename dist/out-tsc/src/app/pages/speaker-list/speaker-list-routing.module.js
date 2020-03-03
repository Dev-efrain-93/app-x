import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpeakerListPage } from './speaker-list';
const routes = [
    {
        path: '',
        component: SpeakerListPage
    }
];
let SpeakerListPageRoutingModule = class SpeakerListPageRoutingModule {
};
SpeakerListPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SpeakerListPageRoutingModule);
export { SpeakerListPageRoutingModule };
//# sourceMappingURL=speaker-list-routing.module.js.map