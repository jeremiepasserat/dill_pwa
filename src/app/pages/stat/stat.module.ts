import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {StatPage} from './stat.page';
import {ProfilPage} from '../profil/profil.page';

const routes: Routes = [
  {
    path: '',
    component: StatPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [StatPage, ProfilPage],
  entryComponents: [ProfilPage]
})
export class StatPageModule {}
