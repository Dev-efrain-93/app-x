import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { PredialService } from '../../services/predial.service';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { ToastService } from '../../services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-predial',
  templateUrl: 'predial.html',
  styleUrls: ['./predial.scss'],
})

export class PredialPage implements OnInit {
  
  predial: any;
  enviado = false;
  municipios: any[];
  formularioConsultaPredial: FormGroup;
  mensajesValidacion: any;
  customActionSheetOptions: any = {
    //header: 'Municipios'
  };

  consultasPredial: any[]= [];

  consultaPredialPrueba: any;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private predialService: PredialService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private storage: Storage
  ) {
    
  }

  public ionViewDidEnter() {
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
      municipio: ['', Validators.required],
      numeroCuenta: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^$|^[A-Za-z0-9]+$')
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
    }
  }

  consultaPredialFake(municipio?: any, cuenta?:any) {

    console.log("Ejecutando consulta predial fake");

    this.enviado = true;

    if(!(municipio && cuenta)) {
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

    let slicedArray = this.consultasPredial.slice(0,5);
    this.storage.set('consultasPredial', slicedArray);
    //#endregion

    let navigationExtras: NavigationExtras = {
      state: {
        predial: this.predial
      }
    }

    this.router.navigateByUrl('/app/tabs/predial/detalle-predial', navigationExtras);
    
  }

  ejecutarConsultaRecienteFake(consulta: any) {

    console.log("Ejecutando consulta reciente fake");

    if(consulta.data.predio.codigoMunicipio === 0 || consulta.data.predio.numeroCuenta === "") {
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
  consultarPredial(municipio?: any, cuenta?:any) {
    this.enviado = true;

    if(!(municipio && cuenta)) {
      if (this.formularioConsultaPredial.invalid) {
        this.toastService.present("Proporcione correctamente los datos solicitados");
        return;
      }
    }

    this.loadingService.present();
    let _municipio = municipio || this.formularioConsultaPredial.value['municipio'];
    let _cuenta = cuenta || this.formularioConsultaPredial.value['numeroCuenta'];

    this.predialService.obtenerPredial(_municipio, _cuenta).subscribe((response) => {
      
      if(response) {
        this.predial = response;
        this.loadingService.dismiss();

        //#region Almacenar consulta como reciente
        let now = new Date(Date.now());

        this.consultasPredial.unshift({
          municipio: this.municipios.find(ele => ele.id == this.predial.predio.codigoMunicipio) || "",
          date: now,
          data: this.predial
        });
    
        let slicedArray = this.consultasPredial.slice(0,5);
        this.storage.set('consultasPredial', slicedArray);
        //#endregion

        let navigationExtras: NavigationExtras = {
          state: {
            predial: this.predial
          }
        }

        this.router.navigateByUrl('/app/tabs/predial/detalle-predial', navigationExtras);
      } else {
        this.toastService.present("No se encontro un predio");
        this.loadingService.dismiss();
      }

    }, (err)=> {
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
    }, 
    err => {
      console.log(err);
      this.toastService.present(err);
    });
  }

  /**
   * Ejecutar consulta reciente con sus datos
   * @param consulta 
   */
  ejecutarConsultaReciente(consulta: any) {

    if(consulta.data.predio.codigoMunicipio === 0 || consulta.data.predio.numeroCuenta === "") {
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
}
