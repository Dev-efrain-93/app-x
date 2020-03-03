(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color='light' (click)=\"startApp()\" [hidden]=\"!showSkip\">\n        Omitir\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [color]=\"colorTheme\" class=\"tutorial-content\" fullscreen>\n  <ion-slides [options]=\"slideOptions\" class=\"tutorial-slides\" #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"true\">\n    <ion-slide class=\"bounce\" *ngFor=\"let slide of tutorialSlideItems; let i=index\">\n      <img class=\"slide-image\" [src]=\"slide.image\"/>\n      <h2 class=\"slide-title\" [innerHtml]=\"slide.title\"></h2>\n      <p class=\"slide-description\" [innerHtml]=\"slide.description\"></p>\n      <ion-button class=\"bounce\" fill=\"solid\" color=\"primary\" (click)=\"startApp()\" *ngIf=\"i == tutorialSlideItems.length - 1\">\n        Continuar\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TutorialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function() { return TutorialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");




const routes = [
    {
        path: '',
        component: _tutorial__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }
];
let TutorialPageRoutingModule = class TutorialPageRoutingModule {
};
TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TutorialPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial */ "./src/app/pages/tutorial/tutorial.ts");
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorial-routing.module */ "./src/app/pages/tutorial/tutorial-routing.module.ts");






let TutorialModule = class TutorialModule {
};
TutorialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]
        ],
        declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
        entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
    })
], TutorialModule);



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\nion-content {\n  opacity: 0.95;\n}\n\n.tutorial-slides {\n  max-height: 100%;\n  min-height: 90%;\n  --bullet-background: radial-gradient(circle, transparent 40%, white 50%);\n  --bullet-background-active: white;\n}\n\n.swiper-slide {\n  display: block;\n  max-height: 100%;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\n.slide-description {\n  margin-top: 2rem;\n  font-size: 0.9em;\n}\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\np b {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHlCQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsaUNBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC8vIFRPRE8gdGVzdCB0cmFuc3BhcmVudCBhbmQgZnVsbHNjcmVlblxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgb3BhY2l0eTogMC45NTtcbn1cblxuLnR1dG9yaWFsLXNsaWRlc3tcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogOTAlO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCA0MCUsIHdoaXRlIDUwJSk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB3aGl0ZTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiAxMDAlOztcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDs7XG59XG5cbi5zbGlkZS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIuMHJlbTtcbiAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogNjAlO1xuICBtYXJnaW46IDM2cHggMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgYiB7XG4gICAgcGFkZGluZzogMHB4OztcbiAgfVxufVxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgb3BhY2l0eTogMC45NTtcbn1cblxuLnR1dG9yaWFsLXNsaWRlcyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDkwJTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgNDAlLCB3aGl0ZSA1MCUpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogd2hpdGU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNsaWRlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzNnB4IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxucCBiIHtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.ts":
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");






let TutorialPage = class TutorialPage {
    constructor(menu, router, storage, statusBar) {
        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.statusBar = statusBar;
        this.showSkip = true;
        this.colorTheme = "primary";
        //colorStatusBar= "#3880ff";//primary
        this.colorStatusBar = "#00A680"; //primary
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
                hexColor: "#00A680"
            },
            {
                title: "¡Que puedes hacer?",
                description: "Realiza el presupuesto a pagar de tu <b>predial</b> o <b>refrendo (vehicular)</b> y paga en unos sencillos pasos.",
                image: "assets/img/ica-slidebox-img-3.png",
                color: "tertiary",
                hexColor: "#adc22e"
            },
            {
                title: "¿Donde pagar?",
                description: "O si lo prefieres, ubica los módulos instalados, consulta sus horarios de atención y acude personalmente para realizar tu pago oportuno.",
                image: "assets/img/ica-slidebox-img-2.png",
                color: "secondary",
                hexColor: "#0b6d54"
            },
            {
                title: "Ingresa",
                description: "Que esperas para conocer los beneficios exclusivos, métodos de pago, información sobre tu predial, refrendo y más.",
                image: "assets/img/ica-slidebox-img-4.png",
                color: "danger",
                hexColor: "#E33F55"
            }
        ];
    }
    startApp() {
        this.router
            .navigateByUrl('/app/tabs/inicio', { replaceUrl: true })
            .then(() => this.storage.set('ion_did_tutorial', true));
        //this.colorStatusBar = "#3880ff";//primary
        this.colorStatusBar = "#00A680"; //primary
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
                this.colorStatusBar = this.tutorialSlideItems[idx].hexColor || "#00A680";
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
TutorialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-tutorial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tutorial.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tutorial.scss */ "./src/app/pages/tutorial/tutorial.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], TutorialPage);



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module-es2015.js.map