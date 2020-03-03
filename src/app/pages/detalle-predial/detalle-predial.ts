import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Config, ActionSheetController, Platform, PopoverController } from '@ionic/angular'; 
import { Storage } from '@ionic/storage';
import { PredialService } from '../../services/predial.service';

import { DetallePredialPopoverPage } from '../detalle-predial-popover/detalle-predial-popover';


@Component({
  selector: 'page-detalle-predial',
  templateUrl: 'detalle-predial.html',
  styleUrls: ['./detalle-predial.scss'],
})
export class DetallePredialPage {
  ios: boolean;
  detallePredial: any;
  tiposUsoSuelo: any[];
  now = new Date(Date.now());

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private config: Config,
    private storage: Storage,
    private predialService: PredialService,
    private popoverController: PopoverController
  ) {

    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.detallePredial = this.router.getCurrentNavigation().extras.state.predial;


        this.detallePredial.openPredial = true;
        this.detallePredial.openBasura = true;
        this.detallePredial.openCatastral = true;
        this.detallePredial.predio.openPredio = true;

        if(this.detallePredial.adeudos.length > 0) {
          this.detallePredial.adeudos.forEach(element => {
            element.open = false;
          });
        }

        if(this.detallePredial.basura.length > 0) {
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

  getTipoUsoDeSuelo (idTipoUsoSuelo) {
    let desc = '';

    if(this.tiposUsoSuelo && this.tiposUsoSuelo.length > 0) {
      let result = this.tiposUsoSuelo.find(x => x.id === idTipoUsoSuelo);
      desc = result.nombre || "N/D";
    }
     
     return desc;
  }

  toggleCardPredio () {
    this.detallePredial.predio.openPredio = !this.detallePredial.predio.openPredio;
  }

  toggleCardPredial () {
    this.detallePredial.openPredial = !this.detallePredial.openPredial;
  }

  toggleCardBasura () {
    this.detallePredial.openBasura = !this.detallePredial.openBasura;
  }

  toggleCardCatastral () {
    this.detallePredial.openCatastral = !this.detallePredial.openCatastral;
  }

  togglePeriodoPredial(index) {
    this.detallePredial.adeudos[index].open = !this.detallePredial.adeudos[index].open;
  }

  togglePeriodoBasura(index) {
    this.detallePredial.basura[index].open = !this.detallePredial.basura[index].open;
  }


  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: DetallePredialPopoverPage,
      componentProps: { detallePredial: this.detallePredial },
      event: event
    });
    await popover.present();
  }

  /**
   * Mostrar detalle de adeudo de periódo 
   */
  mostrarDetallePredialDetallePeriodo(concepto: string, adeudoPeriodo: any) {
    
    console.log("Redirigiendo a detalles adeudo de periodo");

    let navigationExtras: NavigationExtras = {
      state: {
        concepto: concepto,
        adeudoPeriodo: adeudoPeriodo
      }
    }

    this.router.navigateByUrl('/app/tabs/predial/detalle-predial-detalle', navigationExtras);
  }

  /**
   * Abrir qr predial
   */
  pagarPredial() {
    
    console.log("Redirigiendo qr predial");

    let navigationExtras: NavigationExtras = {
      state: {
        detallePredial: this.detallePredial
      }
    }

    this.router.navigateByUrl('/app/tabs/predial/detalle-predial-qr', navigationExtras);
  }

}
