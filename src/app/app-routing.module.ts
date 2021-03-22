import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'accueil', loadChildren: './pages/accueil/accueil.module#AccueilPageModule'},
  {path: 'connexion', loadChildren: './pages/authentification/connexion/connexion.module#ConnexionPageModule'},
  {path: 'inscription', loadChildren: './pages/authentification/inscription/inscription.module#InscriptionPageModule'},
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
  {path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  {path: 'profil', loadChildren: './pages/profil/profil.module#ProfilPageModule'},
  {path: 'jeux', loadChildren: './pages/jeux/jeux.module#JeuxPageModule'},
  {path: 'stat', loadChildren: './pages/stat/stat.module#StatPageModule'},
  {path: 'carte', loadChildren: './pages/communaute/commu.module#CommuPageModule'},
  {path: 'qrCode', loadChildren: './pages/qrCode/qrCode.module#QrCodePageModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
