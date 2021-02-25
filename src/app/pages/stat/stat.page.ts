import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import {ProfilPage} from '../profil/profil.page';

@Component({
  selector: 'app-menu',
  templateUrl: './stat.page.html',
  styleUrls: ['./stat.page.scss'],
})

export class StatPage implements OnInit {

  utilisateur: Utilisateur;

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private modalController: ModalController
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {

  }

  async profil() {
    const profilModal = await this.modalController.create({
      component: ProfilPage,
    });
    return await profilModal.present();
  }
}
