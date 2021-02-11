import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {InscriptionPage} from '../inscription/inscription.page';
import {NgForm} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {AlertService} from 'src/app/services/alert.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  // Décharge la page de connexion
  dismissConnexion() {
    this.modalController.dismiss();
  }

  // Quand on presse le bouton inscription, décharge la page de connexion et ouvre la page d'inscription
  async inscriptionModal() {
    this.dismissConnexion();
    const inscriptionModal = await this.modalController.create({
      component: InscriptionPage
    });
    return await inscriptionModal.present();
  }

  connexion(form: NgForm) {
    this.authService.connexion(form.value.pseudo, form.value.motDePasse).subscribe(
      data => {
        this.alertService.presentToast('Logged In');
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissConnexion();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }
}
