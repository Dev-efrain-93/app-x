import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let DetallePredialDetallePage = class DetallePredialDetallePage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.concepto = this.router.getCurrentNavigation().extras.state.concepto;
                this.detalleAdeudo = this.router.getCurrentNavigation().extras.state.adeudoPeriodo;
                console.debug(this.detalleAdeudo);
            }
        });
    }
    ngOnInit() {
    }
};
DetallePredialDetallePage = tslib_1.__decorate([
    Component({
        selector: 'detalle-predial-detalle',
        templateUrl: './detalle-predial-detalle.page.html',
        styleUrls: ['./detalle-predial-detalle.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute])
], DetallePredialDetallePage);
export { DetallePredialDetallePage };
//# sourceMappingURL=detalle-predial-detalle.page.js.map