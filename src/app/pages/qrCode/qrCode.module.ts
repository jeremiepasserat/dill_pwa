import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrCodePage } from './qrCode.page';
import { ProfilPage} from '../profil/profil.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodePage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [QrCodePage, ProfilPage],
  entryComponents: [ProfilPage]
})
export class QrCodePageModule {}
