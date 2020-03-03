import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let LugaresPage = class LugaresPage {
    constructor(config, modalCtrl, navParams, statusBar) {
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
        this.tracks = [];
    }
    ionViewWillEnter() {
        this.ios = this.config.get('mode') === `ios`;
    }
    // TODO use the ionViewDidEnter event
    ngAfterViewInit() {
    }
    cerrar() {
        this.modalCtrl.dismiss();
    }
};
LugaresPage = tslib_1.__decorate([
    Component({
        selector: 'page-lugares',
        templateUrl: 'lugares.html',
        styleUrls: ['./lugares.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Config,
        ModalController,
        NavParams,
        StatusBar])
], LugaresPage);
export { LugaresPage };
//# sourceMappingURL=lugares.js.map