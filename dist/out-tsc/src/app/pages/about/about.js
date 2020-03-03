import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
let AboutPage = class AboutPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    presentPopover(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: PopoverPage,
                event
            });
            yield popover.present();
        });
    }
};
AboutPage = tslib_1.__decorate([
    Component({
        selector: 'page-about',
        templateUrl: 'about.html',
        styleUrls: ['./about.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PopoverController])
], AboutPage);
export { AboutPage };
//# sourceMappingURL=about.js.map