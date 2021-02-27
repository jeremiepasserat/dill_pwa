import {Component, OnInit} from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import {AuthService} from 'src/app/services/auth.service';
import {Utilisateur} from 'src/app/models/utilisateur';
import {ProfilPage} from '../profil/profil.page';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon, L } from 'leaflet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './commu.page.html',
  styleUrls: ['./commu.page.scss'],
})

export class CommuPage implements OnInit {
  map: L.Map;
  utilisateur: Utilisateur;

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private modalController: ModalController,
    private plt: Platform,
    private router: Router
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.initMap();
    });
  }

  async profil() {
    const profilModal = await this.modalController.create({
      component: ProfilPage,
    });
    return await profilModal.present();
  }

  initMap(){
     this.map = new Map('map').setView([33.6396965, -84.4304574], 8);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

    setTimeout(()=>{
      this.map.invalidateSize();
    });

  }
}
