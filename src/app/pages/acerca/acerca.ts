import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { AcercaPopoverPage } from '../acerca-popover/acerca-popover';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
  styleUrls: ['./acerca.scss'],
})
export class AcercaPage {
  appName: string;
  versionNumber: string;

  constructor(
    public popoverCtrl: PopoverController,
    private storage: Storage,
    private router: Router,
    private appVersion: AppVersion
    ) {

      this.appVersion.getAppName().then(value => {
        this.appName = value;
      }).catch(err => {
        console.log(err);
        this.appName = 'SEFIN Móvil';
      });

      this.appVersion.getVersionNumber().then(value => {
        this.versionNumber = value;
      }).catch(err => {
        console.log(err);
        this.versionNumber = '0.0.0';
      });
    }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: AcercaPopoverPage,
      event: event
    });
    await popover.present();
  }

  openTutorial() {
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
