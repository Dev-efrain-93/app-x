(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca/acerca.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca/acerca.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Acerca de...</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"about-header\">\n    <img class=\"bounce\" src=\"assets/img/logo_sefin.png\" alt=\"Logo SEFIN Móvil\">\n  </div>\n  <div class=\"about-info\">\n    <h4 class=\"ion-padding-start\">{{ appName }}</h4>\n    <h6 class=\"version-number\"><small>v</small>{{ versionNumber }}</h6>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\n        <ion-label position=\"stacked info-label\">Desarrollador</ion-label>\n        <p>Dirección de Informática</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase\" slot=\"start\"></ion-icon>\n        <ion-label position=\"stacked info-label\">Organización<nav></nav></ion-label>\n        <p>\n          Secretaría de Finanzas\n          <br>\n          Gobierno del Estado de Campeche\n        </p>\n      </ion-item>\n\n      <ion-item>\n          <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked info-label\">Contacto<nav></nav></ion-label>\n          <p>\n            soporte.sefin@gmail.com\n          </p>\n        </ion-item>\n    </ion-list>\n\n    <p class=\"ion-padding-start ion-padding-end about-description\">\n      Realiza el pago de tus impuestos estés donde estés a la hora que desees, o consulta información acerca de los lugares habilitados para el pago de tus servicios.\n    </p>\n    <br>\n    <ion-button fill=\"solid\" color=\"primary\" (click)=\"openTutorial()\">\n      Ver tutorial\n    </ion-button>\n    <br>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-predial/detalle-predial.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-predial/detalle-predial.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/app/tabs/predial\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalle</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n      </ion-button>\n    </ion-buttons> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card mode=\"ios\" button=\"true\" (click)=\"toggleCardPredio()\">\n    <ion-card-header>\n        <ion-card-title>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  Predio\n              </ion-col>\n              <ion-col class=\"col-align-end\">\n                  <!--<ion-icon *ngIf=\"detallePredial.predio.openPredio\" name=\"close\"></ion-icon>-->\n                  <ion-icon *ngIf=\"!detallePredial.predio.openPredio\" src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detallePredial.predio.openPredio\">\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n                <p><strong>Propietario(s) </strong> </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p>\n                <span *ngFor=\"let propietario of detallePredial.predio.propietarios\">\n                  {{propietario.nombre}} {{propietario.apellidoPaterno}} {{propietario.apellidoMaterno}}\n                  <br>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Domicilio</strong></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p>\n                <span *ngIf=\"detallePredial.predio.calle\"> CALLE {{detallePredial.predio.calle}}</span>\n                <span *ngIf=\"detallePredial.predio.numExterior\"> NUM EXT {{detallePredial.predio.numExterior}}</span>\n                <span *ngIf=\"detallePredial.predio.numeroInterior\"> NUM INT {{detallePredial.predio.numeroInterior}}</span>\n                <span *ngIf=\"detallePredial.predio.cruzamiento1\"> ENTRE {{detallePredial.predio.cruzamiento1}}</span>\n                <span *ngIf=\"detallePredial.predio.cruzamiento2\"> Y {{detallePredial.predio.cruzamiento2}}</span>\n                <span *ngIf=\"detallePredial.predio.colonia\"> COLONIA {{detallePredial.predio.colonia}}</span>\n                <span *ngIf=\"detallePredial.predio.codigoPostal\"> CP {{detallePredial.predio.codigoPostal}}</span>\n              </p>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row class=\"row-informacion-predio\">\n            <ion-col class=\"col-informacion-predio\">\n              <ion-row>\n                <ion-col>\n                  <p><strong>Clave Catastral </strong></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><span>{{detallePredial.predio.claveCatastral}}</span></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <p><strong>Número de Cuenta </strong></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><span>{{detallePredial.predio.numeroCuenta}}</span></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <p><strong>Uso de Suelo </strong></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><span>{{getTipoUsoDeSuelo(detallePredial.predio.idTipoUsoSuelo)}}</span></p>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"detallePredial.predio.juntaMunicipal\">\n                <ion-col>\n                    <p><strong>Junta Municipal </strong></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><span>{{detallePredial.predio.juntaMunicipal}}</span></p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"detallePredial.adeudos.length > 0\" button=\"true\" mode=\"ios\">\n    <ion-card-header (click)=\"toggleCardPredial()\">\n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                Impuesto Predial\n            </ion-col>\n            <ion-col *ngIf=\"!detallePredial.openPredial\" class=\"col-align-end\">\n                {{ detallePredial.totalPredial | currency }}\n            </ion-col>\n            <!--<ion-col *ngIf=\"!detallePredial.openPredial\" class=\"col-align-end\" size=\"1\">\n              <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\"></ion-icon>\n            </ion-col>-->\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detallePredial.openPredial\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-list class=\"list-adeudos\" lines=\"none\">\n              <ion-item class=\"registros-detalles\" *ngFor=\"let adeudoPredial of detallePredial.adeudos; let i = index\">\n                <ion-grid>\n                  <ion-row class=\"item-periodo\" (click)=\"togglePeriodoPredial(i); $event.stopPropagation();\">\n                    <ion-col>\n                      <span>PERIODO {{adeudoPredial.anyoFiscal}}</span>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\" *ngIf=\"!adeudoPredial.open\">\n                        {{adeudoPredial.importeTotal | currency}}\n                    </ion-col>\n                    <ion-col class=\"col-align-end\" size=\"1\">\n                        <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-forward.svg\" *ngIf=\"!adeudoPredial.open\"></ion-icon>\n                        <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\" *ngIf=\"adeudoPredial.open\"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row *ngIf=\"adeudoPredial.open\">\n                    <ion-col>\n                        <!--<ion-row class=\"row-data\" *ngIf=\"adeudoPredial.baseGravable || adeudoPredial.baseGravable >= 0\">\n                          <ion-col>\n                            <p>Base Gravable</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.baseGravable | currency}}</p>\n                          </ion-col>\n                        </ion-row>-->\n                \n                        <ion-row class=\"row-data\" *ngIf=\"adeudoPredial.descuentoBaseGravable || adeudoPredial.descuentoBaseGravable >= 0\">\n                          <ion-col>\n                            <p>% Descuento Base Gravable</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.descuentoBaseGravable | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"adeudoPredial.impuesto || adeudoPredial.impuesto >= 0\"><!--IMPUESTO EN PREDIAL-->\n                          <ion-col>\n                            <p>Impuesto</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.impuesto | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"adeudoPredial.impuestoPagar || adeudoPredial.impuestoPagar >= 0\"><!--IMPORTE EN PREDIAL-->\n                          <ion-col>\n                            <p>Importe</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.impuestoPagar | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"adeudoPredial.totalActualizaciones || adeudoPredial.totalActualizaciones >= 0\">\n                          <ion-col>\n                            <p>Actualización</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.totalActualizaciones | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"adeudoPredial.totalRecargos || adeudoPredial.totalRecargos >= 0\">\n                          <ion-col>\n                            <p>Recargo</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.totalRecargos | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                \n                        <ion-row class=\"row-data\" *ngIf=\"adeudoPredial.descuento || adeudoPredial.descuento >= 0\">\n                          <ion-col>\n                            <p>Descuento / Recargo</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.descuento | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n\n                        <ion-row class=\"row-data row-total-periodo\" *ngIf=\"adeudoPredial.importeTotal || adeudoPredial.importeTotal >= 0\">\n                          <ion-col>\n                            <p>Total</p>\n                          </ion-col>\n                          <ion-col class=\"col-align-end\">\n                            <p>{{adeudoPredial.importeTotal | currency}}</p>\n                          </ion-col>\n                        </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n\n              <ion-item class=\"registros-detalles item-subtotal\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <strong>SUBTOTAL</strong>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\">\n                      <strong>{{ detallePredial.totalPredial | currency }}</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"detallePredial.basura.length > 0\" button=\"true\" mode=\"ios\">\n    <ion-card-header (click)=\"toggleCardBasura()\"> \n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                Servicio Aseo y Basura\n            </ion-col>\n            <ion-col *ngIf=\"!detallePredial.openBasura\" class=\"col-align-end\">\n                {{ detallePredial.totalBasura | currency }}\n            </ion-col>\n            <!--<ion-col *ngIf=\"!detallePredial.openBasura\" class=\"col-align-end\" size=\"1\">\n              <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\"></ion-icon>\n            </ion-col>-->\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detallePredial.openBasura\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-list class=\"list-adeudos\" lines=\"none\">\n              <ion-item class=\"registros-detalles\" *ngFor=\"let adeudoBasura of detallePredial.basura; let i = index\">\n                <ion-grid>\n                  <ion-row class=\"item-periodo\" (click)=\"togglePeriodoBasura(i); $event.stopPropagation();\">\n                    <ion-col>\n                      <span>PERIODO {{adeudoBasura.anyoFiscal}}</span>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\" *ngIf=\"!adeudoBasura.open\">\n                      {{ adeudoBasura.importeTotal | currency }}\n                    </ion-col>\n                    <ion-col class=\"col-align-end\" size=\"1\">\n                        <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-forward.svg\" *ngIf=\"!adeudoBasura.open\"></ion-icon>\n                        <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\" *ngIf=\"adeudoBasura.open\"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row *ngIf=\"adeudoBasura.open\">\n                    <ion-col>\n              \n                      <ion-row class=\"row-data\" *ngIf=\"adeudoBasura.descuentoBaseGravable || adeudoBasura.descuentoBaseGravable >= 0\">\n                        <ion-col>\n                          <p>% Descuento Base Gravable</p>\n                        </ion-col>\n                        <ion-col class=\"col-align-end\">\n                          <p>{{adeudoBasura.descuentoBaseGravable | currency}}</p>\n                        </ion-col>\n                      </ion-row>\n              \n                      <ion-row class=\"row-data\" *ngIf=\"adeudoBasura.importe || adeudoBasura.importe >= 0\"><!--IMPUESTO EN BASURA-->\n                        <ion-col>\n                          <p>Impuesto</p>\n                        </ion-col>\n                        <ion-col class=\"col-align-end\">\n                          <p>{{adeudoBasura.importe | currency}}</p>\n                        </ion-col>\n                      </ion-row>\n              \n                      <ion-row class=\"row-data\" *ngIf=\"adeudoBasura.importe || adeudoBasura.importe >= 0\"><!--IMPORTE EN BASURA-->\n                        <ion-col>\n                          <p>Importe</p>\n                        </ion-col>\n                        <ion-col class=\"col-align-end\">\n                          <p>{{adeudoBasura.importe | currency}}</p>\n                        </ion-col>\n                      </ion-row>\n              \n                      <ion-row class=\"row-data\" *ngIf=\"adeudoBasura.totalActualizaciones || adeudoBasura.totalActualizaciones >= 0\">\n                        <ion-col>\n                          <p>Actualización</p>\n                        </ion-col>\n                        <ion-col class=\"col-align-end\">\n                          <p>{{adeudoBasura.totalActualizaciones | currency}}</p>\n                        </ion-col>\n                      </ion-row>\n              \n                      <ion-row class=\"row-data\" *ngIf=\"adeudoBasura.totalRecargos || adeudoBasura.totalRecargos >= 0\">\n                        <ion-col>\n                          <p>Recargo</p>\n                        </ion-col>\n                        <ion-col class=\"col-align-end\">\n                          <p>{{adeudoBasura.totalRecargos | currency}}</p>\n                        </ion-col>\n                      </ion-row>\n              \n                      <ion-row class=\"row-data\" *ngIf=\"adeudoBasura.descuento || adeudoBasura.descuento >= 0\">\n                        <ion-col>\n                          <p>Descuento / Recargo</p>\n                        </ion-col>\n                        <ion-col class=\"col-align-end\">\n                          <p>{{adeudoBasura.descuento | currency}}</p>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"row-data row-total-periodo\" *ngIf=\"adeudoBasura.importeTotal || adeudoBasura.importeTotal >= 0\">\n                        <ion-col>\n                          <p>Total</p>\n                        </ion-col>\n                        <ion-col class=\"col-align-end\">\n                          <p>{{adeudoBasura.importeTotal | currency}}</p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n\n              <ion-item class=\"registros-detalles item-subtotal\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <strong>SUBTOTAL</strong>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\">\n                      <strong>{{ detallePredial.totalBasura | currency }}</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card button=\"true\" (click)=\"toggleCardCatastral()\" mode=\"ios\">\n    <ion-card-header>\n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                Cédula Catastral\n            </ion-col>\n            <ion-col *ngIf=\"!detallePredial.openCatastral\" class=\"col-align-end\">\n                {{ detallePredial.cedulaCatastral | currency }}\n            </ion-col>\n            <!--<ion-col *ngIf=\"!detallePredial.openCatastral\" class=\"col-align-end\" size=\"1\">\n              <ion-icon src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\"></ion-icon>\n            </ion-col>-->\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"detallePredial.openCatastral\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-list class=\"list-adeudos\" lines=\"none\">\n              <ion-item class=\"registros-detalles item-subtotal\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <strong>SUBTOTAL</strong>\n                    </ion-col>\n                    <ion-col class=\"col-align-end\">\n                      <strong>{{ detallePredial.cedulaCatastral | currency }}</strong>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"footer-detalles\">\n  <ion-grid class=\"totales-detalles\" fixed>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"col-align-end\"><strong class=\"font-larger\">TOTAL A PAGAR</strong></ion-col>\n      <ion-col class=\"col-align-end\" offset=\"1\"><strong class=\"font-larger\">{{ detallePredial.totalPagar | currency }}</strong></ion-col>\n      <ion-col size=\".7\"></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-button expand=\"block\" (click)=\"pagarPredial()\">Continuar</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar [class.show-background]=\"showToolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-title color=\"light\">\n      {{ greetting }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <ion-grid class=\"grid-top-index\">\n    <ion-row>\n      <ion-col class=\"col-align-center\">\n        <ion-toolbar (click)=\"verLugaresPago()\">\n          <ion-searchbar mode=\"md\" search-icon=\"pin\" animated=\"true\" placeholder=\"Ubicar lugares de pago...\" disabled=\"true\"></ion-searchbar>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-slides [options]=\"slideOptions\" class=\"home-slides\" #homeSlides pager=\"true\">\n    <ion-slide class=\"home-slide-item\" *ngFor=\"let slide of slideItems; let i=index\" [ngStyle]=\"{'background-image':'url(' + slide.image + ')', 'background-position': 'center center'}\">\n      <ion-grid fixed=\"true\">\n        <ion-row class=\"align-items-stretch\" size=\"12\">\n          <ion-col class=\"align-self-stretch fadeIn\" size=\"12\">\n              <h2 class=\"slide-title\" [innerHtml]=\"slide.title\"></h2>\n              <p class=\"slide-description\" [innerHtml]=\"slide.description\"></p>\n              <ion-button fill=\"solid\" color=\"primary\">\n                Mas información\n              </ion-button>\n          </ion-col>\n\n          <ion-col size=\"12\">\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"center\" #fab>\n    <ion-fab-button class=\"gbounce\" color=\"comunication\" (click)=\"verLugaresPago()\">\n      <ion-icon color=\"light\" src=\"../../../assets/icons/_ionicons_svg_ios-arrow-down.svg\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Refrendo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predial/predial.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predial/predial.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Consultar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card mode=\"ios\">\n    <ion-card-header>\n      <ion-card-title>Predial</ion-card-title>\n      <ion-row>\n        <ion-col>\n          <ion-text><p class=\"info-text\">Ingrese los siguientes datos solicitados</p></ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content class=\"card-content-predial\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-list class=\"form-list\" lines=\"full\">\n                  <form [formGroup]=\"formularioConsultaPredial\">\n\n                    <ion-item>\n                      <ion-label color=\"medium\" position=\"floating\">Municipio</ion-label>\n                      <ion-select formControlName=\"municipio\" class=\"form-control\" [interfaceOptions]=\"customActionSheetOptions\" interface=\"popover\" cancelText=\"Cancelar\" placeholder=\"\" required>\n                        <ion-select-option [value]=\"municipio.id\" *ngFor=\"let municipio of municipios\">{{municipio.nombre}}</ion-select-option>\n                      </ion-select>\n                      <ion-icon color=\"medium\" name=\"globe\" slot=\"start\"></ion-icon>\n                    </ion-item>\n  \n                    <ion-item lines=\"none\" class=\"validation-errors\" *ngIf=\"!formularioConsultaPredial.controls.municipio.valid && (formularioConsultaPredial.controls.municipio.dirty || enviado)\">\n                        <ion-icon size=\"small\" color=\"danger\" name=\"information-circle\" slot=\"start\" *ngIf=\"formularioConsultaPredial.controls.municipio.errors.required\"></ion-icon><p class=\"error-message\" *ngIf=\"formularioConsultaPredial.controls.municipio.errors.required\">Por favor, seleccione un municipio</p>\n                    </ion-item>\n    \n                    <ion-item>\n                      <ion-label color=\"medium\" position=\"floating\">Cuenta</ion-label>\n                      <ion-input type=\"text\" formControlName=\"numeroCuenta\" class=\"form-control\" clearInput placeholder=\"\" required></ion-input>\n                      <ion-icon color=\"medium\" name=\"key\" slot=\"start\"></ion-icon>\n                    </ion-item>\n                    \n                    <ion-item lines=\"none\" class=\"validation-errors\" *ngIf=\"!formularioConsultaPredial.controls.numeroCuenta.valid && (formularioConsultaPredial.controls.numeroCuenta.dirty || enviado)\">\n                        <ion-icon size=\"small\" color=\"danger\" name=\"information-circle\" slot=\"start\" *ngIf=\"formularioConsultaPredial.controls.numeroCuenta.errors.required\"></ion-icon><p class=\"error-message\" *ngIf=\"formularioConsultaPredial.controls.numeroCuenta.errors.required\">Por favor, ingrese un número de cuenta</p>\n                        <ion-icon size=\"small\" color=\"danger\" name=\"information-circle\" slot=\"start\" *ngIf=\"formularioConsultaPredial.controls.numeroCuenta.errors.pattern\"></ion-icon><p class=\"error-message\" *ngIf=\"formularioConsultaPredial.controls.numeroCuenta.errors.pattern\">Ingrese un número de cuenta válido</p>\n                    </ion-item>\n\n                    <ion-item lines=\"none\" style=\"height:10px;\">\n\n                    </ion-item>\n\n                  </form>\n                </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n    <ion-row class=\"cardfooter\" (click)=\"resetForm()\">\n      <ion-col class=\"col-align-center\">\n            <p class=\"p-text-primary\">Limpiar</p>\n      </ion-col>\n    </ion-row>\n    <!--<img src=\"../../../assets/img/a1486213390617.562732ef5e8c1.jpeg\">-->\n  </ion-card>\n\n\n  <ion-card *ngIf=\"consultasPredial.length > 0\" mode=\"ios\">\n    <ion-card-header>\n      <ion-card-title>Consultas recientes</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let consulta of consultasPredial\" detail>\n          <ion-grid>\n            <!--<ion-row (click)=\"ejecutarConsultaReciente(consulta)\">-->\n            <ion-row (click)=\"ejecutarConsultaRecienteFake(consulta)\">\n              <ion-col class=\"align-self-center\">\n                <p *ngIf=\"consulta.municipio\"><strong>Municipio: </strong> {{consulta.municipio.nombre}}</p>\n                <p><strong>Cuenta: </strong> {{consulta.data.predio.numeroCuenta}}</p>\n                <p class=\"medium-color-text\">{{consulta.date | date: 'MMM d, y, h:mm:ss a'}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n    <ion-row class=\"cardfooter\" (click)=\"removerConsultasPredialRecientes()\">\n      <ion-col class=\"col-align-center\">\n            <p class=\"p-text-primary\">Eliminar consultas recientes</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <!--<ion-button (click)=\"consultarPredial()\" expand=\"block\" [disabled]=\"!formularioConsultaPredial.valid\" >Buscar</ion-button>-->\n            <!--<ion-button (click)=\"consultarPredial()\" expand=\"block\">Buscar</ion-button>-->\n            <ion-button (click)=\"consultaPredialFake()\" expand=\"block\">Buscar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar color=\"light\" slot=\"bottom\">\n    <ion-tab-button tab=\"inicio\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"predial\">\n      <ion-icon name=\"compass\"></ion-icon>\n      <ion-label>Predial</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"refrendo\">\n      <ion-icon name=\"logo-model-s\"></ion-icon>\n      <ion-label>Refrendo</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"acerca\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>Acerca de</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/pages/acerca-popover/acerca-popover.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/acerca-popover/acerca-popover.ts ***!
  \********************************************************/
/*! exports provided: AcercaPopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaPopoverPage", function() { return AcercaPopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AcercaPopoverPage = class AcercaPopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    open(url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    }
};
AcercaPopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
AcercaPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <ion-list>
      <ion-list-header>
        <ion-label>Sitios de interés</ion-label>
      </ion-list-header>
      <ion-item button (click)="open('https://www.campeche.gob.mx/')">
        <ion-label>Gobierno del Estado de Campeche</ion-label>
      </ion-item>
      <ion-item button (click)="open('http://www.finanzas.campeche.gob.mx/')">
        <ion-label>Secretaría de Finanzas Campeche</ion-label>
      </ion-item>
      <ion-item button (click)="open('https://www.contribunet.campeche.gob.mx/sit-contribunet/modulos/seguridad/bienvenida.xhtml')">
        <ion-label>Impuestos Estatales</ion-label>
      </ion-item>
    </ion-list>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], AcercaPopoverPage);



/***/ }),

