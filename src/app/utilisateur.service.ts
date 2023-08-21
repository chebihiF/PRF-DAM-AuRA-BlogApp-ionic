import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private utilisateurs: Utilisateur[] = [
    {
      nom: "chebihi",
      email: 'chebihi@gmail.com'
    }
  ]

  getUtilisateur(){
    return this.utilisateurs[0];
  }

  constructor() { }
}
