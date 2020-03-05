import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-list-header>
        <ion-label>Sitios de interés</ion-label>
      </ion-list-header>
      <ion-item button (click)="open('https://gitlab.com/explore')">
        <ion-label>GitLab</ion-label>
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
