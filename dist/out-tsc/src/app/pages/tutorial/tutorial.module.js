import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TutorialPage } from './tutorial';
import { TutorialPageRoutingModule } from './tutorial-routing.module';
let TutorialModule = class TutorialModule {
};
TutorialModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
            TutorialPageRoutingModule
        ],
        declarations: [TutorialPage],
        entryComponents: [TutorialPage],
    })
], TutorialModule);
export { TutorialModule };
//# sourceMappingURL=tutorial.module.js.map