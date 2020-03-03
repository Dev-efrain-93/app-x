import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    info(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.toastController.create({
                message: message,
                duration: 3000,
                animated: true,
                showCloseButton: true,
                closeButtonText: "Cerrar",
                position: "bottom"
            }).then((obj) => {
                obj.present();
            });
        });
    }
    present(message) {
        this.toastController.dismiss().then((obj) => {
        }).catch(() => {
        }).finally(() => {
            this.info(message);
        });
    }
};
ToastService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController])
], ToastService);
export { ToastService };
//# sourceMappingURL=toast.service.js.map