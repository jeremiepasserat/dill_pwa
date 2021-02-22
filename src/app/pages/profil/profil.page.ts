import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {AuthService} from 'src/app/services/auth.service';
import {AlertService} from 'src/app/services/alert.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  // Décharge la page de profil
  dismissProfil() {
    this.modalController.dismiss();
  }
}
