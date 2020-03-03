import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config, IonSlides } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';  

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  styleUrls: ['./inicio.scss'],
})
export class InicioPage implements OnInit {
  slideOptions = {
    initialSlide: 0,
    speed: 700,
    autoplay: {
      disableOnInteraction: false,
      reverseDirection: false
    },
    direction: 'vertical',
    centeredSlides: true,
    loop: true,
    preloadImages: true,
    lazy: false
  };


  slideItems = [];

  @ViewChild('homeSlides', { static: true }) slides: IonSlides;

  now = new Date(Date.now());
  greetting = '';
  showToolbar = false;

  ios: boolean;
  excludeTracks: any = [];

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public config: Config
  ) { 

    this.slideItems = [
      {
        title: "¡Bienvenido!",
        description: "Realiza el pago de tus <b>impuestos</b> estés donde estés, conectándote desde tu dispositivo móvil.",
        image: "assets/img/slides/slide-01.jpg",
        color: "primary",
        hexColor: "#009EE3"
      },
      {
        title: "¡Que puedes hacer?",
        description: "Realiza el presupuesto a pagar de tu <b>predial</b> o <b>refrendo (vehicular)</b> y paga en unos sencillos pasos.",
        image: "assets/img/slides/slide-02.jpg",
        color: "tertiary",
        hexColor: "#7044ff"
      },
      {
        title: "¿Donde pagar?",
        description: "O si lo prefieres, ubica los módulos instalados, consulta sus horarios de atención y acude personalmente para realizar tu pago oportuno.",
        image: "assets/img/slides/slide-03.jpg",
        color: "secondary",
        hexColor: "#17a2b8"
      },
      {
        title: "Ingresa",
        description: "Que esperas para conocer los beneficios exclusivos, métodos de pago, información sobre tu predial, refrendo y más.",
        image: "assets/img/slides/slide-04.jpg",
        color: "success",
        hexColor: "#03a863"
      }
    ];

    console.debug("Hora actual: " + this.now.getHours());
    console.log("Hora actual: " + this.now.getHours());
    if(this.now.getHours() < 12) {
      this.greetting = 'Buenos días'
    }else if(this.now.getHours() >= 12 && this.now.getHours() < 18){
      this.greetting = 'Buenas tardes'
    }else if(this.now.getHours() >= 18 && this.now.getHours() <= 24) {
      this.greetting = 'Buenas noches'
    }

  }


  ngOnInit() {

    this.ios = this.config.get('mode') === 'ios';
  }

  //Fix: detiene la reproducción automática del slide cuando se sale de la vista
  public ionViewWillLeave() {
    this.slides.stopAutoplay();
  }

  //Fix: inicia la reproducción automática del slide cuando se ingresa a la vista
  public ionViewDidEnter() {
    this.slides.startAutoplay();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }

  async onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      
      if(scrollTop >= 250) {
        this.showToolbar = true;
      }else {
        this.showToolbar = false;
      }
    }
  }

  /**
   * Ver lugares de pago
   */
  verLugaresPago() {
    this.router.navigateByUrl('/lugares');
  }
  
}
