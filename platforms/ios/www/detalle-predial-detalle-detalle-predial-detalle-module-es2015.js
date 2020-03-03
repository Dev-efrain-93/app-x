(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-predial-detalle-detalle-predial-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle periódo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>{{detalleAdeudo.anyoFiscal}}</ion-card-subtitle>\n      <ion-card-title>{{concepto}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.baseGravable || detalleAdeudo.baseGravable >= 0\">\n          <ion-col>\n            <p><strong>Base Gravable</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.baseGravable | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.descuentoBaseGravable || detalleAdeudo.descuentoBaseGravable >= 0\">\n          <ion-col>\n            <p><strong>% Descuento Base Gravable</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.descuentoBaseGravable | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.impuesto || detalleAdeudo.impuesto >= 0\"><!--IMPUESTO EN PREDIAL-->\n          <ion-col>\n            <p><strong>Impuesto</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.impuesto | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.importe || detalleAdeudo.importe >= 0\"><!--IMPUESTO EN BASURA-->\n          <ion-col>\n            <p><strong>Impuesto</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.importe | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.impuestoPagar || detalleAdeudo.impuestoPagar >= 0\"><!--IMPORTE EN PREDIAL-->\n          <ion-col>\n            <p><strong>Importe</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.impuestoPagar | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.importe || detalleAdeudo.importe >= 0\"><!--IMPORTE EN BASURA-->\n          <ion-col>\n            <p><strong>Importe</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.importe | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.totalActualizaciones || detalleAdeudo.totalActualizaciones >= 0\">\n          <ion-col>\n            <p><strong>Actualización</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.totalActualizaciones | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.totalRecargos || detalleAdeudo.totalRecargos >= 0\">\n          <ion-col>\n            <p><strong>Recargo</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.totalRecargos | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data\" *ngIf=\"detalleAdeudo.descuento || detalleAdeudo.descuento >= 0\">\n          <ion-col>\n            <p><strong>Descuento / Recargo</strong></p>\n          </ion-col>\n          <ion-col class=\"col-align-end\">\n            <p>{{detalleAdeudo.descuento | currency}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-data cardfooter\" *ngIf=\"detalleAdeudo.importeTotal || detalleAdeudo.importeTotal >= 0\">\n          <ion-col>\n            <p><strong>TOTAL</strong></p>\n          </ion-col> \n          <ion-col class=\"col-align-end\">\n            <p><strong>{{detalleAdeudo.importeTotal | currency}}</strong></p>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-card-content>\n    \n  </ion-card>\n");

/***/ }),

/***/ "./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetallePredialDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePredialDetallePageModule", function() { return DetallePredialDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalle_predial_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-predial-detalle.page */ "./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.ts");







const routes = [
    {
        path: '',
        component: _detalle_predial_detalle_page__WEBPACK_IMPORTED_MODULE_6__["DetallePredialDetallePage"]
    }
];
let DetallePredialDetallePageModule = class DetallePredialDetallePageModule {
};
DetallePredialDetallePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detalle_predial_detalle_page__WEBPACK_IMPORTED_MODULE_6__["DetallePredialDetallePage"]]
    })
], DetallePredialDetallePageModule);



/***/ }),

/***/ "./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-align-end {\n  text-align: end;\n}\n\n.col-align-start {\n  text-align: start;\n}\n\n.font-larger {\n  font-size: large;\n}\n\n.base-gravable {\n  background: #efefef;\n}\n\n.row-data {\n  margin: 10px 0 0 0;\n}\n\n.base-gravable {\n  background: #f3f5f8;\n}\n\n.cardfooter {\n  border-top: 1px solid #efefef69;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvZGV0YWxsZS1wcmVkaWFsLWRldGFsbGUvZGV0YWxsZS1wcmVkaWFsLWRldGFsbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhbGxlLXByZWRpYWwtZGV0YWxsZS9kZXRhbGxlLXByZWRpYWwtZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlLXByZWRpYWwtZGV0YWxsZS9kZXRhbGxlLXByZWRpYWwtZGV0YWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWFsaWduLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uY29sLWFsaWduLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLmZvbnQtbGFyZ2VyIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uYmFzZS1ncmF2YWJsZSB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLnJvdy1kYXRhIHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5cbi5iYXNlLWdyYXZhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmNWY4O1xufVxuXG4uY2FyZGZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY2OTtcbiAgfSIsIi5jb2wtYWxpZ24tZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uY29sLWFsaWduLXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5mb250LWxhcmdlciB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5iYXNlLWdyYXZhYmxlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLnJvdy1kYXRhIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufVxuXG4uYmFzZS1ncmF2YWJsZSB7XG4gIGJhY2tncm91bmQ6ICNmM2Y1Zjg7XG59XG5cbi5jYXJkZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY2OTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DetallePredialDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePredialDetallePage", function() { return DetallePredialDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DetallePredialDetallePage = class DetallePredialDetallePage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.concepto = this.router.getCurrentNavigation().extras.state.concepto;
                this.detalleAdeudo = this.router.getCurrentNavigation().extras.state.adeudoPeriodo;
                console.debug(this.detalleAdeudo);
            }
        });
    }
    ngOnInit() {
    }
};
DetallePredialDetallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DetallePredialDetallePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'detalle-predial-detalle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-predial-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-predial-detalle.page.scss */ "./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DetallePredialDetallePage);



/***/ })

}]);
//# sourceMappingURL=detalle-predial-detalle-detalle-predial-detalle-module-es2015.js.map