import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
let CheckTutorial = class CheckTutorial {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canLoad() {
        return this.storage.get('ion_did_tutorial').then(res => {
            if (res) {
                this.router.navigate(['/app', 'tabs', 'schedule']);
                return false;
            }
            else {
                return true;
            }
        });
    }
};
CheckTutorial = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Storage, Router])
], CheckTutorial);
export { CheckTutorial };
//# sourceMappingURL=check-tutorial.service.js.map