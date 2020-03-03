import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let TutorialPage = class TutorialPage {
    constructor(menu, router, storage, statusBar) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.statusBar = statusBar;
        this.showSkip = true;
        this.colorTheme = "primary";
        //colorStatusBar= "#3880ff";//primary
        this.colorStatusBar = "#009EE3"; //primary
        this.slideOptions = {
            initialSlide: 0,
            autoplay: false
        };
        this.tutorialSlideItems = [];
        this.tutorialSlideItems = [
            {
                title: "¡Bienvenido!",
                description: "Realiza el pago de tus <b>impuestos</b> estés donde estés, conectándote desde tu dispositivo móvil.",
                image: "assets/img/ica-slidebox-img-1.png",
                color: "primary",
                hexColor: "#009EE3"
            },
            {
                title: "¡Que puedes hacer?",
                description: "Realiza el presupuesto a pagar de tu <b>predial</b> o <b>refrendo (vehicular)</b> y paga en unos sencillos pasos.",
                image: "assets/img/ica-slidebox-img-3.png",
                color: "tertiary",
                hexColor: "#7044ff"
            },
            {
                title: "¿Donde pagar?",
                description: "O si lo prefieres, ubica los módulos instalados, consulta sus horarios de atención y acude personalmente para realizar tu pago oportuno.",
                image: "assets/img/ica-slidebox-img-2.png",
                color: "secondary",
                hexColor: "#17a2b8"
            },
            {
                title: "Ingresa",
                description: "Que esperas para conocer los beneficios exclusivos, métodos de pago, información sobre tu predial, refrendo y más.",
                image: "assets/img/ica-slidebox-img-4.png",
                color: "success",
                hexColor: "#03a863"
            }
        ];
    }
    startApp() {
        this.router
            .navigateByUrl('/app/tabs/inicio', { replaceUrl: true })
            .then(() => this.storage.set('ion_did_tutorial', true));
        //this.colorStatusBar = "#3880ff";//primary
        this.colorStatusBar = "#009EE3"; //primary
        this.statusBar.backgroundColorByHexString(this.colorStatusBar);
        this.statusBar.styleLightContent();
    }
    onSlideChangeStart(event) {
        event.target.isEnd().then(isEnd => {
            this.showSkip = !isEnd;
            this.slides.getActiveIndex().then(index => {
                console.log("Active index: " + index);
                let idx = index || 0;
                this.colorTheme = this.tutorialSlideItems[idx].color || "primary";
                this.colorStatusBar = this.tutorialSlideItems[idx].hexColor || "#009EE3";
                this.statusBar.backgroundColorByHexString(this.colorStatusBar);
                this.statusBar.styleLightContent();
            });
        });
    }
    ionViewWillEnter() {
        this.storage.get('ion_did_tutorial').then(res => {
            if (res === true) {
                this.router.navigateByUrl('/app/tabs/inicio', { replaceUrl: true });
            }
        });
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }
};
tslib_1.__decorate([
    ViewChild('slides', { static: true }),
    tslib_1.__metadata("design:type", IonSlides)
], TutorialPage.prototype, "slides", void 0);
TutorialPage = tslib_1.__decorate([
    Component({
        selector: 'page-tutorial',
        templateUrl: 'tutorial.html',
        styleUrls: ['./tutorial.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [MenuController,
        Router,
        Storage,
        StatusBar])
], TutorialPage);
export { TutorialPage };
//# sourceMappingURL=tutorial.js.map