/***/ "./src/app/pages/acerca/acerca-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/acerca/acerca-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AcercaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaPageRoutingModule", function() { return AcercaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _acerca__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acerca */ "./src/app/pages/acerca/acerca.ts");




const routes = [
    {
        path: '',
        component: _acerca__WEBPACK_IMPORTED_MODULE_3__["AcercaPage"]
    }
];
let AcercaPageRoutingModule = class AcercaPageRoutingModule {
};
AcercaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AcercaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/acerca/acerca.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/acerca/acerca.module.ts ***!
  \***********************************************/
/*! exports provided: AcercaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaModule", function() { return AcercaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _acerca__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acerca */ "./src/app/pages/acerca/acerca.ts");
/* harmony import */ var _acerca_popover_acerca_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../acerca-popover/acerca-popover */ "./src/app/pages/acerca-popover/acerca-popover.ts");
/* harmony import */ var _acerca_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acerca-routing.module */ "./src/app/pages/acerca/acerca-routing.module.ts");








let AcercaModule = class AcercaModule {
};
AcercaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _acerca_routing_module__WEBPACK_IMPORTED_MODULE_7__["AcercaPageRoutingModule"]
        ],
        declarations: [_acerca__WEBPACK_IMPORTED_MODULE_5__["AcercaPage"], _acerca_popover_acerca_popover__WEBPACK_IMPORTED_MODULE_6__["AcercaPopoverPage"]],
        entryComponents: [_acerca_popover_acerca_popover__WEBPACK_IMPORTED_MODULE_6__["AcercaPopoverPage"]],
        bootstrap: [_acerca__WEBPACK_IMPORTED_MODULE_5__["AcercaPage"]],
    })
], AcercaModule);



