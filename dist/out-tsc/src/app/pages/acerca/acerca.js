import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AcercaPopoverPage } from '../acerca-popover/acerca-popover';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
let AcercaPage = class AcercaPage {
    constructor(popoverCtrl, storage, router, appVersion) {
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.router = router;
        this.appVersion = appVersion;
        this.appVersion.getAppName().then(value => {
            this.appName = value;
        }).catch(err => {
            console.log(err);
            this.appName = 'SEFIN Móvil';
        });
        this.appVersion.getVersionNumber().then(value => {
            this.versionNumber = value;
        }).catch(err => {
            console.log(err);
            this.versionNumber = '0.0.0';
        });
    }
    presentPopover(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: AcercaPopoverPage,
                event: event
            });
            yield popover.present();
        });
    }
    openTutorial() {
        this.storage.set('ion_did_tutorial', false);
        this.router.navigateByUrl('/tutorial');
    }
};
AcercaPage = tslib_1.__decorate([
    Component({
        selector: 'page-acerca',
        templateUrl: 'acerca.html',
        styleUrls: ['./acerca.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PopoverController,
        Storage,
        Router,
        AppVersion])
], AcercaPage);
export { AcercaPage };
//# sourceMappingURL=acerca.js.map