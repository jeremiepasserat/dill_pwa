import {Component, OnInit} from '@angular/core';
import {ModalController, MenuController, NavController} from '@ionic/angular';
import {InscriptionPage} from '../authentification/inscription/inscription.page';
import {ConnexionPage} from '../authentification/connexion/connexion.page';
import {AuthService} from 'src/app/services/auth.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
  ) {
    this.menu.enable(false);
  }

  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        this.navCtrl.navigateRoot('/dashboard');
      }
    });
  }

  ngOnInit() {
    debugger;
    console.log('coin');
  }

  async inscription() {
    const inscriptionModal = await this.modalController.create({
      component: InscriptionPage
    });
    return await inscriptionModal.present();
  }

  async connexion() {
    const connexionModal = await this.modalController.create({
      component: ConnexionPage,
    });
    return await connexionModal.present();
  }
}
