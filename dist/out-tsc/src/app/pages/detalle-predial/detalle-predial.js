import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PredialService } from '../../services/predial.service';
import { DetallePredialPopoverPage } from '../detalle-predial-popover/detalle-predial-popover';
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
    presentPopover(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: DetallePredialPopoverPage,
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
};
DetallePredialPage = tslib_1.__decorate([
    Component({
        selector: 'page-detalle-predial',
        templateUrl: 'detalle-predial.html',
        styleUrls: ['./detalle-predial.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        Config,
        Storage,
        PredialService,
        PopoverController])
], DetallePredialPage);
export { DetallePredialPage };
//# sourceMappingURL=detalle-predial.js.map