(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refrendo-refrendo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refrendo/refrendo.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refrendo/refrendo.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Consultar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card mode=\"ios\">\n    <ion-card-header>\n      <ion-card-title>Refrendo Vehicular</ion-card-title>\n      <ion-row>\n        <ion-col>\n          <ion-text><p class=\"info-text\">Ingrese al menos uno de los siguientes datos</p></ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content class=\"card-content-refrendo\">\n      <ion-grid>\n        \n        <ion-row>\n          <ion-col>\n            <ion-list class=\"form-list\" lines=\"full\">\n              <form [formGroup]=\"formularioConsultaRefrendo\">\n\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\">Placa</ion-label>\n                  <ion-input type=\"text\" formControlName=\"placa\" class=\"form-control\" clearInput placeholder=\"\"></ion-input>\n                  <ion-icon color=\"medium\" src=\"../../../assets/icons/counter.svg\" slot=\"start\"></ion-icon>\n                </ion-item>\n                \n                <ion-item lines=\"none\" class=\"validation-errors\" *ngIf=\"!formularioConsultaRefrendo.controls.placa.valid && (formularioConsultaRefrendo.controls.placa.dirty || enviado)\">\n                    <ion-icon size=\"small\" color=\"danger\" name=\"information-circle\" slot=\"start\" *ngIf=\"formularioConsultaRefrendo.controls.placa.errors.pattern\"></ion-icon><p class=\"error-message\" *ngIf=\"formularioConsultaRefrendo.controls.placa.errors.pattern\">Ingrese una placa de vehículo válida</p>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\">No. de Serie</ion-label>\n                  <ion-input type=\"text\" formControlName=\"serie\" class=\"form-control\" clearInput placeholder=\"\"></ion-input>\n                  <ion-icon color=\"medium\" src=\"../../../assets/icons/numeric.svg\" slot=\"start\"></ion-icon>\n                </ion-item>\n                \n                <ion-item lines=\"none\" class=\"validation-errors\" *ngIf=\"!formularioConsultaRefrendo.controls.serie.valid && (formularioConsultaRefrendo.controls.serie.dirty || enviado)\">\n                    <ion-icon size=\"small\" color=\"danger\" name=\"information-circle\" slot=\"start\" *ngIf=\"formularioConsultaRefrendo.controls.serie.errors.pattern\"></ion-icon><p class=\"error-message\" *ngIf=\"formularioConsultaRefrendo.controls.serie.errors.pattern\">Ingrese un número de serie válido</p>\n                </ion-item>\n\n                <ion-item lines=\"none\" style=\"height:10px;\">\n\n                  </ion-item>\n              </form>\n              </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n    <ion-row class=\"cardfooter\" (click)=\"resetForm()\">\n      <ion-col class=\"col-align-center\">\n            <p class=\"p-text-primary\">Limpiar</p>\n      </ion-col>\n    </ion-row>\n    <!--<img src=\"../../../assets/img/a1486213390617.562732ef5e8c1.jpeg\" style=\"opacity: 0.1;\">-->\n  </ion-card>\n\n  <ion-card *ngIf=\"consultasRefrendo.length > 0\" mode=\"ios\">\n    <ion-card-header>\n      <ion-card-title>Consultas recientes</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let consulta of consultasRefrendo\" detail>\n          <ion-grid>\n            <!--<ion-row (click)=\"ejecutarConsultaReciente(consulta)\">-->\n            <ion-row (click)=\"ejecutarConsultaRecienteFake(consulta)\">\n              <ion-col class=\"align-self-center\">\n                <p *ngIf=\"consulta.data.vehiculo.placaActual\"><strong>Placa: </strong> {{consulta.data.vehiculo.placaActual}}</p>\n                <p *ngIf=\"consulta.data.vehiculo.serie\"><strong>No. de Serie: </strong> {{consulta.data.vehiculo.serie}}</p>\n                <p class=\"medium-color-text\">{{consulta.date | date: 'MMM d, y, h:mm:ss a'}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n    <ion-row class=\"cardfooter\" (click)=\"removerConsultasRefrendoRecientes()\">\n      <ion-col class=\"col-align-center\">\n            <p class=\"p-text-primary\">Eliminar consultas recientes</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <!--<ion-button (click)=\"consultarRefrendo()\" expand=\"block\" [disabled]=\"!formularioConsultaRefrendo.valid\" >Buscar</ion-button>-->\n            <!--<ion-button (click)=\"consultarRefrendo()\" expand=\"block\">Buscar</ion-button>-->\n            <ion-button (click)=\"consultaRefrendoFake()\" expand=\"block\">Buscar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/refrendo/refrendo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/refrendo/refrendo.module.ts ***!
  \***************************************************/
/*! exports provided: RefrendoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefrendoPageModule", function() { return RefrendoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refrendo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refrendo */ "./src/app/pages/refrendo/refrendo.ts");








