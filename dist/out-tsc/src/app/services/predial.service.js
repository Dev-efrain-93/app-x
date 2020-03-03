import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AppConfig } from '../app.config';
import { catchError } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
const appConfig = AppConfig();
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
            .pipe(catchError(this.fnError));
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
        return throwError(message);
    }
};
PredialService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], PredialService);
export { PredialService };
//# sourceMappingURL=predial.service.js.map