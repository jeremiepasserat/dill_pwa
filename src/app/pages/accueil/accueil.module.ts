import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccueilPage } from './accueil.page';
import { ConnexionPage } from '../authentification/connexion/connexion.page';
import { InscriptionPage } from '../authentification/inscription/inscription.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AccueilPage, ConnexionPage, InscriptionPage],
  entryComponents: [ConnexionPage, InscriptionPage]
})
export class AccueilPageModule {}
