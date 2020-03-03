import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Config, ActionSheetController, Platform, PopoverController, AngularDelegate } from '@ionic/angular'; 
import { Storage } from '@ionic/storage';
import { RefrendoService } from '../../services/refrendo.service';

import { DetalleRefrendoPopoverPage } from '../detalle-refrendo-popover/detalle-refrendo-popover';


@Component({
  selector: 'detalle-refrendo',
  templateUrl: './detalle-refrendo.page.html',
  styleUrls: ['./detalle-refrendo.page.scss'],
})
export class DetalleRefrendoPage implements OnInit {

  ios: boolean;
  detalleRefrendo: any;
  now = new Date(Date.now());
  infracciones: any[] = [];

  infracccionesFake: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private config: Config,
    private storage: Storage,
    private refrendoService: RefrendoService,
    private popoverController: PopoverController
  ) { 

    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.detalleRefrendo = this.router.getCurrentNavigation().extras.state.refrendo;


        this.detalleRefrendo.vehiculo.open = true;
        this.detalleRefrendo.openTenencia = true;
        this.detalleRefrendo.openDonativo = true;
        this.detalleRefrendo.openInfracciones = true;

        this.detalleRefrendo.totalTenencia = 0;
        this.detalleRefrendo.totalInfracciones = 0;
        
        if(this.detalleRefrendo.tenenciaAnual.length > 0) {
          this.detalleRefrendo.tenenciaAnual.forEach(tenencia => {
            tenencia.open = false;
            this.detalleRefrendo.totalTenencia += tenencia.importeTotal;


            //#region Infracciones Fake
            this.infracccionesFake = [
              {
                numeroInfraccion: "ASD34",
                fecha: this.now,
                montoInfraccion: 1234.21
              },
              {
                numeroInfraccion: "Y4ER33",
                fecha: this.now,
                montoInfraccion: 345.12
              },
              {
                numeroInfraccion: "8795TRY",
                fecha: this.now,
                montoInfraccion: 4532.12
              }
            ];

            //tenencia.infracciones = Object.assign([], this.infracccionesFake);;
            //#endregion

            //#region Infracciones
            if(tenencia.infracciones) {
              tenencia.infracciones.forEach(infraccion => {
                this.infracciones.unshift(infraccion);
                this.detalleRefrendo.totalInfracciones += infraccion.montoInfraccion;
              });

              this.detalleRefrendo.infracciones = Object.assign([], this.infracciones);
            }
            //#endregion

          });
        }

        console.debug(this.detalleRefrendo);
      }
      
    });

  }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === 'ios';
  }

  ngOnInit() {
  }

  toggleInformacionVehicular() {
    this.detalleRefrendo.vehiculo.open = !this.detalleRefrendo.vehiculo.open;
  }

  toggleCardTenencia() {
    this.detalleRefrendo.openTenencia = !this.detalleRefrendo.openTenencia;
  }

  toggleTenenciaAnual(index) {
    this.detalleRefrendo.tenenciaAnual[index].open = !this.detalleRefrendo.tenenciaAnual[index].open;
  }

  toggleCardInfracciones () {
    this.detalleRefrendo.openInfracciones = !this.detalleRefrendo.openInfracciones;
  }

  toggleCardDonativo() {
    this.detalleRefrendo.openDonativo = !this.detalleRefrendo.openDonativo;
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: DetalleRefrendoPopoverPage,
      componentProps: { detalleRefrendo: this.detalleRefrendo },
      event: event
    });
    await popover.present();
  }

  /**
   * Abrir qr refrendo
   */
  pagarRefrendo() {
    
    console.log("Redirigiendo qr refrendo");

    let navigationExtras: NavigationExtras = {
      state: {
        detalleRefrendo: this.detalleRefrendo
      }
    }

    this.router.navigateByUrl('/app/tabs/refrendo/detalle-refrendo-qr', navigationExtras);
  }

}
