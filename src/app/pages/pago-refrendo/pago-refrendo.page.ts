import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'pago-refrendo',
  templateUrl: './pago-refrendo.page.html',
  styleUrls: ['./pago-refrendo.page.scss'],
})
export class PagoRefrendoPage implements OnInit {

  detalleRefrendo: any;
  externalLink: any;
  secureExternalLink: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {

    //#region Obtener detalles
    if(this.router.getCurrentNavigation().extras.state) {
      this.detalleRefrendo = this.router.getCurrentNavigation().extras.state.detalleRefrendo;
      console.log(this.detalleRefrendo);
    }
    //#endregion

    this.externalLink = "https://ionicacademy.com/";
    this.secureExternalLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalLink);

   }

  ngOnInit() {
  }

}