const routes = [
    {
        path: '',
        component: _refrendo__WEBPACK_IMPORTED_MODULE_6__["RefrendoPage"]
    }
];
let RefrendoPageModule = class RefrendoPageModule {
};
RefrendoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_refrendo__WEBPACK_IMPORTED_MODULE_6__["RefrendoPage"]]
    })
], RefrendoPageModule);



/***/ }),

/***/ "./src/app/pages/refrendo/refrendo.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/refrendo/refrendo.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  --placeholder-opacity: 0.33;\n}\n\nion-item {\n  --highlight-color-valid: none;\n  --highlight-color-invalid: none;\n  --highlight-color-focused: none;\n  --border-color: #f7f7f7;\n}\n\n.card-content-refrendo {\n  margin-top: -20px;\n}\n\n.toolbar-no-border {\n  --border-color: transparent;\n}\n\n.form-list {\n  margin: 0 -20px 0 -20px;\n}\n\n.scroll {\n  background: #ededed;\n}\n\n.refrendo-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.refrendo-card ion-card-header {\n  padding: 0;\n}\n\n.refrendo-card ion-card-header .item {\n  padding: 4px 16px;\n}\n\n.refrendo-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.invalid {\n  border: 2px solid #ea6153;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n  margin: 2px;\n  vertical-align: middle;\n}\n\n.error-icon {\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.validation-errors {\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\n.footer-button {\n  margin: 0px !important;\n}\n\n.col-align-end {\n  text-align: end;\n}\n\n.col-align-center {\n  text-align: center;\n}\n\n.p-text-primary {\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n\n.align-self-center {\n  align-self: center;\n}\n\n.medium-color-text {\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvcmVmcmVuZG8vcmVmcmVuZG8uc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVmcmVuZG8vcmVmcmVuZG8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFRTtFQUNFLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBRE1FO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7QUNISjs7QURNRTtFQUNFLDhCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWZyZW5kby9yZWZyZW5kby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuMzM7XG4gIH1cbiAgXG4gIGlvbi1pdGVtIHtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogbm9uZTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiBub25lO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmN2Y3Zjc7XG4gIH1cbiAgXG4gIC5jYXJkLWNvbnRlbnQtcmVmcmVuZG8ge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICB9XG5cbiAgLnRvb2xiYXItbm8tYm9yZGVyIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxpc3Qge1xuICAgIG1hcmdpbjogMCAtMjBweCAwIC0yMHB4O1xuICB9XG4gIFxuICAuc2Nyb2xsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICB9XG4gIFxuICAucmVmcmVuZG8tY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLnJlZnJlbmRvLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAucmVmcmVuZG8tY2FyZCBpb24tY2FyZC1oZWFkZXIgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICB9XG4gIFxuICAucmVmcmVuZG8tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuaW52YWxpZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2VhNjE1MztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIC5lcnJvci1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIFxuICAudmFsaWRhdGlvbi1lcnJvcnMge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4OztcbiAgfVxuICBcbiAgLmZvb3Rlci1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5jb2wtYWxpZ24tZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gIH1cbiAgXG4gIC5jb2wtYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkZm9vdGVyIHtcbiAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZWZlZmVmNjk7XG4gIH1cbiAgXG4gIC5wLXRleHQtcHJpbWFyeSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAuYWxpZ24tc2VsZi1jZW50ZXJ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOztcbiAgfVxuICBcbiAgLm1lZGl1bS1jb2xvci10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH0iLCJpb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuMzM7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IG5vbmU7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IG5vbmU7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4uY2FyZC1jb250ZW50LXJlZnJlbmRvIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLW5vLWJvcmRlciB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGlzdCB7XG4gIG1hcmdpbjogMCAtMjBweCAwIC0yMHB4O1xufVxuXG4uc2Nyb2xsIHtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cblxuLnJlZnJlbmRvLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZWZyZW5kby1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yZWZyZW5kby1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaXRlbSB7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4ucmVmcmVuZG8tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2VhNjE1MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBtYXJnaW46IDJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmVycm9yLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZm9vdGVyLWJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtYWxpZ24tZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uY29sLWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnAtdGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubWVkaXVtLWNvbG9yLXRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/refrendo/refrendo.ts":
/*!********************************************!*\
  !*** ./src/app/pages/refrendo/refrendo.ts ***!
  \********************************************/
