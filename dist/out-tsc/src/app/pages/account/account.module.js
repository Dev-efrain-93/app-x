import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccountPage } from './account';
import { AccountPageRoutingModule } from './account-routing.module';
let AccountModule = class AccountModule {
};
AccountModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
            AccountPageRoutingModule
        ],
        declarations: [
            AccountPage,
        ]
    })
], AccountModule);
export { AccountModule };
//# sourceMappingURL=account.module.js.map