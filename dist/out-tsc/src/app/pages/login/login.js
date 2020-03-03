import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
let LoginPage = class LoginPage {
    constructor(userData, router) {
        this.userData = userData;
        this.router = router;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    onLogin(form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.router.navigateByUrl('/app/tabs/schedule');
        }
    }
    onSignup() {
        this.router.navigateByUrl('/signup');
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
        styleUrls: ['./login.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UserData,
        Router])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map