import {Injectable} from '@angular/core';

/*Service gérant les différentes variables d'environnements */

@Injectable({providedIn: `root`})

export class EnvService {
  API_URL = '';
  constructor() { }
}
