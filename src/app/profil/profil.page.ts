import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur.model';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  utilisateur: Utilisateur = {nom: '', email: ''}

  constructor(private utilisateurService: UtilisateurService) { }

  ionViewWillEnter(){
    this.utilisateur = this.utilisateurService.getUtilisateur()
  }

  ngOnInit() {
  }

}
