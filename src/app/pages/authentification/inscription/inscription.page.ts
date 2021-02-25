import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ConnexionPage } from '../connexion/connexion.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private modalController: ModalController,
              private authService: AuthService,
              private navCtrl: NavController,
              private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  // Décharge la page d'inscription
  dismissInscription() {
    this.modalController.dismiss();
  }

  // Quand on presse le bouton connexion, décharge la page d'inscription et ouvre la page de connexion
  async connexionModal() {
    this.dismissInscription();
    const connexionModal = await this.modalController.create({
      component: ConnexionPage,
    });
    return await connexionModal.present();
  }

  inscription(form: NgForm) {
    this.authService.inscription(form.value.pseudo, form.value.nom, form.value.prenom, form.value.motDePasse, form.value.email).subscribe(
      (message) => {
        this.authService.connexion(form.value.pseudo, form.value.motDePasse).subscribe(
          data => {
          },
          error => {
            console.log(error);
          },
          () => {
            this.dismissInscription();
            this.navCtrl.navigateRoot('/accueil');
          }
        );
        this.alertService.presentToast(message);
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );
  }
}
