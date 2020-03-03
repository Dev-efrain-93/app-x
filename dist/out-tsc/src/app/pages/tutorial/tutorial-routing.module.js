import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TutorialPage } from './tutorial';
const routes = [
    {
        path: '',
        component: TutorialPage
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TutorialPageRoutingModule);
export { TutorialPageRoutingModule };
//# sourceMappingURL=tutorial-routing.module.js.map