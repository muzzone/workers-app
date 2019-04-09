import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  success(message) {
    this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'success'
    }).then(t => t.present());
  }

  error(message) {
    this.toastController.create({
      message: message || 'Something went wrong!',
      duration: 5000,
      position: 'top',
      color: 'danger'
    }).then(t => t.present());
  }
}
