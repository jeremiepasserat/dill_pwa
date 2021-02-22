import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController, NavController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import {InscriptionPage} from '../authentification/inscription/inscription.page';
import {ConnexionPage} from '../authentification/connexion/connexion.page';
import {ProfilPage} from '../profil/profil.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  utilisateur: Utilisateur;

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private modalController: ModalController
  ) {
    this.menu.enable(true);
  }

  ngOnInit() {

  }

  async profil() {
    const profilModal = await this.modalController.create({
      component: ProfilPage,
    });
    return await profilModal.present();
  }

  ionViewWillEnter() {
    this.authService.getutilisateur().subscribe(
      utilisateur => {
        this.utilisateur = utilisateur;
      }
    );
  }
}
