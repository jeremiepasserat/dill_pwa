import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  utilisateur: Utilisateur;

  constructor(private menu: MenuController, private authService: AuthService) {
    this.menu.enable(true);
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.authService.getutilisateur().subscribe(
      utilisateur => {
        this.utilisateur = utilisateur;
      }
    );
  }
}
