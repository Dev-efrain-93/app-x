import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppOptions, AppConfig } from '../app.config'; 
import { map, retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' 
  })
}

const appConfig: AppOptions = AppConfig();

@Injectable({
  providedIn: 'root'
})

export class PredialService {

  public consultasPredial: any;

  constructor(
    private http: HttpClient
    ) { }

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
    getTipoUsoSuelo () {
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
   obtenerPredial(idMunicipio: number, numeroCuenta: string) {

    return this.http.get(`${appConfig.apiOrigin}sit-movil/predial?idMunicipio=${idMunicipio}&numeroCuenta=${numeroCuenta}`, httpOptions)
    .pipe(
      catchError(this.fnError)
    );
   }


  /**
  * FnError
  * @param err 
  */
  fnError(err: HttpErrorResponse) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    }else {
      message = 'Servicio no disponible. Intente más tarde';
    }

    return throwError(message);
  }

}

