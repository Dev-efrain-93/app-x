import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController, AlertController, ModalController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import { ToastService } from './services/toast.service';

import { NetworkService, ConnectionStatus } from './services/network.service';

import { ErrorConexionPage } from '../app/pages/error-conexion/error-conexion'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Inicio',
      url: '/app/tabs/inicio',
      icon: 'home'
    },
    {
      title: 'Predial',
      url: '/app/tabs/predial',
      icon: 'compass'
    },
    {
      title: 'Refrendo',
      url: '/app/tabs/refrendo',
      icon: 'logo-model-s'
    },
    {
      title: 'Acerca de',
      url: '/app/tabs/acerca',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  dark = false;
  modalConnectionError: any;
  toastConnectionError: any;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private toastService: ToastService,
    private alertController: AlertController,
    private networkService: NetworkService,
    private modalController: ModalController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Actualización disponible!',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: `Reiniciar`
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString("#00A680");//primary
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      setTimeout(()=> {
        this.networkService.onNetworkChange().subscribe((status: ConnectionStatus)=> {
          if(status == ConnectionStatus.Offline) {
            let message = "Error de conexión, revisa tu configuración de red";
            console.log(message);
            //this.toastService.info(message);
            this.openModalNetworkConnectionError();
            //this.presentToastConnectionError(message)
            this.statusBar.backgroundColorByHexString("#E33F55");//danger
          }
  
          if(status == ConnectionStatus.Online) {
            let message = "Conexión de red reestablecida";
            console.log(message);
            //this.toastService.info(message);
            this.closeModalNetworkError();
            //this.closeToastConnectionError();
            this.statusBar.backgroundColorByHexString("#00A680");//primary
          }
        });
      }, 5000);

    });
    
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }

  closeMenu() {
    this.menu.close();
  }

  /**
   * Abrir modal error de red
   */
  async openModalNetworkConnectionError() {
    this.modalConnectionError = await this.modalController.create({
      component: ErrorConexionPage,
    });
    await this.modalConnectionError.present();
  }

  /**
   * Cerrar modal error de red
   */
  async closeModalNetworkError() {
    if(this.modalConnectionError) {
      if(this.modalConnectionError.isConnected) {
        await this.modalController.dismiss();
      }
    }
  }

  /**
   * Abrir mensaje error de red
   */
  async presentToastConnectionError(message: string) {
    this.toastConnectionError = await this.toastCtrl.create({
      message: message,
      animated: true,
      position: 'top',
      cssClass: 'custom-bottom-toast'
    });
    this.toastConnectionError.present();
  }

  /**
   * Cerrar mensaje error de red
   */
  async closeToastConnectionError() {
    if(this.toastConnectionError) {
      if(this.toastConnectionError.isConnected) {
        await this.toastCtrl.dismiss();
      }
    }
  }
}
