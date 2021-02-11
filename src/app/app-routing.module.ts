import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  { path: 'accueil', loadChildren: './pages/accueil/accueil.module#AccueilPageModule' },
  { path: 'connexion', loadChildren: './pages/authentification/connexion/connexion.module#ConnexionPageModule' },
  { path: 'inscription', loadChildren: './pages/authentification/inscription/inscription.module#InscriptionPageModule' },

  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
