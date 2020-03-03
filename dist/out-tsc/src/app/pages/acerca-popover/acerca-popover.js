import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
let AcercaPopoverPage = class AcercaPopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    open(url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    }
};
AcercaPopoverPage = tslib_1.__decorate([
    Component({
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
    tslib_1.__metadata("design:paramtypes", [PopoverController])
], AcercaPopoverPage);
export { AcercaPopoverPage };
//# sourceMappingURL=acerca-popover.js.map