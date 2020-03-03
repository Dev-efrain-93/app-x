var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-refrendo-detalle-refrendo-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-refrendo/detalle-refrendo.page.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-refrendo/detalle-refrendo.page.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/app/tabs/refrendo\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card mode=\"ios\" button=\"true\" (click)=\"toggleInformacionVehicular()\">\n    <ion-card-header>\n        <ion-card-title>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  Vehículo\n              </ion-col>\n              <ion-col class=\"col-align-end\">\n                  <!--<ion-icon *ngIf=\"detalleRefrendo.vehiculo.open\" name=\"close\"></ion-icon>-->\n                  <ion-icon *ngIf=\"!detalleRefrendo.vehiculo.open\" src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detalleRefrendo.vehiculo.open\">\n      <ion-grid>\n        <ion-row class=\"row-informacion-propietario\">\n          <ion-col class=\"col-informacion-propietario\">\n            <ion-row>\n              <ion-col>\n                  <p><strong>Propietario</strong> </p>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <p>\n                  <span>{{ detalleRefrendo.vehiculo.propietario }}</span>\n                </p>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <p><strong>Domicilio</strong></p>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <p>\n                  <span *ngIf=\"detalleRefrendo.vehiculo.calle\"> CALLE {{detalleRefrendo.vehiculo.calle}}</span>\n                  <span *ngIf=\"detalleRefrendo.vehiculo.numeroExterior\"> NUM EXT {{detalleRefrendo.vehiculo.numeroExterior}}</span>\n                  <span *ngIf=\"detalleRefrendo.vehiculo.numeroInterior\"> NUM INT {{detalleRefrendo.vehiculo.numeroInterior}}</span>\n                  <span *ngIf=\"detalleRefrendo.vehiculo.colonia\"> COLONIA {{detalleRefrendo.vehiculo.colonia}}</span>\n                  <span *ngIf=\"detalleRefrendo.vehiculo.codigoPostal\"> CP {{detalleRefrendo.vehiculo.codigoPostal}}</span>\n                  <span *ngIf=\"detalleRefrendo.vehiculo.municipio\"> MUNICIPIO {{detalleRefrendo.vehiculo.municipio}}</span>\n                  <span *ngIf=\"detalleRefrendo.vehiculo.ciudad\"> CIUDAD {{detalleRefrendo.vehiculo.ciudad}}</span>\n                </p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                  <p><strong>No. de Serie </strong></p>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <p><span>{{detalleRefrendo.vehiculo.serie}}</span></p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"row-informacion-vehicular\">\n          <ion-col class=\"col-informacion-vehicular\">\n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                    <p><strong>Placa Actual </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.placaActual}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Motor</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.motor}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            \n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Color </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.color}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Marca</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.marca}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Clave Vehicular </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.claveVehicular}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Línea</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.linea}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Pasajeros </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.pasajeros}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Clase</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.clase}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Capacidad </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.capacidad}} KG</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Modelo</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.modelo}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Placa Anterior </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.placaAnterior}}</span></p>\n                    <p *ngIf=\"detalleRefrendo.vehiculo.placaAnterior === ' '\"><span>N/D</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>R.F.V.</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.rfv}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Propietario Anterior </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.propietarioAnterior}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>P.B.V.</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.pesoBruto | number}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Fecha de Factura </strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.fechaFactura}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n  \n              <ion-col>\n                <ion-row>\n                  <ion-col>\n                      <p><strong>Importe Factura</strong></p>\n                  </ion-col>\n                </ion-row>\n      \n                <ion-row>\n                  <ion-col>\n                    <p><span>{{detalleRefrendo.vehiculo.importeFactura | currency}}</span></p>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n  \n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"detalleRefrendo.tenenciaAnual.length > 0\" button=\"true\" mode=\"ios\">\n    <ion-card-header (click)=\"toggleCardTenencia()\">\n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                Refrendo\n            </ion-col>\n            <ion-col *ngIf=\"!detalleRefrendo.openTenencia\" class=\"col-align-end\">\n                {{ detalleRefrendo.totalTenencia | currency }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detalleRefrendo.openTenencia\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-list class=\"list-adeudos\" lines=\"none\">\n              <ion-item class=\"registros-detalles\" *ngFor=\"let tenencia of detalleRefrendo.tenenciaAnual; let i = index\">\n                <ion-grid>\n                  <ion-row class=\"item-periodo\" (click)=\"toggleTenenciaAnual(i); $event.stopPropagation();\">\n                    <ion-col>\n                      <span>DERECHOS {{tenencia.anyoFiscal}}</span>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\" *ngIf=\"!tenencia.open\">\n                        {{tenencia.importeTotal | currency}}\n                    </ion-col>\n                    <ion-col class=\"col-align-end\" size=\"1\">\n                        <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-forward.svg\" *ngIf=\"!tenencia.open\"></ion-icon>\n                        <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\" *ngIf=\"tenencia.open\"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row *ngIf=\"tenencia.open\">\n                    <ion-col>\n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.importeTenencia && tenencia.importeTenencia >= 0\">\n                          <ion-col>\n                            <p>Tenencia</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.importeTenencia | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.recargoMontoTenencia && tenencia.recargoMontoTenencia >= 0\">\n                          <ion-col>\n                            <p>Recargo Tenencia</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.recargoMontoTenencia | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.actualizacionMontoTenencia && tenencia.actualizacionMontoTenencia >= 0\">\n                          <ion-col>\n                            <p>Actualización Tenencia</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.actualizacionMontoTenencia | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.importeDerechoPlaca && tenencia.importeDerechoPlaca >= 0\">\n                          <ion-col>\n                            <p>Derecho</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.importeDerechoPlaca | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.recargoDerechoPlaca && tenencia.recargoDerechoPlaca >= 0\">\n                          <ion-col>\n                            <p>Recargo Derecho</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.recargoDerechoPlaca | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.actualizacionDerechoPlaca && tenencia.actualizacionDerechoPlaca >= 0\">\n                          <ion-col>\n                            <p>Actualización Derecho</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.actualizacionDerechoPlaca | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n\n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.montoHonorarios && tenencia.montoHonorarios >= 0\">\n                          <ion-col>\n                            <p>Honorarios</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.montoHonorarios | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n\n                        <ion-row class=\"row-data\" *ngIf=\"tenencia.montoMulta && tenencia.montoMulta >= 0\">\n                          <ion-col>\n                            <p>Multa</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.montoMulta | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n\n                        <ion-row class=\"row-data row-total-periodo\" *ngIf=\"tenencia.importeTotal && tenencia.importeTotal >= 0\">\n                          <ion-col>\n                            <p>Total</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{tenencia.importeTotal | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n\n              <ion-item class=\"registros-detalles item-subtotal\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <strong>SUBTOTAL</strong>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\">\n                      <strong>{{ detalleRefrendo.totalTenencia | currency }}</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"detalleRefrendo.infracciones.length > 0\" button=\"true\" mode=\"ios\">\n    <ion-card-header (click)=\"toggleCardInfracciones()\"> \n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                Infracciones\n            </ion-col>\n            <ion-col *ngIf=\"!detalleRefrendo.openInfracciones\" class=\"col-align-end\">\n                {{ detalleRefrendo.totalInfracciones | currency }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detalleRefrendo.openInfracciones\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-list class=\"list-adeudos\" lines=\"none\">\n              <ion-item class=\"registros-detalles\" *ngFor=\"let infraccion of detalleRefrendo.infracciones; let i = index\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <p>Infracción {{infraccion.numeroInfraccion}}</p>\n                      <p class=\"info-text\">{{infraccion.fecha | date: 'MMM d, y, h:mm:ss a'}}</p>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\">\n                      <p>{{ infraccion.montoInfraccion | currency }}</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n\n              <ion-item class=\"registros-detalles item-subtotal\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <strong>SUBTOTAL</strong>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\">\n                      <strong>{{ detalleRefrendo.totalInfracciones | currency }}</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"detalleRefrendo.aplicaDonativo\" button=\"true\" (click)=\"toggleCardDonativo()\" mode=\"ios\">\n    <ion-card-header>\n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                Asistencia Social\n            </ion-col>\n            <ion-col *ngIf=\"!detalleRefrendo.openDonativo\" class=\"col-align-end\">\n                {{ detalleRefrendo.donativo | currency }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detalleRefrendo.openDonativo\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-row>\n              <ion-avatar>\n                <img src=\"../../../assets/img/dif-2015-2021.gif\">\n              </ion-avatar>\n              <ion-avatar>\n                <img src=\"../../../assets/img/cruz-roja.jpg\">\n              </ion-avatar>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-list class=\"list-adeudos\" lines=\"none\">\n              <ion-item class=\"registros-detalles\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <ion-text>\n                        <p class=\"info-text\">Con su donativo puede salvar la vida de quien mas lo necesite. Con su apoyo podremos prestar más servicios a la comunidad cuando se necesite o se presente algún desastre.</p>\n                      </ion-text>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item class=\"registros-detalles item-subtotal\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <strong>SUBTOTAL</strong>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\">\n                      <strong>{{ detalleRefrendo.donativo | currency }}</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"footer-detalles\">\n  <ion-grid class=\"totales-detalles\" fixed>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col-align-end\"><strong class=\"font-larger\">TOTAL A PAGAR</strong></ion-col>\n      <ion-col class=\"col-align-end\" offset=\"1\"><strong class=\"font-larger\">{{ detalleRefrendo.total | currency }}</strong></ion-col>\n      <ion-col size=\".7\"></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-button expand=\"block\" (click)=\"pagarRefrendo()\">Continuar</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/detalle-refrendo-popover/detalle-refrendo-popover.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/pages/detalle-refrendo-popover/detalle-refrendo-popover.ts ***!
          \****************************************************************************/
        /*! exports provided: DetalleRefrendoPopoverPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRefrendoPopoverPage", function () { return DetalleRefrendoPopoverPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
            /* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
            /* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
            /* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
            var DetalleRefrendoPopoverPage = /** @class */ (function () {
                function DetalleRefrendoPopoverPage(popoverCtrl, transfer, file, platform, toastService, navParams, router, fileOpener, loadingService) {
                    this.popoverCtrl = popoverCtrl;
                    this.transfer = transfer;
                    this.file = file;
                    this.platform = platform;
                    this.toastService = toastService;
                    this.navParams = navParams;
                    this.router = router;
                    this.fileOpener = fileOpener;
                    this.loadingService = loadingService;
                }
                DetalleRefrendoPopoverPage.prototype.ngAfterViewInit = function () {
                    this.detalleRefrendo = this.navParams.get('detalleRefrendo');
                    console.log("Dentro del componente popover de los detalles del refrendo");
                };
                /**
                 * Descargar presupuesto vehicular
                 */
                DetalleRefrendoPopoverPage.prototype.downloadFile = function () {
                    var _this = this;
                    console.log("Descargando presupuesto");
                    this.popoverCtrl.dismiss();
                    var now = new Date(Date.now());
                    var url = this.detalleRefrendo.urlPresupuesto;
                    var fecha = now.toLocaleString();
                    var nombreArchivo = 'presupuesto_vehicular_' + this.detalleRefrendo.serieVehiculo + '_' + fecha + '.pdf';
                    this.loadingService.present();
                    if (this.platform.is('desktop')) {
                        var link = document.createElement("a");
                        link.download = nombreArchivo;
                        link.href = url;
                        link.target = "_blank";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        link = null;
                        this.loadingService.dismiss();
                    }
                    else {
                        var fileTransfer = this.transfer.create();
                        fileTransfer.download(url, this.file.externalDataDirectory + nombreArchivo).then(function (entry) {
                            console.log('Descarga finalizada: ' + entry.toURL());
                            _this.loadingService.dismiss();
                            _this.fileOpener.open(entry.toURL(), "application/pdf").then(function () { return console.log("Archivo abierto con exito", entry.toURL()); })
                                .catch(function (e) { return console.log("Error al intentar abrir el archivo", entry.toURL()); });
                        }, function (error) {
                            _this.loadingService.dismiss();
                            console.log(error.exception);
                            _this.toastService.info(error.exception);
                        });
                    }
                };
                /**
                 * Generar código QR/barcode
                 */
                DetalleRefrendoPopoverPage.prototype.generateQR = function () {
                    console.log("Redirigiendo a qr refrendo");
                    this.popoverCtrl.dismiss();
                    var navigationExtras = {
                        state: {
                            detalleRefrendo: this.detalleRefrendo
                        }
                    };
                    this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo-qr', navigationExtras);
                };
                return DetalleRefrendoPopoverPage;
            }());
            DetalleRefrendoPopoverPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
                { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"] },
                { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
                { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"] },
                { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }
            ]; };
            DetalleRefrendoPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: "\n    <ion-list lines=\"none\">\n      <ion-item (click)=\"downloadFile()\"> \n        <ion-icon name=\"download\" slot=\"start\"></ion-icon>\n        <ion-label>Descargar</ion-label>\n      </ion-item>\n      <ion-item (click)=\"generateQR()\">\n        <ion-icon src=\"../../../assets/icons/qrcode.svg\" slot=\"start\"></ion-icon>\n        <ion-label>QR/Barcode</ion-label>\n      </ion-item>\n    </ion-list>\n  "
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
                    _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"],
                    _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
                    _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
                    _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"],
                    _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]])
            ], DetalleRefrendoPopoverPage);
            /***/ 
        }),
        /***/ "./src/app/pages/detalle-refrendo/detalle-refrendo.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/detalle-refrendo/detalle-refrendo.module.ts ***!
          \*******************************************************************/
        /*! exports provided: DetalleRefrendoPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRefrendoPageModule", function () { return DetalleRefrendoPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _detalle_refrendo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-refrendo.page */ "./src/app/pages/detalle-refrendo/detalle-refrendo.page.ts");
            /* harmony import */ var _detalle_refrendo_popover_detalle_refrendo_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detalle-refrendo-popover/detalle-refrendo-popover */ "./src/app/pages/detalle-refrendo-popover/detalle-refrendo-popover.ts");
            var routes = [
                {
                    path: '',
                    component: _detalle_refrendo_page__WEBPACK_IMPORTED_MODULE_6__["DetalleRefrendoPage"]
                }
            ];
            var DetalleRefrendoPageModule = /** @class */ (function () {
                function DetalleRefrendoPageModule() {
                }
                return DetalleRefrendoPageModule;
            }());
            DetalleRefrendoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [
                        _detalle_refrendo_page__WEBPACK_IMPORTED_MODULE_6__["DetalleRefrendoPage"],
                        _detalle_refrendo_popover_detalle_refrendo_popover__WEBPACK_IMPORTED_MODULE_7__["DetalleRefrendoPopoverPage"]
                    ],
                    entryComponents: [
                        _detalle_refrendo_popover_detalle_refrendo_popover__WEBPACK_IMPORTED_MODULE_7__["DetalleRefrendoPopoverPage"]
                    ]
                })
            ], DetalleRefrendoPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/detalle-refrendo/detalle-refrendo.page.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/detalle-refrendo/detalle-refrendo.page.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".encabezado-detalle {\n  font-size: small;\n}\n\n.totales-detalles {\n  font-size: 14px;\n}\n\n.col-align-end {\n  text-align: end;\n}\n\n.col-align-center {\n  text-align: center;\n}\n\n.personalized-heigh {\n  max-height: 35px;\n}\n\n.registros-detalles {\n  font-size: 14px;\n  --padding-start: 0px;\n}\n\n.footer-detalles {\n  background: var(--ion-color-light);\n}\n\n.font-larger {\n  font-size: larger;\n  color: var(--ion-color-dark);\n}\n\n.list-adeudos {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.item-subtotal {\n  border-top: solid 1px #efefef69;\n}\n\n.item-periodo {\n  background: var(--ion-color-light);\n}\n\n.row-total-periodo {\n  font-weight: 600;\n}\n\n.col-informacion-propietario {\n  padding: 0px;\n}\n\n.col-informacion-vehicular {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvZGV0YWxsZS1yZWZyZW5kby9kZXRhbGxlLXJlZnJlbmRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV0YWxsZS1yZWZyZW5kby9kZXRhbGxlLXJlZnJlbmRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtcmVmcmVuZG8vZGV0YWxsZS1yZWZyZW5kby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5jYWJlemFkby1kZXRhbGxlIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4udG90YWxlcy1kZXRhbGxlcyB7XG4gICAgZm9udC1zaXplOiAxNHB4Oztcbn1cblxuLmNvbC1hbGlnbi1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmNvbC1hbGlnbi1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBlcnNvbmFsaXplZC1oZWlnaCB7XG4gICAgbWF4LWhlaWdodDogMzVweDtcbn1cblxuLnJlZ2lzdHJvcy1kZXRhbGxlcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uZm9vdGVyLWRldGFsbGVzIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uZm9udC1sYXJnZXIge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5saXN0LWFkZXVkb3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uaXRlbS1zdWJ0b3RhbCB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZmVmZWY2OTtcbn1cblxuLml0ZW0tcGVyaW9kbyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnJvdy10b3RhbC1wZXJpb2RvIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29sLWluZm9ybWFjaW9uLXByb3BpZXRhcmlvIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jb2wtaW5mb3JtYWNpb24tdmVoaWN1bGFyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59IiwiLmVuY2FiZXphZG8tZGV0YWxsZSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50b3RhbGVzLWRldGFsbGVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29sLWFsaWduLWVuZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmNvbC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wZXJzb25hbGl6ZWQtaGVpZ2gge1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xufVxuXG4ucmVnaXN0cm9zLWRldGFsbGVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLmZvb3Rlci1kZXRhbGxlcyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5mb250LWxhcmdlciB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4ubGlzdC1hZGV1ZG9zIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uaXRlbS1zdWJ0b3RhbCB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZWZlZmVmNjk7XG59XG5cbi5pdGVtLXBlcmlvZG8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4ucm93LXRvdGFsLXBlcmlvZG8ge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29sLWluZm9ybWFjaW9uLXByb3BpZXRhcmlvIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uY29sLWluZm9ybWFjaW9uLXZlaGljdWxhciB7XG4gIHBhZGRpbmc6IDBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/detalle-refrendo/detalle-refrendo.page.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/detalle-refrendo/detalle-refrendo.page.ts ***!
          \*****************************************************************/
        /*! exports provided: DetalleRefrendoPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRefrendoPage", function () { return DetalleRefrendoPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            /* harmony import */ var _services_refrendo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/refrendo.service */ "./src/app/services/refrendo.service.ts");
            /* harmony import */ var _detalle_refrendo_popover_detalle_refrendo_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../detalle-refrendo-popover/detalle-refrendo-popover */ "./src/app/pages/detalle-refrendo-popover/detalle-refrendo-popover.ts");
            var DetalleRefrendoPage = /** @class */ (function () {
                function DetalleRefrendoPage(router, route, config, storage, refrendoService, popoverController) {
                    var _this = this;
                    this.router = router;
                    this.route = route;
                    this.config = config;
                    this.storage = storage;
                    this.refrendoService = refrendoService;
                    this.popoverController = popoverController;
                    this.now = new Date(Date.now());
                    this.infracciones = [];
                    this.infracccionesFake = [];
                    this.route.queryParams.subscribe(function (params) {
                        if (_this.router.getCurrentNavigation().extras.state) {
                            _this.detalleRefrendo = _this.router.getCurrentNavigation().extras.state.refrendo;
                            _this.detalleRefrendo.vehiculo.open = true;
                            _this.detalleRefrendo.openTenencia = true;
                            _this.detalleRefrendo.openDonativo = true;
                            _this.detalleRefrendo.openInfracciones = true;
                            _this.detalleRefrendo.totalTenencia = 0;
                            _this.detalleRefrendo.totalInfracciones = 0;
                            if (_this.detalleRefrendo.tenenciaAnual.length > 0) {
                                _this.detalleRefrendo.tenenciaAnual.forEach(function (tenencia) {
                                    tenencia.open = false;
                                    _this.detalleRefrendo.totalTenencia += tenencia.importeTotal;
                                    //#region Infracciones Fake
                                    _this.infracccionesFake = [
                                        {
                                            numeroInfraccion: "ASD34",
                                            fecha: _this.now,
                                            montoInfraccion: 1234.21
                                        },
                                        {
                                            numeroInfraccion: "Y4ER33",
                                            fecha: _this.now,
                                            montoInfraccion: 345.12
                                        },
                                        {
                                            numeroInfraccion: "8795TRY",
                                            fecha: _this.now,
                                            montoInfraccion: 4532.12
                                        }
                                    ];
                                    //tenencia.infracciones = Object.assign([], this.infracccionesFake);;
                                    //#endregion
                                    //#region Infracciones
                                    if (tenencia.infracciones) {
                                        tenencia.infracciones.forEach(function (infraccion) {
                                            _this.infracciones.unshift(infraccion);
                                            _this.detalleRefrendo.totalInfracciones += infraccion.montoInfraccion;
                                        });
                                        _this.detalleRefrendo.infracciones = Object.assign([], _this.infracciones);
                                    }
                                    //#endregion
                                });
                            }
                            console.debug(_this.detalleRefrendo);
                        }
                    });
                }
                DetalleRefrendoPage.prototype.ionViewWillEnter = function () {
                    this.ios = this.config.get('mode') === 'ios';
                };
                DetalleRefrendoPage.prototype.ngOnInit = function () {
                };
                DetalleRefrendoPage.prototype.toggleInformacionVehicular = function () {
                    this.detalleRefrendo.vehiculo.open = !this.detalleRefrendo.vehiculo.open;
                };
                DetalleRefrendoPage.prototype.toggleCardTenencia = function () {
                    this.detalleRefrendo.openTenencia = !this.detalleRefrendo.openTenencia;
                };
                DetalleRefrendoPage.prototype.toggleTenenciaAnual = function (index) {
                    this.detalleRefrendo.tenenciaAnual[index].open = !this.detalleRefrendo.tenenciaAnual[index].open;
                };
                DetalleRefrendoPage.prototype.toggleCardInfracciones = function () {
                    this.detalleRefrendo.openInfracciones = !this.detalleRefrendo.openInfracciones;
                };
                DetalleRefrendoPage.prototype.toggleCardDonativo = function () {
                    this.detalleRefrendo.openDonativo = !this.detalleRefrendo.openDonativo;
                };
                DetalleRefrendoPage.prototype.presentPopover = function (event) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var popover;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.popoverController.create({
                                        component: _detalle_refrendo_popover_detalle_refrendo_popover__WEBPACK_IMPORTED_MODULE_6__["DetalleRefrendoPopoverPage"],
                                        componentProps: { detalleRefrendo: this.detalleRefrendo },
                                        event: event
                                    })];
                                case 1:
                                    popover = _a.sent();
                                    return [4 /*yield*/, popover.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Abrir qr refrendo
                 */
                DetalleRefrendoPage.prototype.pagarRefrendo = function () {
                    console.log("Redirigiendo qr refrendo");
                    var navigationExtras = {
                        state: {
                            detalleRefrendo: this.detalleRefrendo
                        }
                    };
                    this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo-qr', navigationExtras);
                };
                return DetalleRefrendoPage;
            }());
            DetalleRefrendoPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"] },
                { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
                { type: _services_refrendo_service__WEBPACK_IMPORTED_MODULE_5__["RefrendoService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
            ]; };
            DetalleRefrendoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'detalle-refrendo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-refrendo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-refrendo/detalle-refrendo.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-refrendo.page.scss */ "./src/app/pages/detalle-refrendo/detalle-refrendo.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"],
                    _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
                    _services_refrendo_service__WEBPACK_IMPORTED_MODULE_5__["RefrendoService"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
            ], DetalleRefrendoPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=detalle-refrendo-detalle-refrendo-module-es2015.js.map
//# sourceMappingURL=detalle-refrendo-detalle-refrendo-module-es5.js.map
//# sourceMappingURL=detalle-refrendo-detalle-refrendo-module-es5.js.map