/***/ }),

/***/ "./src/app/pages/acerca/acerca.scss":
/*!******************************************!*\
  !*** ./src/app/pages/acerca/acerca.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 25px;\n}\n\n.about-header {\n  background-color: #222;\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center;\n}\n\n.about-header img {\n  max-height: 75%;\n  margin-top: 5%;\n}\n\n.about-info {\n  text-align: center;\n}\n\n.about-info p {\n  color: var(--ion-color-dark);\n  text-align: left;\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n.ios .about-info {\n  text-align: center;\n}\n\n.about-description {\n  text-align: justify;\n}\n\n.info-label {\n  color: #646464;\n}\n\n.version-number {\n  color: #646464;\n  margin: -10px 0 20px 0;\n  text-align: center;\n}\n\n.ion-padding-start {\n  text-align: center;\n}\n\n@-webkit-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate3d(0, 0, 0);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate3d(0, 0, 0);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate3d(0, 0, 0);\n  }\n}\n\n.bounce {\n  opacity: 0;\n  -webkit-animation-name: bounceIn;\n          animation-name: bounceIn;\n  -webkit-animation-duration: 450ms;\n          animation-duration: 450ms;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvYWNlcmNhL2FjZXJjYS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2VyY2EvYWNlcmNhLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMENBQUE7RUNDRjtFRENBO0lBQ0UsWUFBQTtJQUNBLHFCQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7SUFDQSxzQkFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0lBQ0Esd0NBQUE7RUNDRjtBQUNGOztBRGpCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBDQUFBO0VDQ0Y7RURDQTtJQUNFLFlBQUE7SUFDQSxxQkFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7RUNDRjtFRENBO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2VyY2EvYWNlcmNhLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LWhlYWRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NSU7XG4gIG1hcmdpbi10b3A6NSU7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWJvdXQtaW5mbyBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmluZm8tbGFiZWwge1xuICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApOyBcbn1cblxuLnZlcnNpb24tbnVtYmVyIHtcbiAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTsgXG4gIG1hcmdpbjogLTEwcHggMCAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUlue1xuICAwJXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIH1cbiAgNTAle1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgODAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg5KTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIH1cbn1cblxuLmJvdW5jZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NTBtcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn0iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LWhlYWRlciBpbWcge1xuICBtYXgtaGVpZ2h0OiA3NSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hYm91dC1kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pbmZvLWxhYmVsIHtcbiAgY29sb3I6ICM2NDY0NjQ7XG59XG5cbi52ZXJzaW9uLW51bWJlciB7XG4gIGNvbG9yOiAjNjQ2NDY0O1xuICBtYXJnaW46IC0xMHB4IDAgMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pb24tcGFkZGluZy1zdGFydCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44OSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYm91bmNlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xuICBhbmltYXRpb24tZHVyYXRpb246IDQ1MG1zO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/acerca/acerca.ts":
/*!****************************************!*\
  !*** ./src/app/pages/acerca/acerca.ts ***!
  \****************************************/
/*! exports provided: AcercaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaPage", function() { return AcercaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _acerca_popover_acerca_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../acerca-popover/acerca-popover */ "./src/app/pages/acerca-popover/acerca-popover.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");







let AcercaPage = class AcercaPage {
    constructor(popoverCtrl, storage, router, appVersion) {
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.router = router;
        this.appVersion = appVersion;
        this.appVersion.getAppName().then(value => {
            this.appName = value;
        }).catch(err => {
            console.log(err);
            this.appName = 'SEFIN Móvil';
        });
        this.appVersion.getVersionNumber().then(value => {
            this.versionNumber = value;
        }).catch(err => {
            console.log(err);
            this.versionNumber = '0.0.0';
        });
    }
    presentPopover(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _acerca_popover_acerca_popover__WEBPACK_IMPORTED_MODULE_3__["AcercaPopoverPage"],
                event: event
            });
            yield popover.present();
        });
    }
    openTutorial() {
        this.storage.set('ion_did_tutorial', false);
        this.router.navigateByUrl('/tutorial');
    }
};
AcercaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"] }
];
AcercaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-acerca',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./acerca.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca/acerca.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./acerca.scss */ "./src/app/pages/acerca/acerca.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]])
], AcercaPage);



/***/ }),

/***/ "./src/app/pages/detalle-predial-popover/detalle-predial-popover.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/detalle-predial-popover/detalle-predial-popover.ts ***!
  \**************************************************************************/
