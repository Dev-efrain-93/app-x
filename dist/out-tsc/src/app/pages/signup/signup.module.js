import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup';
import { SignupPageRoutingModule } from './signup-routing.module';
let SignUpModule = class SignUpModule {
};
SignUpModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SignupPageRoutingModule
        ],
        declarations: [
            SignupPage,
        ]
    })
], SignUpModule);
export { SignUpModule };
//# sourceMappingURL=signup.module.js.map