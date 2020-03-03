import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController, Config, IonSlides } from '@ionic/angular';
import { LugaresPage } from '../lugares/lugares';
let InicioPage = class InicioPage {
    constructor(alertCtrl, loadingCtrl, modalCtrl, router, toastCtrl, config) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.config = config;
        this.slideOptions = {
            initialSlide: 0,
            speed: 700,
            autoplay: {
                disableOnInteraction: false,
                reverseDirection: false
            },
            direction: 'vertical',
            centeredSlides: true,
            loop: true,
            preloadImages: true,
            lazy: false
        };
        this.slideItems = [];
        this.now = new Date(Date.now());
        this.greetting = '';
        this.showToolbar = false;
        this.excludeTracks = [];
        this.slideItems = [
            {
                title: "¡Bienvenido!",
                description: "Realiza el pago de tus <b>impuestos</b> estés donde estés, conectándote desde tu dispositivo móvil.",
                image: "assets/img/slides/slide-01.jpg",
                color: "primary",
                hexColor: "#009EE3"
            },
            {
                title: "¡Que puedes hacer?",
                description: "Realiza el presupuesto a pagar de tu <b>predial</b> o <b>refrendo (vehicular)</b> y paga en unos sencillos pasos.",
                image: "assets/img/slides/slide-02.jpg",
                color: "tertiary",
                hexColor: "#7044ff"
            },
            {
                title: "¿Donde pagar?",
                description: "O si lo prefieres, ubica los módulos instalados, consulta sus horarios de atención y acude personalmente para realizar tu pago oportuno.",
                image: "assets/img/slides/slide-03.jpg",
                color: "secondary",
                hexColor: "#17a2b8"
            },
            {
                title: "Ingresa",
                description: "Que esperas para conocer los beneficios exclusivos, métodos de pago, información sobre tu predial, refrendo y más.",
                image: "assets/img/slides/slide-04.jpg",
                color: "success",
                hexColor: "#03a863"
            }
        ];
        console.debug("Hora actual: " + this.now.getHours());
        if (this.now.getHours() < 12) {
            this.greetting = 'Buenos días';
        }
        else if (this.now.getHours() >= 12 && this.now.getHours() < 18) {
            this.greetting = 'Buenas tardes';
        }
        else if (this.now.getHours() >= 18 && this.now.getHours() <= 24) {
            this.greetting = 'Buenas noches';
        }
    }
    ngOnInit() {
        this.ios = this.config.get('mode') === 'ios';
    }
    //Fix: detiene la reproducción automática del slide cuando se sale de la vista
    ionViewWillLeave() {
        this.slides.stopAutoplay();
    }
    //Fix: inicia la reproducción automática del slide cuando se ingresa a la vista
    ionViewDidEnter() {
        this.slides.startAutoplay();
    }
    openSocial(network, fab) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: `Posting to ${network}`,
                duration: (Math.random() * 1000) + 500
            });
            yield loading.present();
            yield loading.onWillDismiss();
            fab.close();
        });
    }
    onScroll($event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ($event && $event.detail && $event.detail.scrollTop) {
                const scrollTop = $event.detail.scrollTop;
                if (scrollTop >= 250) {
                    this.showToolbar = true;
                }
                else {
                    this.showToolbar = false;
                }
            }
        });
    }
    verLugaresPago() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: LugaresPage,
            });
            yield modal.present();
            /*
            const { data } = await modal.onWillDismiss();
            console.log(data);
            if (data) {
              this.excludeTracks = data;
            }*/
        });
    }
};
tslib_1.__decorate([
    ViewChild('homeSlides', { static: true }),
    tslib_1.__metadata("design:type", IonSlides)
], InicioPage.prototype, "slides", void 0);
InicioPage = tslib_1.__decorate([
    Component({
        selector: 'page-inicio',
        templateUrl: 'inicio.html',
        styleUrls: ['./inicio.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController,
        LoadingController,
        ModalController,
        Router,
        ToastController,
        Config])
], InicioPage);
export { InicioPage };
//# sourceMappingURL=inicio.js.map