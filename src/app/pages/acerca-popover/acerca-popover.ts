import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
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
})
export class AcercaPopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  open(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
