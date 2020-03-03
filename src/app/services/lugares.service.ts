import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppOptions, AppConfig } from '../app.config'; 

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' 
  })
}

const appConfig: AppOptions = AppConfig();

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(
    private http: HttpClient
  ) {

   }

   /**
   * Obtener catálogo municipios
   */
  getMunicipios() {
    return [
      {
        id: 1,
        nombre: "Calkiní",
        lat: 20.3708555,
        lng: -90.05046829999998
      },
      {
        id: 2,
        nombre: "Campeche",
        lat: 19.830125,
        lng: -90.5349086111111
      },
      {
        id: 3,
        nombre: "Carmen",
        lat: 18.6504879,
        lng: -91.80745860000002
      },
      {
        id: 4,
        nombre: "Champotón",
        lat: 19.3471645,
        lng: -90.72002370000001
      },
      {
        id: 5,
        nombre: "Hecelchakán",
        lat: 20.1819021,
        lng: -90.13545859999999
      },
      {
        id: 6,
        nombre: "Hopelchén",
        lat: 19.7472419,
        lng: -89.84246439999998
      },
      {
        id: 7,
        nombre: "Palizada",
        lat: 18.2545777,
        lng: -92.09147989999997
      },
      {
        id: 8,
        nombre: "Tenabo",
        lat: 20.0409674,
        lng: -90.22555190000003
      },
      {
        id: 9,
        nombre: "Escárcega",
        lat: 18.6101834,
        lng: -90.73902450000003
      },
      {
        id: 10,
        nombre: "Calakmul",
        lat: 18.5054461,
        lng: -89.3935247
      },
      {
        id: 11,
        nombre: "Candelaria",
        lat: 18.1845319,
        lng: -91.0418568
      } 
    ];
  }

  /**
   * Modulos de pago prueba
   */
  getLugaresPrueba() {
    return [
      {
        IdMunicipio: 2,//campeche
        Nombre: "SEAFI Campeche",
        Direccion: "Calle 49-C o Circuito Baluartes N° 39 entre Calle Ciriaco Vázquez, Barrio de Guadalupe, Zona Centro, 24000 Campeche, Camp.",
        Servicios: "Servicios Financieros Campeche",
        Horario: "Lunes a Viernes de 8:00 a 16:00",
        Lat: 19.8455045,
        Lng: -90.5353135
      },
      {
        IdMunicipio: 2,//campeche
        Nombre: "Servicio De Administración Fiscal",
        Direccion: "Calle 49C 39, Barrio de Guadalupe, 24010 Campeche, Camp.",
        Servicios: "Servicios Financieros Campeche",
        Horario: "Lunes a Viernes de 8:00 a 16:00",
        Lat: 19.8439067,
        Lng: -90.5346504
      },
      {
        IdMunicipio: 2,//campeche
        Nombre: "Secretaría de Finanzas Campeche",
        Direccion: "Calle 8, Zona Centro, 24000 Campeche, Camp.",
        Servicios: "Servicios Financieros Campeche",
        Horario: "Lunes a Viernes de 8:00 a 20:00",
        Lat: 19.840483, 
        Lng: -90.536803
      },
      {
        IdMunicipio: 2,//campeche
        Nombre: "Secretaría de Administración e Innovación Gubernamental",
        Direccion: "Calle 8 325, Zona Centro, 24000 Campeche, Camp.",
        Servicios: "Servicios Financieros Campeche",
        Horario: "Lunes a Viernes de 8:00 a 16:00",
        Lat: 19.8451439,
        Lng: -90.5420417
      },
      {
        IdMunicipio: 4,//champoton
        Nombre: "SECRETARIA DE FINANZAS OFICINA RECAUDADORA",
        Direccion: "Calle 1 #17, Venustiano Carranza, 24400 Champotón, Camp.",
        Servicios: "Servicios Financieros Campeche",
        Horario: "Lunes a Viernes de 8:00 a 14:30",
        Lat: 19.356353,
        Lng: -90.723960
      },
      {
        IdMunicipio: 1,//calkini
        Nombre: "Palacio Municipal de Calkini",
        Direccion: "S/N, entre y, Calle 17 & Calle 20, Centro, Calkiní, Camp.",
        Servicios: "Servicios Financieros Campeche",
        Horario: "Lunes a Viernes de 8:00 a 14:30",
        Lat: 20.3704588,
        Lng: -90.0581788
      }
    ];
  }
}
