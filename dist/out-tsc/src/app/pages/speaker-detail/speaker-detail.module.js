import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerDetailPage } from './speaker-detail';
import { SpeakerDetailPageRoutingModule } from './speaker-detail-routing.module';
import { IonicModule } from '@ionic/angular';
let SpeakerDetailModule = class SpeakerDetailModule {
};
SpeakerDetailModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
            SpeakerDetailPageRoutingModule
        ],
        declarations: [
            SpeakerDetailPage,
        ]
    })
], SpeakerDetailModule);
export { SpeakerDetailModule };
//# sourceMappingURL=speaker-detail.module.js.map