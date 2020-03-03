import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login';
import { LoginPageRoutingModule } from './login-routing.module';
let LoginModule = class LoginModule {
};
LoginModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LoginPageRoutingModule
        ],
        declarations: [
            LoginPage,
        ]
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map