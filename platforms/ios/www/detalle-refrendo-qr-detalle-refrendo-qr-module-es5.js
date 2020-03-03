(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-refrendo-qr-detalle-refrendo-qr-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Línea de captura cerrada</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid-full-height\">\n    <ion-row class=\"row-full-height\" justify-content-center align-items-center>\n\n      <ion-item *ngIf=\"\">\n        <ion-input type=\"text\" placeholder=\"Linea de captura cerrada\" [(ngModel)]=\"qrData\"></ion-input>\n      </ion-item>\n\n      <ion-card class=\"qrCard\" mode=\"ios\">\n\n        <div class=\"scene scene--card\">\n          <div class=\"card\">\n            <div class=\"card__face card__face--front\">\n              <div class=\"qrcode\">\n                <qr-code [value]=\"qrData\" [size]=\"200\" [canvas]=\"true\" class=\"ion-padding\"></qr-code>\n                <h5>{{detalleRefrendo.lcc}}</h5>\n              </div>\n            </div>\n            <div class=\"card__face card__face--back\">\n              <div class=\"barcode\">\n                <ngx-barcode [bc-value]=\"qrData\" [bc-display-value]=\"false\" [bc-element-type]=\"elementType\"></ngx-barcode>\n                <h5>{{detalleRefrendo.lcc}}</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <ion-card-content>\n          <br *ngIf=\"isQr\">\n          <ion-grid>\n            <ion-row>\n              <ion-col class=\"col-align-center\">\n                  <ion-button color=\"tertiary\" (click)=\"flipCard()\">\n                    <span *ngIf=\"isQr\">Ver código de barras</span>\n                    <span *ngIf=\"!isQr\">Ver código QR</span>\n                    <!--<ion-icon slot=\"icon-only\" src=\"../../../assets/icons/rotate-z.svg\"></ion-icon>-->\n                  </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <br>\n          <p class=\"info-text\">Acude a un módulo de pago y presenta este código para agilizar el pago de tu refrendo ó paga directamente desde aquí.</p>\n          <br>\n        </ion-card-content>\n      </ion-card>\n\n      <!--Validar código QR-->\n      <ion-card *ngIf=\"\" mode=\"ios\">\n        <ion-card-header>\n          <ion-button expand=\"block\" (click)=\"scanCodeQR()\">\n            <ion-icon name=\"qr-scanner\" slot=\"start\"></ion-icon>\n            Escanear QR\n          </ion-button>\n        </ion-card-header>\n        <ion-card-content *ngIf=\"scannedCode\">\n          El código escaneado es: {{ scannedCode }}\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"pagarRefrendo()\">\n            Pagar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"\">\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"downloadCode()\" *ngIf=\"qrData\">\n            Descargar código\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.module.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.module.ts ***!
          \*************************************************************************/
        /*! exports provided: DetalleRefrendoQrPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRefrendoQrPageModule", function () { return DetalleRefrendoQrPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _detalle_refrendo_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-refrendo-qr.page */ "./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.ts");
            /* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
            /* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
            var routes = [
                {
                    path: '',
                    component: _detalle_refrendo_qr_page__WEBPACK_IMPORTED_MODULE_6__["DetalleRefrendoQrPage"]
                }
            ];
            var DetalleRefrendoQrPageModule = /** @class */ (function () {
                function DetalleRefrendoQrPageModule() {
                }
                return DetalleRefrendoQrPageModule;
            }());
            DetalleRefrendoQrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        angular2_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"],
                        ngx_barcode__WEBPACK_IMPORTED_MODULE_8__["NgxBarcodeModule"]
                    ],
                    declarations: [_detalle_refrendo_qr_page__WEBPACK_IMPORTED_MODULE_6__["DetalleRefrendoQrPage"]]
                })
            ], DetalleRefrendoQrPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".grid-full-height {\n  height: 100%;\n}\n\n.row-full-height {\n  height: 100%;\n}\n\n.info-text {\n  font-size: medium;\n}\n\n.qrcode {\n  text-align: center !important;\n  padding: 10px !important;\n}\n\n.barcode {\n  text-align: center !important;\n  padding: 10px !important;\n}\n\n/*Flip div*/\n\n.scene {\n  height: 200px;\n  margin: 40px 0;\n  perspective: 600px;\n}\n\n.card {\n  position: relative;\n  cursor: pointer;\n  transform-style: preserve-3d;\n  transform-origin: center right;\n  transition: transform 1s;\n}\n\n.card.is-flipped {\n  transform: translateX(-100%) rotateY(-180deg);\n}\n\n.card__face {\n  position: absolute;\n  width: 100%;\n  height: 225px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.card__face--front {\n  background: white;\n}\n\n.card__face--back {\n  background: white;\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvZGV0YWxsZS1yZWZyZW5kby1xci9kZXRhbGxlLXJlZnJlbmRvLXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1yZWZyZW5kby1xci9kZXRhbGxlLXJlZnJlbmRvLXFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSw2QkFBQTtFQUNBLHdCQUFBO0FDQUo7O0FER0E7RUFDSSw2QkFBQTtFQUNBLHdCQUFBO0FDQUo7O0FER0EsV0FBQTs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQ0RKOztBRElBO0VBQ0ksNkNBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV0YWxsZS1yZWZyZW5kby1xci9kZXRhbGxlLXJlZnJlbmRvLXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWZ1bGwtaGVpZ2h0IHtcblxuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJvdy1mdWxsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW5mby10ZXh0IHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLnFyY29kZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYmFyY29kZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4vKkZsaXAgZGl2Ki9cblxuLnNjZW5lIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbjogNDBweCAwO1xuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcbn1cbiAgXG4uY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG5cbi5jYXJkLmlzLWZsaXBwZWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlWSgtMTgwZGVnKTtcbn1cblxuLmNhcmRfX2ZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIyNXB4O1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNhcmRfX2ZhY2UtLWZyb250IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmRfX2ZhY2UtLWJhY2sge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuIiwiLmdyaWQtZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb3ctZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbmZvLXRleHQge1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLnFyY29kZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYXJjb2RlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLypGbGlwIGRpdiovXG4uc2NlbmUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDQwcHggMDtcbiAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbn1cblxuLmNhcmQuaXMtZmxpcHBlZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlWSgtMTgwZGVnKTtcbn1cblxuLmNhcmRfX2ZhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyNXB4O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jYXJkX19mYWNlLS1mcm9udCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY2FyZF9fZmFjZS0tYmFjayB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.ts ***!
          \***********************************************************************/
        /*! exports provided: DetalleRefrendoQrPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRefrendoQrPage", function () { return DetalleRefrendoQrPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
            /* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "./node_modules/@ionic-native/base64-to-gallery/ngx/index.js");
            /* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
            /* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
            /* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
            var DetalleRefrendoQrPage = /** @class */ (function () {
                function DetalleRefrendoQrPage(router, route, barcodeScanner, base64ToGallery, toastService, androidPermissions, fileOpener) {
                    var _this = this;
                    this.router = router;
                    this.route = route;
                    this.barcodeScanner = barcodeScanner;
                    this.base64ToGallery = base64ToGallery;
                    this.toastService = toastService;
                    this.androidPermissions = androidPermissions;
                    this.fileOpener = fileOpener;
                    this.qrData = '';
                    this.scannedCode = null;
                    this.elementType = "img";
                    this.isQr = true;
                    this.route.queryParams.subscribe(function (params) {
                        if (_this.router.getCurrentNavigation().extras.state) {
                            _this.detalleRefrendo = _this.router.getCurrentNavigation().extras.state.detalleRefrendo;
                            _this.qrData = _this.detalleRefrendo.lcc;
                            console.log(_this.detalleRefrendo);
                        }
                    });
                    //#region Permisos necesarios (almacenar imagenes)
                    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) { return console.log("Permissions granted", result.hasPermission); }, function (error) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE); });
                    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
                    //#endregion
                }
                DetalleRefrendoQrPage.prototype.ngOnInit = function () {
                };
                DetalleRefrendoQrPage.prototype.flipCard = function () {
                    var card = document.querySelector('.card');
                    card.classList.toggle('is-flipped');
                    this.isQr = !this.isQr;
                };
                /**
               * Comprobar código QR coincida con linea de captura cerrada
               */
                DetalleRefrendoQrPage.prototype.scanCodeQR = function () {
                    var _this = this;
                    this.barcodeScanner.scan().then(function (barcodeData) {
                        _this.scannedCode = barcodeData;
                    }, function (err) {
                        console.log(err);
                        _this.toastService.present(err);
                    });
                };
                /**
                 * Descargar código QR
                 */
                DetalleRefrendoQrPage.prototype.downloadCode = function () {
                    var _this = this;
                    var element = null;
                    if (this.isQr) {
                        element = document.querySelector('.qrcode qr-code canvas');
                    }
                    else {
                        element = document.querySelector('.barcode img');
                    }
                    if (!element) {
                        console.log("Elemento código no recuperado. Intente mas tarede");
                        this.toastService.present("Elemento código no recuperado. Intente mas tarde");
                        return false;
                    }
                    var imageData = this.isQr ? element.toDataURL('image/jpeg').toString() : element.currentSrc.toString();
                    console.log('data: ', imageData);
                    var data = imageData.split(',')[1];
                    var now = new Date(Date.now());
                    var fecha = now.toLocaleString();
                    var nombreArchivo = 'presupuesto_vehicular_' + this.detalleRefrendo.lcc + '_' + fecha;
                    this.base64ToGallery.base64ToGallery(data, { prefix: '_img', mediaScanner: true })
                        .then(function (res) {
                        console.log("Imagen guardada con exito", res);
                        //await this.toastService.present("El código ha sido guardado en tu Galería de Fotos");
                        _this.fileOpener.open(res, "image/png").then(function () { return console.log("Archivo abierto con exito", res); })
                            .catch(function (e) { return console.log("Error al intentar abrir el archivo", res); });
                    }, function (error) {
                        console.log("Error guardando imagen en galería", error);
                        _this.toastService.present("Error guardando imagen en galería: " + error);
                    });
                };
                /**
                 * Abrir pasarela pago refrendo
                 */
                DetalleRefrendoQrPage.prototype.pagarRefrendo = function () {
                    console.log("Redirigiendo pasarela pago refrendo");
                    var navigationExtras = {
                        state: {
                            detalleRefrendo: this.detalleRefrendo
                        }
                    };
                    this.router.navigateByUrl('/app/tabs/refrendo/pago-refrendo', navigationExtras);
                };
                return DetalleRefrendoQrPage;
            }());
            DetalleRefrendoQrPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
                { type: _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_4__["Base64ToGallery"] },
                { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
                { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"] },
                { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"] }
            ]; };
            DetalleRefrendoQrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'detalle-refrendo-qr',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-refrendo-qr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-refrendo-qr.page.scss */ "./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
                    _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"],
                    _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_4__["Base64ToGallery"],
                    _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
                    _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"],
                    _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"]])
            ], DetalleRefrendoQrPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=detalle-refrendo-qr-detalle-refrendo-qr-module-es2015.js.map
//# sourceMappingURL=detalle-refrendo-qr-detalle-refrendo-qr-module-es5.js.map
//# sourceMappingURL=detalle-refrendo-qr-detalle-refrendo-qr-module-es5.js.map