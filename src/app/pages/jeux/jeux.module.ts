import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {JeuxPage} from './jeux.page';
import {ProfilPage} from '../profil/profil.page';

const routes: Routes = [
  {
    path: '',
    component: JeuxPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [JeuxPage, ProfilPage],
  entryComponents: [ProfilPage]
})
export class JeuxPageModule {}
