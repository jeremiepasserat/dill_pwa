import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {EnvService} from './env.service';
import {Utilisateur} from '../models/utilisateur';

/*Service gérant l'Autentification des utilisateurs */

/* A ADAPTER AVEC LE WS SPRINGBOOT DE JEREMIE :) */

@Injectable({providedIn: 'root'})

export class AuthService {
  isLoggedIn = false;
  token: any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) {
  }

  /*Connexion avec un système de token pour savoir si l'utilisateur est connecté ou pas*/
  // tslint:disable-next-line:ban-types
  connexion(pseudo: String, motDePasse: String) {
    return this.http.post(this.env.API_URL + 'auth/connexion',
      {pseudo, motDePasse}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
          .then(
            /*si le post est réussi*/
            () => {
              console.log('Le token est enregistré');
            },
            /*si le post echoue*/
            error => console.error('Erreur lors du stockage du token', error)
          );
        /*si la connexion est réussie :*/
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  /*création d'un nouvel utilisateur*/
  // tslint:disable-next-line:ban-types
  inscription(pseudo: String, nom: String, prenom: String, motDePasse: String, email: String) {
    return this.http.post(this.env.API_URL + 'auth/inscription',
      {pseudo, nom, prenom, motDePasse, email});
  }

  /*deconnexion des utilisateurs*/
  deconnexion() {
    const headers = new HttpHeaders(
      {Authorization: this.token.token_type + ' ' + this.token.access_token}
    );
    return this.http.get(this.env.API_URL + 'auth/deconnexion', {headers}).pipe(tap(data => {
        /*cela retire le token, et déconnecte l'utilisateur, pour lui permettre une reconnexion*/
        this.storage.remove('token');
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    );
  }

  /* récupère un Utilisateur*/
  getutilisateur() {
    const headers = new HttpHeaders({
      Authorization: this.token.token_type + ' ' + this.token.access_token
    });
    return this.http.get<Utilisateur>(this.env.API_URL + 'auth/utilisateur', {headers})
      .pipe(tap(utilisateur => utilisateur));
  }

  /* récupère un Token*/
  getToken() {
    return this.storage.getItem('token').then(
      /* si le token a été récupéré, alors l'utilisateur est connecté, sinon il est déconnecté*/
      data => {
        this.token = data;
        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }
}
