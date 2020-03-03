import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'detalle-predial-detalle',
  templateUrl: './detalle-predial-detalle.page.html',
  styleUrls: ['./detalle-predial-detalle.page.scss'],
})
export class DetallePredialDetallePage implements OnInit {

  concepto: string;
  detalleAdeudo: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.concepto = this.router.getCurrentNavigation().extras.state.concepto;
        this.detalleAdeudo = this.router.getCurrentNavigation().extras.state.adeudoPeriodo;
        console.debug(this.detalleAdeudo);
      }
      
    });
   }

  ngOnInit() {
  }

}