/*! exports provided: DetallePredialPopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePredialPopoverPage", function() { return DetallePredialPopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");









let DetallePredialPopoverPage = class DetallePredialPopoverPage {
    constructor(popoverCtrl, transfer, file, platform, toastService, navParams, router, fileOpener, loadingService) {
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
    ngAfterViewInit() {
        this.detallePredial = this.navParams.get('detallePredial');
        console.log("dentro del componente popover de los detalles");
    }
    /**
     * Descargar presupuesto predial
     */
    downloadFile() {
        console.log("Descargando presupuesto");
        this.popoverCtrl.dismiss();
        const now = new Date(Date.now());
        const url = this.detallePredial.urlPresupuesto;
        const fecha = now.toLocaleString();
        const nombreArchivo = 'presupuesto_predial_' + this.detallePredial.numeroCuenta + '_' + fecha + '.pdf';
        this.loadingService.present();
        if (this.platform.is('desktop')) {
            let link = document.createElement("a");
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
            const fileTransfer = this.transfer.create();
            fileTransfer.download(url, this.file.externalDataDirectory + nombreArchivo).then(entry => {
                console.log('Descarga finalizada: ' + entry.toURL());
                this.loadingService.dismiss();
                this.fileOpener.open(entry.toURL(), "application/pdf").then(() => console.log("Archivo abierto con exito", entry.toURL()))
                    .catch(e => console.log("Error al intentar abrir el archivo", entry.toURL()));
            }, error => {
                this.loadingService.dismiss();
                console.log(error.exception);
                this.toastService.info(error.exception);
            });
        }
    }
    /**
     * Generar código QR/barcode
     */
    generateQR() {
        console.log("Redirigiendo a qr");
        this.popoverCtrl.dismiss();
        let navigationExtras = {
            state: {
                detallePredial: this.detallePredial
            }
        };
        this.router.navigateByUrl('/app/tabs/predial/detalle-predial-qr', navigationExtras);
    }
};
DetallePredialPopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }
];
DetallePredialPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <ion-list lines="none">
      <ion-item (click)="downloadFile()"> 
        <ion-icon name="download" slot="start"></ion-icon>
        <ion-label>Descargar</ion-label>
      </ion-item>
      <ion-item (click)="generateQR()">
        <ion-icon src="../../../assets/icons/qrcode.svg" slot="start"></ion-icon>
        <ion-label>QR/Barcode</ion-label>
      </ion-item>
    </ion-list>
  `
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
], DetallePredialPopoverPage);



/***/ }),

/***/ "./src/app/pages/detalle-predial/detalle-predial-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/detalle-predial/detalle-predial-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetallePredialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePredialPageRoutingModule", function() { return DetallePredialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detalle_predial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-predial */ "./src/app/pages/detalle-predial/detalle-predial.ts");




const routes = [
    {
        path: '',
        component: _detalle_predial__WEBPACK_IMPORTED_MODULE_3__["DetallePredialPage"]
    }
];
let DetallePredialPageRoutingModule = class DetallePredialPageRoutingModule {
};
DetallePredialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DetallePredialPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/detalle-predial/detalle-predial.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detalle-predial/detalle-predial.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetallePredialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePredialModule", function() { return DetallePredialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _detalle_predial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-predial */ "./src/app/pages/detalle-predial/detalle-predial.ts");
/* harmony import */ var _detalle_predial_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detalle-predial-routing.module */ "./src/app/pages/detalle-predial/detalle-predial-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalle_predial_popover_detalle_predial_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../detalle-predial-popover/detalle-predial-popover */ "./src/app/pages/detalle-predial-popover/detalle-predial-popover.ts");







let DetallePredialModule = class DetallePredialModule {
};
DetallePredialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _detalle_predial_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetallePredialPageRoutingModule"]
        ],
        declarations: [
            _detalle_predial__WEBPACK_IMPORTED_MODULE_3__["DetallePredialPage"],
            _detalle_predial_popover_detalle_predial_popover__WEBPACK_IMPORTED_MODULE_6__["DetallePredialPopoverPage"]
        ],
        entryComponents: [
            _detalle_predial_popover_detalle_predial_popover__WEBPACK_IMPORTED_MODULE_6__["DetallePredialPopoverPage"]
        ]
    })
], DetallePredialModule);



/***/ }),

/***/ "./src/app/pages/detalle-predial/detalle-predial.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/detalle-predial/detalle-predial.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".encabezado-detalle {\n  font-size: small;\n}\n\n.totales-detalles {\n  font-size: 14px;\n}\n\n.col-align-end {\n  text-align: end;\n}\n\n.col-align-center {\n  text-align: center;\n}\n\n.personalized-heigh {\n  max-height: 35px;\n}\n\n.registros-detalles {\n  font-size: 14px;\n  --padding-start: 0px;\n}\n\n.footer-detalles {\n  background: var(--ion-color-light);\n}\n\n.font-larger {\n  font-size: larger;\n  color: var(--ion-color-dark);\n}\n\n.list-adeudos {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.item-subtotal {\n  border-top: solid 1px #efefef69;\n}\n\n.item-periodo {\n  background: var(--ion-color-light);\n}\n\n.row-total-periodo {\n  font-weight: 600;\n}\n\n.col-informacion-predio {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvZGV0YWxsZS1wcmVkaWFsL2RldGFsbGUtcHJlZGlhbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhbGxlLXByZWRpYWwvZGV0YWxsZS1wcmVkaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZXRhbGxlLXByZWRpYWwvZGV0YWxsZS1wcmVkaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5jYWJlemFkby1kZXRhbGxlIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4udG90YWxlcy1kZXRhbGxlcyB7XG4gICAgZm9udC1zaXplOiAxNHB4Oztcbn1cblxuLmNvbC1hbGlnbi1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmNvbC1hbGlnbi1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBlcnNvbmFsaXplZC1oZWlnaCB7XG4gICAgbWF4LWhlaWdodDogMzVweDtcbn1cblxuLnJlZ2lzdHJvcy1kZXRhbGxlcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uZm9vdGVyLWRldGFsbGVzIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uZm9udC1sYXJnZXIge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5saXN0LWFkZXVkb3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuXG4uaXRlbS1zdWJ0b3RhbCB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZmVmZWY2OTtcbn1cblxuLml0ZW0tcGVyaW9kbyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnJvdy10b3RhbC1wZXJpb2RvIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29sLWluZm9ybWFjaW9uLXByZWRpbyB7XG4gICAgcGFkZGluZzogMHB4O1xufSIsIi5lbmNhYmV6YWRvLWRldGFsbGUge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4udG90YWxlcy1kZXRhbGxlcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbC1hbGlnbi1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5jb2wtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGVyc29uYWxpemVkLWhlaWdoIHtcbiAgbWF4LWhlaWdodDogMzVweDtcbn1cblxuLnJlZ2lzdHJvcy1kZXRhbGxlcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5mb290ZXItZGV0YWxsZXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uZm9udC1sYXJnZXIge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmxpc3QtYWRldWRvcyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLml0ZW0tc3VidG90YWwge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VmZWZlZjY5O1xufVxuXG4uaXRlbS1wZXJpb2RvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnJvdy10b3RhbC1wZXJpb2RvIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbC1pbmZvcm1hY2lvbi1wcmVkaW8ge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/detalle-predial/detalle-predial.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/detalle-predial/detalle-predial.ts ***!
  \**********************************************************/
/*! exports provided: DetallePredialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePredialPage", function() { return DetallePredialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_predial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/predial.service */ "./src/app/services/predial.service.ts");
/* harmony import */ var _detalle_predial_popover_detalle_predial_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../detalle-predial-popover/detalle-predial-popover */ "./src/app/pages/detalle-predial-popover/detalle-predial-popover.ts");







let DetallePredialPage = class DetallePredialPage {
    constructor(router, route, config, storage, predialService, popoverController) {
        this.router = router;
        this.route = route;
        this.config = config;
        this.storage = storage;
        this.predialService = predialService;
        this.popoverController = popoverController;
        this.now = new Date(Date.now());
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.detallePredial = this.router.getCurrentNavigation().extras.state.predial;
                this.detallePredial.openPredial = true;
                this.detallePredial.openBasura = true;
                this.detallePredial.openCatastral = true;
                this.detallePredial.predio.openPredio = true;
                if (this.detallePredial.adeudos.length > 0) {
                    this.detallePredial.adeudos.forEach(element => {
                        element.open = false;
                    });
                }
                if (this.detallePredial.basura.length > 0) {
                    this.detallePredial.basura.forEach(element => {
                        element.open = false;
                    });
                }
                this.tiposUsoSuelo = this.predialService.getTipoUsoSuelo();
                console.debug(this.detallePredial);
            }
        });
    }
    ionViewWillEnter() {
        this.ios = this.config.get('mode') === 'ios';
    }
    getTipoUsoDeSuelo(idTipoUsoSuelo) {
        let desc = '';
        if (this.tiposUsoSuelo && this.tiposUsoSuelo.length > 0) {
            let result = this.tiposUsoSuelo.find(x => x.id === idTipoUsoSuelo);
            desc = result.nombre || "N/D";
        }
        return desc;
    }
    toggleCardPredio() {
        this.detallePredial.predio.openPredio = !this.detallePredial.predio.openPredio;
    }
    toggleCardPredial() {
        this.detallePredial.openPredial = !this.detallePredial.openPredial;
    }
    toggleCardBasura() {
        this.detallePredial.openBasura = !this.detallePredial.openBasura;
    }
    toggleCardCatastral() {
        this.detallePredial.openCatastral = !this.detallePredial.openCatastral;
    }
    togglePeriodoPredial(index) {
        this.detallePredial.adeudos[index].open = !this.detallePredial.adeudos[index].open;
    }
    togglePeriodoBasura(index) {
        this.detallePredial.basura[index].open = !this.detallePredial.basura[index].open;
    }
    presentPopover(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _detalle_predial_popover_detalle_predial_popover__WEBPACK_IMPORTED_MODULE_6__["DetallePredialPopoverPage"],
                componentProps: { detallePredial: this.detallePredial },
                event: event
            });
            yield popover.present();
        });
    }
    /**
     * Mostrar detalle de adeudo de periódo
     */
    mostrarDetallePredialDetallePeriodo(concepto, adeudoPeriodo) {
        console.log("Redirigiendo a detalles adeudo de periodo");
        let navigationExtras = {
            state: {
                concepto: concepto,
                adeudoPeriodo: adeudoPeriodo
            }
        };
        this.router.navigateByUrl('/app/tabs/predial/detalle-predial-detalle', navigationExtras);
    }
    /**
     * Abrir qr predial
     */
    pagarPredial() {
        console.log("Redirigiendo qr predial");
        let navigationExtras = {
            state: {
                detallePredial: this.detallePredial
            }
        };
        this.router.navigateByUrl('/app/tabs/predial/detalle-predial-qr', navigationExtras);
    }
};
DetallePredialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_predial_service__WEBPACK_IMPORTED_MODULE_5__["PredialService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
DetallePredialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-detalle-predial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-predial.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-predial/detalle-predial.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-predial.scss */ "./src/app/pages/detalle-predial/detalle-predial.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _services_predial_service__WEBPACK_IMPORTED_MODULE_5__["PredialService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
], DetallePredialPage);



/***/ }),

/***/ "./src/app/pages/inicio/inicio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inicio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio */ "./src/app/pages/inicio/inicio.ts");




const routes = [
    {
        path: '',
        component: _inicio__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio */ "./src/app/pages/inicio/inicio.ts");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/inicio/inicio-routing.module.ts");







let InicioModule = class InicioModule {
};
InicioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__["InicioPageRoutingModule"]
        ],
        declarations: [
            _inicio__WEBPACK_IMPORTED_MODULE_5__["InicioPage"]
        ],
        entryComponents: []
    })
], InicioModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.scss":
/*!******************************************!*\
  !*** ./src/app/pages/inicio/inicio.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\n.grid-top-index {\n  position: fixed;\n  z-index: 9;\n  width: 100%;\n}\n\n.show-background {\n  --background: var(--ion-color-primary);\n}\n\n.home-slides {\n  background: transparent;\n  top: -56px;\n}\n\n.home-slide-item {\n  background-size: cover;\n  background-blend-mode: darken;\n}\n\n.home-slide-item:after {\n  content: \"\\a\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: radial-gradient(transparent, rgba(0, 0, 0, 0.6));\n}\n\nelement.style {\n  height: 574px;\n}\n\n.swiper-slide {\n  max-height: 100%;\n}\n\n.home-slides {\n  max-height: 120%;\n  min-height: 120%;\n  --bullet-background: radial-gradient(circle, transparent 40%, white 50%);\n  --bullet-background-active: white;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n  font-size: larger;\n  font-weight: bold;\n  color: #fff;\n}\n\n.slide-description {\n  margin-top: 2rem;\n  font-size: large;\n  color: #fff;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\np b {\n  padding: 0px;\n}\n\n.action-card {\n  text-align: left;\n}\n\n@-webkit-keyframes spring {\n  0% {\n    transform: scale(1) translateY(0);\n  }\n  10% {\n    transform: scale(1.2, 0.6);\n  }\n  30% {\n    transform: scale(0.8, 1.1) translateY(-50px);\n  }\n  50% {\n    transform: scale(1) translateY(0);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes spring {\n  0% {\n    transform: scale(1) translateY(0);\n  }\n  10% {\n    transform: scale(1.2, 0.6);\n  }\n  30% {\n    transform: scale(0.8, 1.1) translateY(-50px);\n  }\n  50% {\n    transform: scale(1) translateY(0);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n.spring {\n  -webkit-animation: spring 2s;\n          animation: spring 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes gbounce {\n  0% {\n    transform: translateY(0);\n  }\n  30% {\n    transform: translateY(10px);\n  }\n  50% {\n    transform: translateY(50px);\n  }\n  100% {\n    transform: translateY(50px);\n  }\n}\n\n@keyframes gbounce {\n  0% {\n    transform: translateY(0);\n  }\n  30% {\n    transform: translateY(10px);\n  }\n  50% {\n    transform: translateY(50px);\n  }\n  100% {\n    transform: translateY(50px);\n  }\n}\n\n.gbounce {\n  --box-shadow: none;\n  -webkit-animation: gbounce 2s;\n          animation: gbounce 2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.gbounce:focus {\n  -webkit-animation: none;\n          animation: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0U7RUFDRSwrQ0FBQTtFQUNBLGtCQUFBO0FDYko7O0FEV0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDUko7O0FETUU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FEQ0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FESkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FEVEU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDWUo7O0FEZEU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDaUJKOztBRG5CRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNzQko7O0FEeEJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQzJCSjs7QUQ3QkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDZ0NKOztBRDVCQTtFQUVFLHlCQUFBO0VBQ0EsMkJBQUE7QUM4QkY7O0FEM0JBO0VBQ0Usa0JBQUE7QUM4QkY7O0FEM0JBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDOEJGOztBRDNCQTtFQUNFLHNDQUFBO0FDOEJGOztBRDNCQTtFQUVFLHVCQUFBO0VBQ0EsVUFBQTtBQzZCRjs7QUQxQkE7RUFJRSxzQkFBQTtFQUNBLDZCQUFBO0FDNkJGOztBRHhCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw0REFBQTtBQzJCRjs7QUR4QkE7RUFDSSxhQUFBO0FDMkJKOztBRHhCQTtFQUNFLGdCQUFBO0FDMkJGOztBRHhCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RUFBQTtFQUNBLGlDQUFBO0FDMkJGOztBRHZCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUMwQkY7O0FEdkJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUMwQkY7O0FEdkJBO0VBQ0UsZ0JBQUE7QUMwQkY7O0FEdkJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzBCRjs7QUR4QkU7RUFDRSxZQUFBO0FDMEJKOztBRHRCQTtFQUNFLGdCQUFBO0FDeUJGOztBRHRCQTtFQUNFO0lBQ0UsaUNBQUE7RUN5QkY7RUR2QkE7SUFDRSwwQkFBQTtFQ3lCRjtFRHZCQTtJQUNFLDRDQUFBO0VDeUJGO0VEdkJBO0lBQ0UsaUNBQUE7RUN5QkY7RUR2QkE7SUFDRSx3QkFBQTtFQ3lCRjtBQUNGOztBRHhDQTtFQUNFO0lBQ0UsaUNBQUE7RUN5QkY7RUR2QkE7SUFDRSwwQkFBQTtFQ3lCRjtFRHZCQTtJQUNFLDRDQUFBO0VDeUJGO0VEdkJBO0lBQ0UsaUNBQUE7RUN5QkY7RUR2QkE7SUFDRSx3QkFBQTtFQ3lCRjtBQUNGOztBRHZCQTtFQUNFLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ3lCRjs7QUR0QkE7RUFDRTtJQUFLLHdCQUFBO0VDMEJMO0VEekJBO0lBQU0sMkJBQUE7RUM0Qk47RUQzQkE7SUFBTSwyQkFBQTtFQzhCTjtFRDdCQTtJQUFPLDJCQUFBO0VDZ0NQO0FBQ0Y7O0FEckNBO0VBQ0U7SUFBSyx3QkFBQTtFQzBCTDtFRHpCQTtJQUFNLDJCQUFBO0VDNEJOO0VEM0JBO0lBQU0sMkJBQUE7RUM4Qk47RUQ3QkE7SUFBTywyQkFBQTtFQ2dDUDtBQUNGOztBRDlCQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDZ0NGOztBRDdCQTtFQUNFLHVCQUFBO1VBQUEsZUFBQTtBQ2dDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjYXRlZ29yaWVzOiAoXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXG4gIHRvb2xpbmc6ICNmZTRjNTIsXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxuICBkZXNpZ246ICNmZWQwMzUsXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxuICBmb29kOiAjM2JjN2M0LFxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLy8gVE9ETyB0ZXN0IHRyYW5zcGFyZW50IGFuZCBmdWxsc2NyZWVuXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncmlkLXRvcC1pbmRleCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbiAgd2lkdGg6IDEwMCU7O1xufVxuXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxufVxuXG4uaG9tZS1zbGlkZXMge1xuICAvL2JhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjMDA5Njg4LCAjMWQ3MTdiKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogLTU2cHg7XG59XG5cbi5ob21lLXNsaWRlLWl0ZW0ge1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gIC8vZmlsdGVyOiBibHVyKDhweCk7XG4gIC8vLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cblxuLmhvbWUtc2xpZGUtaXRlbTphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXEEnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlOyBcbiAgaGVpZ2h0OjEwMCU7XG4gIHRvcDowOyBcbiAgbGVmdDowO1xuICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcbn1cblxuZWxlbWVudC5zdHlsZSB7XG4gICAgaGVpZ2h0OiA1NzRweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7O1xufVxuXG4uaG9tZS1zbGlkZXN7XG4gIG1heC1oZWlnaHQ6IDEyMCU7XG4gIG1pbi1oZWlnaHQ6IDEyMCU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDQwJSwgd2hpdGUgNTAlKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHdoaXRlO1xufVxuXG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjojZmZmO1xufVxuXG4uc2xpZGUtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAyLjByZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIGIge1xuICAgIHBhZGRpbmc6IDBweDs7XG4gIH1cbn1cblxuLmFjdGlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQGtleWZyYW1lcyBzcHJpbmcgeyBcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTsgXG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMC42KTsgXG4gIH1cbiAgMzAlIHsgXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDEuMSkgdHJhbnNsYXRlWSgtNTBweCk7IFxuICB9XG4gIDUwJSB7IFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTsgXG4gIH1cbiAgMTAwJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgXG4gIH1cbn1cbi5zcHJpbmcge1xuICBhbmltYXRpb246IHNwcmluZyAycztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZ2JvdW5jZSB7IFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7IH1cbn1cblxuLmdib3VuY2Uge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGFuaW1hdGlvbjogZ2JvdW5jZSAycztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5nYm91bmNlOmZvY3VzIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufSIsImlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9aW9uaWNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9YW5ndWxhcl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWMyODJiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Y29tbXVuaWNhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOGU4ZDkzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9dG9vbGluZ10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmU0YzUyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9c2VydmljZXNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZkOGIyZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRlc2lnbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmVkMDM1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9d29ya3Nob3BdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY5YmI3YjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWZvb2RdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNiYzdjNDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRvY3VtZW50YXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2IxNmJlMztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPW5hdmlnYXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2MDBjYztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncmlkLXRvcC1pbmRleCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaG93LWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmhvbWUtc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogLTU2cHg7XG59XG5cbi5ob21lLXNsaWRlLWl0ZW0ge1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG59XG5cbi5ob21lLXNsaWRlLWl0ZW06YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcYVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNikpO1xufVxuXG5lbGVtZW50LnN0eWxlIHtcbiAgaGVpZ2h0OiA1NzRweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5ob21lLXNsaWRlcyB7XG4gIG1heC1oZWlnaHQ6IDEyMCU7XG4gIG1pbi1oZWlnaHQ6IDEyMCU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDQwJSwgd2hpdGUgNTAlKTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHdoaXRlO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zbGlkZS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxucCBiIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYWN0aW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHNwcmluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMC42KTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44LCAxLjEpIHRyYW5zbGF0ZVkoLTUwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLnNwcmluZyB7XG4gIGFuaW1hdGlvbjogc3ByaW5nIDJzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBnYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIH1cbn1cbi5nYm91bmNlIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBhbmltYXRpb246IGdib3VuY2UgMnM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uZ2JvdW5jZTpmb2N1cyB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.ts":
/*!****************************************!*\
  !*** ./src/app/pages/inicio/inicio.ts ***!
  \****************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




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
        console.log("Hora actual: " + this.now.getHours());
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
    /**
     * Ver lugares de pago
     */
    verLugaresPago() {
        this.router.navigateByUrl('/lugares');
    }
};
InicioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeSlides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], InicioPage.prototype, "slides", void 0);
InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.scss */ "./src/app/pages/inicio/inicio.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]])
], InicioPage);



/***/ }),

/***/ "./src/app/pages/map/map-dark-style.js":
/*!*********************************************!*\
  !*** ./src/app/pages/map/map-dark-style.js ***!
  \*********************************************/
/*! exports provided: darkStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkStyle", function() { return darkStyle; });
const darkStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

/***/ }),

/***/ "./src/app/pages/map/map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");




const routes = [
    {
        path: '',
        component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MapPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/pages/map/map-routing.module.ts");






let MapModule = class MapModule {
};
MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
        ],
        declarations: [
            _map__WEBPACK_IMPORTED_MODULE_4__["MapPage"],
        ]
    })
], MapModule);



/***/ }),

/***/ "./src/app/pages/map/map.scss":
/*!************************************!*\
  !*** ./src/app/pages/map/map.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsNkJBQUE7RUFFQSxVQUFBO0VBQ0EsaUNBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/map/map.ts":
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _map_dark_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-dark-style */ "./src/app/pages/map/map-dark-style.js");





let MapPage = class MapPage {
    constructor(doc, platform) {
        this.doc = doc;
        this.platform = platform;
    }
    ngAfterViewInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const appEl = this.doc.querySelector('ion-app');
            let isDark = false;
            let style = [];
            if (appEl.classList.contains('dark-theme')) {
                style = _map_dark_style__WEBPACK_IMPORTED_MODULE_4__["darkStyle"];
            }
            const googleMaps = yield getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw');
            let map;
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        const el = mutation.target;
                        isDark = el.classList.contains('dark-theme');
                        if (map && isDark) {
                            map.setOptions({ styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_4__["darkStyle"] });
                        }
                        else if (map) {
                            map.setOptions({ styles: [] });
                        }
                    }
                });
            });
            observer.observe(appEl, {
                attributes: true
            });
        });
    }
};
MapPage.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapPage.prototype, "mapElement", void 0);
MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.scss */ "./src/app/pages/map/map.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], MapPage);

function getGoogleMaps(apiKey) {
    const win = window;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            const googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}


/***/ }),

/***/ "./src/app/pages/predial/predial-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/predial/predial-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PredialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredialPageRoutingModule", function() { return PredialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _predial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./predial */ "./src/app/pages/predial/predial.ts");




const routes = [
    {
        path: '',
        component: _predial__WEBPACK_IMPORTED_MODULE_3__["PredialPage"]
    }
];
let PredialPageRoutingModule = class PredialPageRoutingModule {
};
PredialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PredialPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/predial/predial.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/predial/predial.module.ts ***!
  \*************************************************/
/*! exports provided: PredialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredialModule", function() { return PredialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _predial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predial */ "./src/app/pages/predial/predial.ts");
/* harmony import */ var _predial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./predial-routing.module */ "./src/app/pages/predial/predial-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let PredialModule = class PredialModule {
};
PredialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _predial_routing_module__WEBPACK_IMPORTED_MODULE_5__["PredialPageRoutingModule"]
        ],
        declarations: [_predial__WEBPACK_IMPORTED_MODULE_4__["PredialPage"]],
    })
], PredialModule);



/***/ }),

/***/ "./src/app/pages/predial/predial.scss":
/*!********************************************!*\
  !*** ./src/app/pages/predial/predial.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  --placeholder-opacity: 0.33;\n}\n\nion-item {\n  --highlight-color-valid: none;\n  --highlight-color-invalid: none;\n  --highlight-color-focused: none;\n  --border-color: #f7f7f7;\n}\n\n.card-content-predial {\n  margin-top: -20px;\n}\n\n.toolbar-no-border {\n  --border-color: transparent;\n}\n\n.form-list {\n  margin: 0 -20px 0 -20px;\n}\n\n.scroll {\n  background: #ededed;\n}\n\n.predial-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.predial-card ion-card-header {\n  padding: 0;\n}\n\n.predial-card ion-card-header .item {\n  padding: 4px 16px;\n}\n\n.predial-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.invalid {\n  border: 2px solid #ea6153;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n  margin: 2px;\n  vertical-align: middle;\n}\n\n.error-icon {\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.validation-errors {\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\n.footer-button {\n  margin: 0px !important;\n}\n\n.col-align-end {\n  text-align: end;\n}\n\n.col-align-center {\n  text-align: center;\n}\n\n.p-text-primary {\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n\n.align-self-center {\n  align-self: center;\n}\n\n.medium-color-text {\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZnJhaW4vSW9uaWNQcm9qZWN0cy9TRUZJTk1vdmlsL3NyYy9hcHAvcGFnZXMvcHJlZGlhbC9wcmVkaWFsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByZWRpYWwvcHJlZGlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FETUE7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsOEJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWRpYWwvcHJlZGlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjMzO1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiBub25lO1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiBub25lO1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmNhcmQtY29udGVudC1wcmVkaWFsIHtcbiAgbWFyZ2luLXRvcDotMjBweDtcbn1cblxuLnRvb2xiYXItbm8tYm9yZGVyIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1saXN0IHtcbiAgbWFyZ2luOiAwIC0yMHB4IDAgLTIwcHg7XG59XG5cbi5zY3JvbGwge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuXG4ucHJlZGlhbC1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJlZGlhbC1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcmVkaWFsLWNhcmQgaW9uLWNhcmQtaGVhZGVyIC5pdGVtIHtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG59XG5cbi5wcmVkaWFsLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlYTYxNTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgbWFyZ2luOiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5lcnJvci1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi52YWxpZGF0aW9uLWVycm9ycyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDs7XG59XG5cbi5mb290ZXItYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1hbGlnbi1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5jb2wtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZGZvb3RlciB7XG4gIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY2OTtcbn1cblxuLnAtdGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFsaWduLXNlbGYtY2VudGVye1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7O1xufVxuXG4ubWVkaXVtLWNvbG9yLXRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59IiwiaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjMzO1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiBub25lO1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiBub25lO1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmNhcmQtY29udGVudC1wcmVkaWFsIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLW5vLWJvcmRlciB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGlzdCB7XG4gIG1hcmdpbjogMCAtMjBweCAwIC0yMHB4O1xufVxuXG4uc2Nyb2xsIHtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cblxuLnByZWRpYWwtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByZWRpYWwtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJlZGlhbC1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaXRlbSB7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4ucHJlZGlhbC1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWE2MTUzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIG1hcmdpbjogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZXJyb3ItaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5mb290ZXItYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1hbGlnbi1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5jb2wtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucC10ZXh0LXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tZWRpdW0tY29sb3ItdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/predial/predial.ts":
/*!******************************************!*\
  !*** ./src/app/pages/predial/predial.ts ***!
  \******************************************/
/*! exports provided: PredialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredialPage", function() { return PredialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_predial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/predial.service */ "./src/app/services/predial.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let PredialPage = class PredialPage {
    constructor(router, formBuilder, predialService, loadingService, toastService, storage) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.predialService = predialService;
        this.loadingService = loadingService;
        this.toastService = toastService;
        this.storage = storage;
        this.enviado = false;
        this.customActionSheetOptions = {
        //header: 'Municipios'
        };
        this.consultasPredial = [];
    }
    ionViewDidEnter() {
        //this.resetForm();
        //inicializar consulta predial fake
        this.inicializarConsultapredialFake();
        //Obtener consultas recientes
        this.storage.get('consultasPredial').then((consultas) => {
            this.consultasPredial = consultas || [];
        });
    }
    ngOnInit() {
        this.municipios = this.predialService.getMunicipios();
        this.formularioConsultaPredial = this.formBuilder.group({
            municipio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            numeroCuenta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^$|^[A-Za-z0-9]+$')
                ])]
        });
    }
    //#region Consulta predial fake
    inicializarConsultapredialFake() {
        this.consultaPredialPrueba = {
            actualizaciones: 72,
            adeudos: [
                {
                    anyoFiscal: 2017,
                    baseGravable: 228478.5,
                    bimestres: [
                        {
                            actualizacion: 9,
                            bimestre: 1,
                            idBimestre: "U16520171",
                            importe: 70,
                            recargo: 37,
                            totalBimestre: 116
                        },
                        {
                            actualizacion: 7,
                            bimestre: 2,
                            idBimestre: "U16520172",
                            importe: 70,
                            recargo: 34,
                            totalBimestre: 111
                        },
                        {
                            actualizacion: 7,
                            bimestre: 3,
                            idBimestre: "U16520173",
                            importe: 70,
                            recargo: 32,
                            totalBimestre: 109
                        },
                        {
                            actualizacion: 7,
                            bimestre: 4,
                            idBimestre: "U16520174",
                            importe: 70,
                            recargo: 31,
                            totalBimestre: 108
                        },
                        {
                            actualizacion: 6,
                            bimestre: 5,
                            idBimestre: "U16520175",
                            importe: 70,
                            recargo: 28,
                            totalBimestre: 104
                        },
                        {
                            actualizacion: 5,
                            bimestre: 6,
                            idBimestre: "U16520176",
                            importe: 73,
                            recargo: 27,
                            totalBimestre: 105
                        }
                    ],
                    idImpuesto: "U1652017",
                    importeTotal: 653,
                    impuesto: 365.5656,
                    impuestoPagar: 423,
                    tasa: 0.0016,
                    totalActualizaciones: 41,
                    totalRecargos: 189,
                    valorCatastral: 228478.5
                },
                {
                    anyoFiscal: 2018,
                    baseGravable: 228478.5,
                    bimestres: [
                        {
                            actualizacion: 4,
                            bimestre: 1,
                            idBimestre: "U16520181",
                            importe: 70,
                            recargo: 24,
                            totalBimestre: 98
                        },
                        {
                            actualizacion: 3,
                            bimestre: 2,
                            idBimestre: "U16520182",
                            importe: 70,
                            recargo: 22,
                            totalBimestre: 95
                        },
                        {
                            actualizacion: 3,
                            bimestre: 3,
                            idBimestre: "U16520183",
                            importe: 70,
                            recargo: 20,
                            totalBimestre: 93
                        },
                        {
                            actualizacion: 3,
                            bimestre: 4,
                            idBimestre: "U16520184",
                            importe: 70,
                            recargo: 18,
                            totalBimestre: 91
                        },
                        {
                            actualizacion: 2,
                            bimestre: 5,
                            idBimestre: "U16520185",
                            importe: 70,
                            recargo: 15,
                            totalBimestre: 87
                        },
                        {
                            actualizacion: 2,
                            bimestre: 6,
                            idBimestre: "U16520186",
                            importe: 73,
                            recargo: 14,
                            totalBimestre: 89
                        }
                    ],
                    idImpuesto: "U1652018",
                    importeTotal: 553,
                    impuesto: 365.5656,
                    impuestoPagar: 423,
                    tasa: 0.0016,
                    totalActualizaciones: 17,
                    totalRecargos: 113,
                    valorCatastral: 228478.5
                },
                {
                    anyoFiscal: 2019,
                    baseGravable: 228478.5,
                    bimestres: [
                        {
                            actualizacion: 1,
                            bimestre: 1,
                            idBimestre: "U16520191",
                            importe: 70,
                            recargo: 11,
                            totalBimestre: 82
                        },
                        {
                            actualizacion: 1,
                            bimestre: 2,
                            idBimestre: "U16520192",
                            importe: 70,
                            recargo: 9,
                            totalBimestre: 80
                        },
                        {
                            actualizacion: 0,
                            bimestre: 3,
                            idBimestre: "U16520193",
                            importe: 70,
                            recargo: 7,
                            totalBimestre: 77
                        },
                        {
                            actualizacion: 0,
                            bimestre: 4,
                            idBimestre: "U16520194",
                            importe: 70,
                            recargo: 5,
                            totalBimestre: 75
                        },
                        {
                            actualizacion: 0,
                            bimestre: 5,
                            idBimestre: "U16520195",
                            importe: 70,
                            recargo: 3,
                            totalBimestre: 73
                        },
                        {
                            actualizacion: 0,
                            bimestre: 6,
                            idBimestre: "U16520196",
                            importe: 73,
                            recargo: 2,
                            totalBimestre: 75
                        }
                    ],
                    idImpuesto: "U1652019",
                    importeTotal: 462,
                    impuesto: 365.5656,
                    impuestoPagar: 423,
                    tasa: 0.0016,
                    totalActualizaciones: 2,
                    totalRecargos: 37,
                    valorCatastral: 228478.5
                }
            ],
            basura: [
                {
                    anyoFiscal: 2017,
                    clasificacionPredio: 1,
                    codigoMunicipio: 2,
                    descuento: 0,
                    idDerecho: null,
                    idDescuento: "U1652017",
                    importe: 85,
                    importeTotal: 135,
                    meses: [],
                    numeroCuenta: "U165",
                    numeroPeriodosAGenerar: 12,
                    numeroPeriodosPagados: 0,
                    totalActualizaciones: 12,
                    totalRecargos: 38
                },
                {
                    anyoFiscal: 2018,
                    clasificacionPredio: 1,
                    codigoMunicipio: 2,
                    descuento: 0,
                    idDerecho: null,
                    idDescuento: "U1652018",
                    importe: 85,
                    importeTotal: 105,
                    meses: [],
                    numeroCuenta: "U165",
                    numeroPeriodosAGenerar: 12,
                    numeroPeriodosPagados: 0,
                    totalActualizaciones: 0,
                    totalRecargos: 20
                },
                {
                    anyoFiscal: 2019,
                    clasificacionPredio: 1,
                    codigoMunicipio: 2,
                    descuento: 0,
                    idDerecho: null,
                    idDescuento: "U1652019",
                    importe: 85,
                    importeTotal: 90,
                    meses: [],
                    numeroCuenta: "U165",
                    numeroPeriodosAGenerar: 12,
                    numeroPeriodosPagados: 0,
                    totalActualizaciones: 0,
                    totalRecargos: 5
                }
            ],
            cedulaCatastral: 21,
            idPresupuestoPredial: 797592,
            lcc: "10191222096725878271",
            numeroCuenta: "U165",
            predio: {
                calle: "TAMARINDO",
                claveCatastral: "0200111240670030000000",
                codigoMunicipio: 2,
                codigoPostal: "24083",
                colonia: "FATIMA",
                cruzamiento1: "FATIMA Y CERRO ALTO",
                cruzamiento2: null,
                id: "U1652",
                idTipoUsoSuelo: 1,
                juntaMunicipal: null,
                localidad: "No Identificada",
                nombrePredio: "U165",
                numExterior: "148",
                numeroCuenta: "U165",
                numeroInterior: null,
                propietarios: [
                    {
                        apellidoMaterno: "AGUILAR",
                        apellidoPaterno: "RAMIREZ",
                        clasePropietario: 1,
                        idContribuyente: null,
                        nombre: "IVAN DE LA CRUZ"
                    }
                ],
                referencia: null
            },
            recargos: 402,
            totalBasura: 330,
            totalPagar: 2019,
            totalPredial: 1668,
            urlPresupuesto: "http://172.19.3.132:8081/sit-predial-web/reportesPredial/presupuestoPredial?id=797592"
        };
    }
    consultaPredialFake(municipio, cuenta) {
        console.log("Ejecutando consulta predial fake");
        this.enviado = true;
        if (!(municipio && cuenta)) {
            if (this.formularioConsultaPredial.invalid) {
                this.toastService.present("Proporcione correctamente los datos solicitados");
                return;
            }
        }
        let _municipio = municipio || this.formularioConsultaPredial.value['municipio'];
        let _cuenta = cuenta || this.formularioConsultaPredial.value['numeroCuenta'];
        this.predial = this.consultaPredialPrueba;
        //#region Almacenar consulta como reciente
        let now = new Date(Date.now());
        this.consultasPredial.unshift({
            municipio: this.municipios.find(ele => ele.id == this.predial.predio.codigoMunicipio) || "",
            date: now,
            data: this.predial
        });
        let slicedArray = this.consultasPredial.slice(0, 5);
        this.storage.set('consultasPredial', slicedArray);
        //#endregion
        let navigationExtras = {
            state: {
                predial: this.predial
            }
        };
        this.router.navigateByUrl('/app/tabs/predial/detalle-predial', navigationExtras);
    }
    ejecutarConsultaRecienteFake(consulta) {
        console.log("Ejecutando consulta reciente fake");
        if (consulta.data.predio.codigoMunicipio === 0 || consulta.data.predio.numeroCuenta === "") {
            console.log("No se encontraron los datos necesarios para ejecutar la consulta");
            this.toastService.present("No se encontraron los datos necesarios para ejecutar la consulta");
            return;
        }
        this.formularioConsultaPredial.controls.municipio.patchValue(consulta.data.predio.codigoMunicipio);
        this.formularioConsultaPredial.controls.municipio.updateValueAndValidity();
        this.formularioConsultaPredial.controls.numeroCuenta.patchValue(consulta.data.predio.numeroCuenta);
        this.formularioConsultaPredial.controls.numeroCuenta.updateValueAndValidity();
        this.consultaPredialFake(consulta.data.predio.codigoMunicipio, consulta.data.predio.numeroCuenta);
    }
    //#endregion
    /**
     *
     * @param municipio Consultar predial
     * @param cuenta
     */
    consultarPredial(municipio, cuenta) {
        this.enviado = true;
        if (!(municipio && cuenta)) {
            if (this.formularioConsultaPredial.invalid) {
                this.toastService.present("Proporcione correctamente los datos solicitados");
                return;
            }
        }
        this.loadingService.present();
        let _municipio = municipio || this.formularioConsultaPredial.value['municipio'];
        let _cuenta = cuenta || this.formularioConsultaPredial.value['numeroCuenta'];
        this.predialService.obtenerPredial(_municipio, _cuenta).subscribe((response) => {
            if (response) {
                this.predial = response;
                this.loadingService.dismiss();
                //#region Almacenar consulta como reciente
                let now = new Date(Date.now());
                this.consultasPredial.unshift({
                    municipio: this.municipios.find(ele => ele.id == this.predial.predio.codigoMunicipio) || "",
                    date: now,
                    data: this.predial
                });
                let slicedArray = this.consultasPredial.slice(0, 5);
                this.storage.set('consultasPredial', slicedArray);
                //#endregion
                let navigationExtras = {
                    state: {
                        predial: this.predial
                    }
                };
                this.router.navigateByUrl('/app/tabs/predial/detalle-predial', navigationExtras);
            }
            else {
                this.toastService.present("No se encontro un predio");
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
    removerConsultasPredialRecientes() {
        this.storage.remove('consultasPredial').then(resolve => {
            this.consultasPredial = [];
            console.log("Consultas predial recientes eliminadas");
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
        if (consulta.data.predio.codigoMunicipio === 0 || consulta.data.predio.numeroCuenta === "") {
            console.log("No se encontraron los datos necesarios para ejecutar la consulta");
            this.toastService.present("No se encontraron los datos necesarios para ejecutar la consulta");
            return;
        }
        this.formularioConsultaPredial.controls.municipio.patchValue(consulta.data.predio.codigoMunicipio);
        this.formularioConsultaPredial.controls.municipio.updateValueAndValidity();
        this.formularioConsultaPredial.controls.numeroCuenta.patchValue(consulta.data.predio.numeroCuenta);
        this.formularioConsultaPredial.controls.numeroCuenta.updateValueAndValidity();
        this.consultarPredial(consulta.data.predio.codigoMunicipio, consulta.data.predio.numeroCuenta);
    }
    resetForm() {
        this.formularioConsultaPredial.reset();
        this.enviado = false;
    }
    cancelarConsultaPredial() {
        this.router.navigateByUrl('/app/tabs/inicio', { replaceUrl: true });
    }
};
PredialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_predial_service__WEBPACK_IMPORTED_MODULE_4__["PredialService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
PredialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-predial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predial.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/predial/predial.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predial.scss */ "./src/app/pages/predial/predial.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_predial_service__WEBPACK_IMPORTED_MODULE_4__["PredialService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], PredialPage);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _inicio_inicio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inicio/inicio */ "./src/app/pages/inicio/inicio.ts");





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'inicio',
                children: [
                    {
                        path: '',
                        component: _inicio_inicio__WEBPACK_IMPORTED_MODULE_4__["InicioPage"],
                    }
                ]
            },
            {
                path: 'predial',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../predial/predial.module */ "./src/app/pages/predial/predial.module.ts")).then(m => m.PredialModule)
                    },
                    {
                        path: 'detalle-predial',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../detalle-predial/detalle-predial.module */ "./src/app/pages/detalle-predial/detalle-predial.module.ts")).then(m => m.DetallePredialModule)
                    },
                    {
                        path: 'detalle-predial-qr',
                        loadChildren: () => Promise.all(/*! import() | detalle-predial-qr-detalle-predial-qr-module */[__webpack_require__.e("default~detalle-predial-qr-detalle-predial-qr-module~detalle-refrendo-qr-detalle-refrendo-qr-module"), __webpack_require__.e("detalle-predial-qr-detalle-predial-qr-module")]).then(__webpack_require__.bind(null, /*! ../detalle-predial-qr/detalle-predial-qr.module */ "./src/app/pages/detalle-predial-qr/detalle-predial-qr.module.ts")).then(m => m.DetallePredialQrPageModule)
                    },
                    {
                        path: 'detalle-predial-detalle',
                        loadChildren: () => __webpack_require__.e(/*! import() | detalle-predial-detalle-detalle-predial-detalle-module */ "detalle-predial-detalle-detalle-predial-detalle-module").then(__webpack_require__.bind(null, /*! ../detalle-predial-detalle/detalle-predial-detalle.module */ "./src/app/pages/detalle-predial-detalle/detalle-predial-detalle.module.ts")).then(m => m.DetallePredialDetallePageModule)
                    },
                    {
                        path: 'pago-predial',
                        loadChildren: () => __webpack_require__.e(/*! import() | pago-predial-pago-predial-module */ "pago-predial-pago-predial-module").then(__webpack_require__.bind(null, /*! ../pago-predial/pago-predial.module */ "./src/app/pages/pago-predial/pago-predial.module.ts")).then(m => m.PagoPredialPageModule)
                    }
                ]
            },
            {
                path: 'refrendo',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | refrendo-refrendo-module */[__webpack_require__.e("common"), __webpack_require__.e("refrendo-refrendo-module")]).then(__webpack_require__.bind(null, /*! ../refrendo/refrendo.module */ "./src/app/pages/refrendo/refrendo.module.ts")).then(m => m.RefrendoPageModule)
                    },
                    {
                        path: 'detalle-refrendo',
                        loadChildren: () => Promise.all(/*! import() | detalle-refrendo-detalle-refrendo-module */[__webpack_require__.e("common"), __webpack_require__.e("detalle-refrendo-detalle-refrendo-module")]).then(__webpack_require__.bind(null, /*! ../detalle-refrendo/detalle-refrendo.module */ "./src/app/pages/detalle-refrendo/detalle-refrendo.module.ts")).then(m => m.DetalleRefrendoPageModule)
                    },
                    {
                        path: 'detalle-refrendo-qr',
                        loadChildren: () => Promise.all(/*! import() | detalle-refrendo-qr-detalle-refrendo-qr-module */[__webpack_require__.e("default~detalle-predial-qr-detalle-predial-qr-module~detalle-refrendo-qr-detalle-refrendo-qr-module"), __webpack_require__.e("detalle-refrendo-qr-detalle-refrendo-qr-module")]).then(__webpack_require__.bind(null, /*! ../detalle-refrendo-qr/detalle-refrendo-qr.module */ "./src/app/pages/detalle-refrendo-qr/detalle-refrendo-qr.module.ts")).then(m => m.DetalleRefrendoQrPageModule)
                    },
                    {
                        path: 'pago-refrendo',
                        loadChildren: () => __webpack_require__.e(/*! import() | pago-refrendo-pago-refrendo-module */ "pago-refrendo-pago-refrendo-module").then(__webpack_require__.bind(null, /*! ../pago-refrendo/pago-refrendo.module */ "./src/app/pages/pago-refrendo/pago-refrendo.module.ts")).then(m => m.PagoRefrendoPageModule)
                    }
                ]
            },
            {
                path: 'acerca',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../acerca/acerca.module */ "./src/app/pages/acerca/acerca.module.ts")).then(m => m.AcercaModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tabs/inicio',
                pathMatch: 'full'
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
/* harmony import */ var _acerca_acerca_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../acerca/acerca.module */ "./src/app/pages/acerca/acerca.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.module */ "./src/app/pages/map/map.module.ts");
/* harmony import */ var _inicio_inicio_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../inicio/inicio.module */ "./src/app/pages/inicio/inicio.module.ts");
/* harmony import */ var _detalle_predial_detalle_predial_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../detalle-predial/detalle-predial.module */ "./src/app/pages/detalle-predial/detalle-predial.module.ts");
/* harmony import */ var _predial_predial_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../predial/predial.module */ "./src/app/pages/predial/predial.module.ts");











let TabsModule = class TabsModule {
};
TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _acerca_acerca_module__WEBPACK_IMPORTED_MODULE_6__["AcercaModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"],
            _inicio_inicio_module__WEBPACK_IMPORTED_MODULE_8__["InicioModule"],
            _detalle_predial_detalle_predial_module__WEBPACK_IMPORTED_MODULE_9__["DetallePredialModule"],
            _predial_predial_module__WEBPACK_IMPORTED_MODULE_10__["PredialModule"],
            _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [
            _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        ]
    })
], TabsModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs-page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    })
], TabsPage);



/***/ }),

/***/ "./src/app/services/predial.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/predial.service.ts ***!
  \*********************************************/
/*! exports provided: PredialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredialService", function() { return PredialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
const appConfig = Object(_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"])();
let PredialService = class PredialService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Obtener catálogo municipios
     */
    getMunicipios() {
        return [
            {
                id: 1,
                nombre: "Calkiní"
            },
            {
                id: 2,
                nombre: "Campeche"
            },
            {
                id: 3,
                nombre: "Carmen"
            },
            {
                id: 4,
                nombre: "Champotón"
            },
            {
                id: 5,
                nombre: "Hecelchakán"
            },
            {
                id: 6,
                nombre: "Hopelchén"
            },
            {
                id: 7,
                nombre: "Palizada"
            },
            {
                id: 8,
                nombre: "Tenabo"
            },
            {
                id: 9,
                nombre: "Escárcega"
            },
            {
                id: 10,
                nombre: "Calakmul"
            },
            {
                id: 11,
                nombre: "Candelaria"
            }
        ];
    }
    /**
     * Obtener catálogo tipos de uso de suelo
     */
    getTipoUsoSuelo() {
        return [
            {
                id: 1,
                nombre: "HABITACIONAL"
            },
            {
                id: 2,
                nombre: "COMERCIAL Y DE SERVICIO"
            },
            {
                id: 3,
                nombre: "INDUSTRIAL"
            },
            {
                id: 4,
                nombre: "BALDIO"
            },
            {
                id: 5,
                nombre: "PRE. ECOLOGICA"
            },
            {
                id: 6,
                nombre: "TERRENOS EXPLOTADOS"
            },
            {
                id: 7,
                nombre: "TERRENOS INEXPLOTADOS"
            },
            {
                id: 8,
                nombre: "EJIDAL"
            },
            {
                id: 9,
                nombre: "EXENTOS"
            },
            {
                id: 10,
                nombre: "BALDIOS LIMPIOS Y BARDEADOS"
            },
            {
                id: 11,
                nombre: "BALDIOS BARDEADOS"
            },
        ];
    }
    /**
     * Consultar cuenta predial
     * @param idMunicipio
     * @param numeroCuenta
     */
    obtenerPredial(idMunicipio, numeroCuenta) {
        return this.http.get(`${appConfig.apiOrigin}sit-movil/predial?idMunicipio=${idMunicipio}&numeroCuenta=${numeroCuenta}`, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.fnError));
    }
    /**
    * FnError
    * @param err
    */
    fnError(err) {
        let message = '';
        if (err.error instanceof ErrorEvent) {
            message = err.error.message;
        }
        else {
            message = 'Servicio no disponible. Intente más tarde';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(message);
    }
};
PredialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PredialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PredialService);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es2015.js.map