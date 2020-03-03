import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
let SupportPage = class SupportPage {
    constructor(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    ionViewDidEnter() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'This does not actually send a support request.',
                duration: 3000
            });
            yield toast.present();
        });
    }
    submit(form) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.submitted = true;
            if (form.valid) {
                this.supportMessage = '';
                this.submitted = false;
                const toast = yield this.toastCtrl.create({
                    message: 'Your support request has been sent.',
                    duration: 3000
                });
                yield toast.present();
            }
        });
    }
};
SupportPage = tslib_1.__decorate([
    Component({
        selector: 'page-support',
        templateUrl: 'support.html',
        styleUrls: ['./support.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController,
        ToastController])
], SupportPage);
export { SupportPage };
//# sourceMappingURL=support.js.map