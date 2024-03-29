import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

// Estas sirven para ser utilizadas en cualquier parte de la api
export class UiServiceService {

  constructor( public alertController: AlertController ) {}

  async alertaInformativa( message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
