import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { StatusBar } from  '@ionic-native/status-bar/ngx';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;
  colorTheme= "primary";
  //colorStatusBar= "#3880ff";//primary
  colorStatusBar = "#00A680"; //primary

  slideOptions = {
    initialSlide: 0,
    autoplay: false
  };

  tutorialSlideItems = [];

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public statusBar: StatusBar
  ) {

    this.tutorialSlideItems = [
      {
        title: "¡Bienvenido!",
        description: "Realiza el pago de tus <b>impuestos</b> estés donde estés, conectándote desde tu dispositivo móvil.",
        image: "assets/img/ica-slidebox-img-1.png",
        color: "primary",
        hexColor: "#00A680"
      },
      {
        title: "¡Que puedes hacer?",
        description: "Realiza el presupuesto a pagar de tu <b>predial</b> o <b>refrendo (vehicular)</b> y paga en unos sencillos pasos.",
        image: "assets/img/ica-slidebox-img-3.png",
        color: "tertiary",
        hexColor: "#adc22e"
      },
      {
        title: "¿Donde pagar?",
        description: "O si lo prefieres, ubica los módulos instalados, consulta sus horarios de atención y acude personalmente para realizar tu pago oportuno.",
        image: "assets/img/ica-slidebox-img-2.png",
        color: "secondary",
        hexColor: "#0b6d54"
      },
      {
        title: "Ingresa",
        description: "Que esperas para conocer los beneficios exclusivos, métodos de pago, información sobre tu predial, refrendo y más.",
        image: "assets/img/ica-slidebox-img-4.png",
        color: "danger",
        hexColor: "#E33F55"
      }
    ];
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/inicio', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));

    //this.colorStatusBar = "#3880ff";//primary
    this.colorStatusBar = "#00A680"; //primary
    this.statusBar.backgroundColorByHexString(this.colorStatusBar);
    this.statusBar.styleLightContent();
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
      this.slides.getActiveIndex().then(index => {
        console.log("Active index: " + index);
        let idx = index || 0;
        this.colorTheme = this.tutorialSlideItems[idx].color || "primary";
        this.colorStatusBar = this.tutorialSlideItems[idx].hexColor || "#00A680";
        this.statusBar.backgroundColorByHexString(this.colorStatusBar);
        this.statusBar.styleLightContent();
      });
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/inicio', { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
