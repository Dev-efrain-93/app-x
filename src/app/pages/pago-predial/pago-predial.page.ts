import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'pago-predial',
  templateUrl: './pago-predial.page.html',
  styleUrls: ['./pago-predial.page.scss'],
})
export class PagoPredialPage implements OnInit {

  detallePredial: any;
  externalLink: any;
  secureExternalLink: any;
  iabOptions: InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'no',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only   
  }


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private inappbrowser: InAppBrowser
  ) {

    //#region Obtener detalles
    if(this.router.getCurrentNavigation().extras.state) {
      this.detallePredial = this.router.getCurrentNavigation().extras.state.detallePredial;
      console.log(this.detallePredial);
    }
    //#endregion

    this.externalLink = "https://ionicacademy.com/";
    this.secureExternalLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalLink);

   }

  ngOnInit() {
  }


  openUrlInAppBrowser() {
    const browser = this.inappbrowser.create('https://www.stackoverflow.com','_self', this.iabOptions);
  }

}
