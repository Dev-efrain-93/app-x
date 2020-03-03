import { AfterViewInit, Component } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';

import { StatusBar } from  '@ionic-native/status-bar/ngx';


@Component({
  selector: 'page-error-conexion',
  templateUrl: 'error-conexion.html',
  styleUrls: ['./error-conexion.scss'],
})
export class ErrorConexionPage implements AfterViewInit {
  ios: boolean;

  tracks: {name: string, icon: string, isChecked: boolean}[] = [];

  constructor(
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {
    
  }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;
  }

  // TODO use the ionViewDidEnter event
  ngAfterViewInit() {
  }


  cerrar() {
    this.modalCtrl.dismiss();
  }
}
