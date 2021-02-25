import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CommuPage} from './commu.page';
import {ProfilPage} from '../profil/profil.page';

const routes: Routes = [
  {
    path: '',
    component: CommuPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [CommuPage, ProfilPage],
  entryComponents: [ProfilPage]
})
export class CommuPageModule {
}
