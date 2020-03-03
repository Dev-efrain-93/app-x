(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pago-refrendo-pago-refrendo-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago-refrendo/pago-refrendo.page.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago-refrendo/pago-refrendo.page.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pagar refrendo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <iframe *ngIf=\"secureExternalLink\" [src]=\"secureExternalLink\" width=\"100%\" height=\"100%\" frameborder=\"0\" ></iframe>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/pago-refrendo/pago-refrendo.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/pago-refrendo/pago-refrendo.module.ts ***!
          \*************************************************************/
        /*! exports provided: PagoRefrendoPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoRefrendoPageModule", function () { return PagoRefrendoPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _pago_refrendo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pago-refrendo.page */ "./src/app/pages/pago-refrendo/pago-refrendo.page.ts");
            var routes = [
                {
                    path: '',
                    component: _pago_refrendo_page__WEBPACK_IMPORTED_MODULE_6__["PagoRefrendoPage"]
                }
            ];
            var PagoRefrendoPageModule = /** @class */ (function () {
                function PagoRefrendoPageModule() {
                }
                return PagoRefrendoPageModule;
            }());
            PagoRefrendoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_pago_refrendo_page__WEBPACK_IMPORTED_MODULE_6__["PagoRefrendoPage"]]
                })
            ], PagoRefrendoPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/pago-refrendo/pago-refrendo.page.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/pago-refrendo/pago-refrendo.page.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ28tcmVmcmVuZG8vcGFnby1yZWZyZW5kby5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/pago-refrendo/pago-refrendo.page.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/pages/pago-refrendo/pago-refrendo.page.ts ***!
          \***********************************************************/
        /*! exports provided: PagoRefrendoPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoRefrendoPage", function () { return PagoRefrendoPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var PagoRefrendoPage = /** @class */ (function () {
                function PagoRefrendoPage(router, route, domSanitizer) {
                    this.router = router;
                    this.route = route;
                    this.domSanitizer = domSanitizer;
                    //#region Obtener detalles
                    if (this.router.getCurrentNavigation().extras.state) {
                        this.detalleRefrendo = this.router.getCurrentNavigation().extras.state.detalleRefrendo;
                        console.log(this.detalleRefrendo);
                    }
                    //#endregion
                    this.externalLink = "https://ionicacademy.com/";
                    this.secureExternalLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalLink);
                }
                PagoRefrendoPage.prototype.ngOnInit = function () {
                };
                return PagoRefrendoPage;
            }());
            PagoRefrendoPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
            ]; };
            PagoRefrendoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'pago-refrendo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pago-refrendo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pago-refrendo/pago-refrendo.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pago-refrendo.page.scss */ "./src/app/pages/pago-refrendo/pago-refrendo.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
            ], PagoRefrendoPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pago-refrendo-pago-refrendo-module-es2015.js.map
//# sourceMappingURL=pago-refrendo-pago-refrendo-module-es5.js.map
//# sourceMappingURL=pago-refrendo-pago-refrendo-module-es5.js.map