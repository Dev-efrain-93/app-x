import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    present() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dismiss();
            yield this.loadingController
                .create({
                message: 'Cargando...'
            })
                .then(res => {
                res.present();
            });
        });
    }
    dismiss() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            while ((yield this.loadingController.getTop()) !== undefined) {
                yield this.loadingController.dismiss();
            }
        });
    }
};
LoadingService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController])
], LoadingService);
export { LoadingService };
//# sourceMappingURL=loading.service.js.map