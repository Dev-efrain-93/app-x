import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async info(message) {
    await this.toastController.create({
      message: message,
      duration: 3000,
      animated: true,
      showCloseButton: true,
      closeButtonText: "Ok",
      position: "bottom"
    }).then((obj) => {
      obj.present();
    });
  }
 
  present(message){
    this.toastController.dismiss().then((obj)=>{
    }).catch(()=>{
    }).finally(()=>{
      this.info(message);
    });
  }
}
