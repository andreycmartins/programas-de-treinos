import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ExploreContainerComponent],
})

export class Tab1Page {
  imagens = [
    '../../assets/treino1.jpg',
    '../../assets/treino2.jpg',
    '../../assets/treino3.jpg',
    '../../assets/treino4.jpg',
    '../../assets/treino5.jpg',
  ]

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Clicou 🗿',
    });

    await alert.present();
  }
}
