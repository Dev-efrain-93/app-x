(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pago-predial-pago-predial-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago-predial/pago-predial.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago-predial/pago-predial.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pagar predial</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openUrlInAppBrowser()\">\n        <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\n      </ion-button>\n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <iframe *ngIf=\"secureExternalLink\" [src]=\"secureExternalLink\" width=\"100%\" height=\"100%\" frameborder=\"0\" ></iframe>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/pago-predial/pago-predial.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/pago-predial/pago-predial.module.ts ***!
  \***********************************************************/
/*! exports provided: PagoPredialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoPredialPageModule", function() { return PagoPredialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pago_predial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pago-predial.page */ "./src/app/pages/pago-predial/pago-predial.page.ts");







const routes = [
    {
        path: '',
        component: _pago_predial_page__WEBPACK_IMPORTED_MODULE_6__["PagoPredialPage"]
    }
];
let PagoPredialPageModule = class PagoPredialPageModule {
};
PagoPredialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pago_predial_page__WEBPACK_IMPORTED_MODULE_6__["PagoPredialPage"]]
    })
], PagoPredialPageModule);



/***/ }),

/***/ "./src/app/pages/pago-predial/pago-predial.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/pago-predial/pago-predial.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ28tcHJlZGlhbC9wYWdvLXByZWRpYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/pago-predial/pago-predial.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pago-predial/pago-predial.page.ts ***!
  \*********************************************************/
/*! exports provided: PagoPredialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoPredialPage", function() { return PagoPredialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





let PagoPredialPage = class PagoPredialPage {
    constructor(router, route, domSanitizer, inappbrowser) {
        this.router = router;
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.inappbrowser = inappbrowser;
        this.iabOptions = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'no',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        //#region Obtener detalles
        if (this.router.getCurrentNavigation().extras.state) {
            this.detallePredial = this.router.getCurrentNavigation().extras.state.detallePredial;
            console.log(this.detallePredial);
        }
        //#endregion
        this.externalLink = "https://ionicacademy.com/";
        this.secureExternalLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalLink);
    }
    ngOnInit() {
    }
    openUrlInAppBrowser() {
        const browser = this.inappbrowser.create('https://www.stackoverflow.com', '_self', this.iabOptions);
    }
};
PagoPredialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
PagoPredialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pago-predial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pago-predial.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago-predial/pago-predial.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pago-predial.page.scss */ "./src/app/pages/pago-predial/pago-predial.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
], PagoPredialPage);



/***/ })

}]);
//# sourceMappingURL=pago-predial-pago-predial-module-es2015.js.map