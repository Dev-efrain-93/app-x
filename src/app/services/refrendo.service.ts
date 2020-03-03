import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppOptions, AppConfig } from '../app.config'; 
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' 
  })
}

const appConfig: AppOptions = AppConfig();


@Injectable({
  providedIn: 'root'
})
export class RefrendoService {

  constructor(
    private http: HttpClient
  ) {

   }

  /**
   * Consultar refrendo vehicular
   * @param placa Placa del vehiculo
   * @param serie Numero de serie del vehiculo
   */
   obtenerRefrendoVehicular(placa?: string, serie?: string) {

    return this.http.get(`${appConfig.apiOrigin}sit-movil/tenencia?placa=${placa}&serie=${serie}`, httpOptions)
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