/*! exports provided: RefrendoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefrendoPage", function() { return RefrendoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_refrendo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/refrendo.service */ "./src/app/services/refrendo.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let RefrendoPage = class RefrendoPage {
    constructor(router, formBuilder, refrendoService, loadingService, toastService, storage) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.refrendoService = refrendoService;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.storage = storage;
        this.enviado = false;
        this.consultasRefrendo = [];
    }
    ionViewDidEnter() {
        //this.resetForm();
        //inicializar consulta fake
        this.inicializarConsultaRefrendoFake();
        //Obtener consultas recientes
        this.storage.get('consultasRefrendo').then((consultas) => {
            this.consultasRefrendo = consultas || [];
        });
    }
    ngOnInit() {
        this.formularioConsultaRefrendo = this.formBuilder.group({
            placa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^$|^[A-Za-z0-9]+$')],
            serie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^$|^[A-Za-z0-9]+$')]
        });
    }
    //#region Consulta refrendo fake
    inicializarConsultaRefrendoFake() {
        this.consultaRefrendoPrueba = {
            idPresupuestoTenencia: 574532,
            urlPresupuesto: "http://pruebaspagose.contribunet.campeche.gob.mx:8082/sit-contribunet/reportePresupuestoVehicularNoLogin?vehiculo=414234&presupuesto=574532",
            vehiculo: {
                idVehiculo: 414234,
                serie: "3VWJ2A1W6WM201136",
                placaActual: "DJJ9228",
                marca: "Volskswagen de",
                clase: "AUTOMOVIL",
                tipo: "SEDAN",
                modelo: "1998",
                color: "ALUMINIO",
                propietario: "PUCH  EK  MANUEL ISAAC",
                importeFactura: 120000.01,
                leyenda: " ",
                calle: "AND YUCATAN MZA 40 LTE 13",
                cilindros: 4,
                colonia: "FIDEL VELAZQUEZ",
                codigoPostal: 24023,
                numeroExterior: "1",
                municipio: "CAMPECHE",
                linea: "Jetta 4 puertas",
                puertas: 4,
                pasajeros: 5,
                capacidad: 0,
                rfv: "0",
                fechaFactura: "19/2/1998",
                procedencia: "NACIONAL",
                propietarioAnterior: "GARCIA ESPINOZA SADY ESTHER",
                claveVehicular: "0050530",
                placaAnterior: " ",
                pesoBruto: 0,
                ciudad: "CAMPECHE",
                rfc: "PUEM0810224",
                motor: "ADD170561"
            },
            serieVehiculo: "3VWJ2A1W6WM201136",
            tenenciaAnual: [
                {
                    anyoFiscal: 2018,
                    importeTotal: 629,
                    recargoMontoTenencia: null,
                    actualizacionMontoTenencia: null,
                    importeTenencia: null,
                    importeDerechoPlaca: 484,
                    recargoDerechoPlaca: 121,
                    actualizacionDerechoPlaca: 24,
                    infracciones: [],
                    montoHonorarios: null,
                    montoMulta: null
                },
                {
                    anyoFiscal: 2019,
                    importeTotal: 564,
                    recargoMontoTenencia: null,
                    actualizacionMontoTenencia: null,
                    importeTenencia: null,
                    importeDerechoPlaca: 507,
                    recargoDerechoPlaca: 52,
                    actualizacionDerechoPlaca: 5,
                    infracciones: [],
                    montoHonorarios: null,
                    montoMulta: null
                }
            ],
            total: 1213,
            tenenciaActualPagada: null,
            expidePlaca: false,
            aplicaDonativo: true,
            donativo: 20,
            lcc: "43191208322126037272"
        };
    }
    consultaRefrendoFake(placa, serie) {
        console.log("Ejecutando consulta refrendo fake");
        this.enviado = true;
        if (!((placa && placa !== "") || (serie && serie !== ""))) {
            if (this.formularioConsultaRefrendo.invalid || !((this.formularioConsultaRefrendo.value['placa'] && this.formularioConsultaRefrendo.value['placa'] !== "") || (this.formularioConsultaRefrendo.value['serie'] && this.formularioConsultaRefrendo.value['serie'] !== ""))) {
                this.toastService.present("Proporcione correctamente al menos uno de los datos solicitados");
                return;
            }
        }
        let _placa = placa || this.formularioConsultaRefrendo.value['placa'];
        let _serie = serie || this.formularioConsultaRefrendo.value['serie'];
        this.refrendo = this.consultaRefrendoPrueba;
        //#region Almacenar consulta como reciente
        let now = new Date(Date.now());
        this.consultasRefrendo.unshift({
            date: now,
            data: this.refrendo
        });
        let slicedArray = this.consultasRefrendo.slice(0, 5);
        this.storage.set('consultasRefrendo', slicedArray);
        //#endregion
        let navigationExtras = {
            state: {
                refrendo: this.refrendo
            }
        };
        this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo', navigationExtras);
    }
    ejecutarConsultaRecienteFake(consulta) {
        console.log("Ejecutando consulta reciente fake");
        if (consulta.data.vehiculo.placaActual === "" && consulta.data.vehiculo.serie === "") {
            console.log("No se encontraron los datos necesarios para ejecutar la consulta");
            this.toastService.present("No se encontraron los datos necesarios para ejecutar la consulta");
            return;
        }
        this.formularioConsultaRefrendo.controls.placa.patchValue(consulta.data.vehiculo.placaActual);
        this.formularioConsultaRefrendo.controls.placa.updateValueAndValidity();
        this.formularioConsultaRefrendo.controls.serie.patchValue(consulta.data.vehiculo.serie);
        this.formularioConsultaRefrendo.controls.serie.updateValueAndValidity();
        this.consultaRefrendoFake(consulta.data.vehiculo.placaActual, consulta.data.vehiculo.serie);
    }
    //#endregion
    /**
     * Consultar refrendo
     * @param placa Placa del vehiculo
     * @param serie Número de serie del vehiculo
     */
    consultarRefrendo(placa, serie) {
        this.enviado = true;
        if (!((placa && placa !== "") || (serie && serie !== ""))) {
            if (this.formularioConsultaRefrendo.invalid || !((this.formularioConsultaRefrendo.value['placa'] && this.formularioConsultaRefrendo.value['placa'] !== "") || (this.formularioConsultaRefrendo.value['serie'] && this.formularioConsultaRefrendo.value['serie'] !== ""))) {
                this.toastService.present("Proporcione correctamente al menos un dato solicitado");
                return;
            }
        }
        this.loadingService.present();
        let _placa = placa || this.formularioConsultaRefrendo.value['placa'];
        let _serie = serie || this.formularioConsultaRefrendo.value['serie'];
        this.refrendoService.obtenerRefrendoVehicular(_placa, _serie).subscribe((response) => {
            if (response) {
                this.refrendo = response;
                this.loadingService.dismiss();
                //#region Almacenar consulta como reciente
                let now = new Date(Date.now());
                this.consultasRefrendo.unshift({
                    date: now,
                    data: this.refrendo
                });
                let slicedArray = this.consultasRefrendo.slice(0, 5);
                this.storage.set('consultasRefrendo', slicedArray);
                //#endregion 
                let navigationExtras = {
                    state: {
                        refrendo: this.refrendo
                    }
                };
                this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo', navigationExtras);
            }
            else {
                this.toastService.present("No se encontro un vehículo con la placa o serie");
                this.loadingService.dismiss();
            }
        }, (err) => {
            this.toastService.present(err);
            this.loadingService.dismiss();
        });
    }
    /**
     * Remover consultas recientes
     */
    removerConsultasRefrendoRecientes() {
        this.storage.remove('consultasRefrendo').then(resolve => {
            this.consultasRefrendo = [];
            console.log("Consultas de refrendo recientes eliminadas");
        }, err => {
            console.log(err);
            this.toastService.present(err);
        });
    }
    /**
     * Ejecutar consulta reciente con sus datos
     * @param consulta
     */
    ejecutarConsultaReciente(consulta) {
        if (consulta.data.vehiculo.placaActual === "" && consulta.data.vehiculo.serie === "") {
            console.log("No se encontraron los datos necesarios para ejecutar la consulta");
            this.toastService.present("No se encontraron los datos necesarios para ejecutar la consulta");
            return;
        }
        this.formularioConsultaRefrendo.controls.placa.patchValue(consulta.data.vehiculo.placaActual);
        this.formularioConsultaRefrendo.controls.placa.updateValueAndValidity();
        this.formularioConsultaRefrendo.controls.serie.patchValue(consulta.data.vehiculo.serie);
        this.formularioConsultaRefrendo.controls.serie.updateValueAndValidity();
        this.consultarRefrendo(consulta.data.vehiculo.placaActual, consulta.data.vehiculo.serie);
    }
    resetForm() {
        this.formularioConsultaRefrendo.reset();
        this.enviado = false;
    }
    cancelarConsultarRefrendo() {
        this.router.navigateByUrl('/app/tabs/inicio', { replaceUrl: true });
    }
};
RefrendoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_refrendo_service__WEBPACK_IMPORTED_MODULE_4__["RefrendoService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
RefrendoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'refrendo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./refrendo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refrendo/refrendo.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./refrendo.scss */ "./src/app/pages/refrendo/refrendo.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_refrendo_service__WEBPACK_IMPORTED_MODULE_4__["RefrendoService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], RefrendoPage);



/***/ })

}]);
//# sourceMappingURL=refrendo-refrendo-module-es2015.js.map