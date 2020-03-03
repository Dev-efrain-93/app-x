import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Events, MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
let AppComponent = class AppComponent {
    constructor(events, menu, platform, router, splashScreen, statusBar, storage, swUpdate, toastCtrl) {
        this.events = events;
        this.menu = menu;
        this.platform = platform;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.swUpdate = swUpdate;
        this.toastCtrl = toastCtrl;
        this.appPages = [
            {
                title: 'Inicio',
                url: '/app/tabs/inicio',
                icon: 'home'
            },
            {
                title: 'Predial',
                url: '/app/tabs/predial',
                icon: 'compass'
            },
            {
                title: 'Refrendo',
                url: '/app/tabs/refrendo',
                icon: 'logo-model-s'
            },
            {
                title: 'Acerca de',
                url: '/app/tabs/acerca',
                icon: 'information-circle'
            }
        ];
        this.loggedIn = false;
        this.dark = false;
        this.initializeApp();
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.swUpdate.available.subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    message: 'Actualización disponible!',
                    showCloseButton: true,
                    position: 'bottom',
                    closeButtonText: `Reiniciar`
                });
                yield toast.present();
                toast
                    .onDidDismiss()
                    .then(() => this.swUpdate.activateUpdate())
                    .then(() => window.location.reload());
            }));
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByHexString("#009EE3");
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }
    openTutorial() {
        this.menu.enable(false);
        this.storage.set('ion_did_tutorial', false);
        this.router.navigateByUrl('/tutorial');
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Events,
        MenuController,
        Platform,
        Router,
        SplashScreen,
        StatusBar,
        Storage,
        SwUpdate,
        ToastController])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map