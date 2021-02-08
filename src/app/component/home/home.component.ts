import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show: boolean = true;
  utilisateur: Utilisateur;

  constructor() {
    this.utilisateur = new Utilisateur();
  }

  ngOnInit(): void {
    this.isLoggedIn();
    if(this.utilisateur.id ==  "-1"){
      this.show = true;
    }
  }

  isLoggedIn() {
    if (localStorage.getItem("Utilisateur") === null || this.utilisateur.id ==  "-1") {
      this.show = true;
      this.utilisateur.id="-1";
      this.utilisateur.nom="";
      this.utilisateur.prenom="";
      this.utilisateur.isadmin=false;
      localStorage.setItem('Utilisateur', JSON.stringify(this.utilisateur));
    } else {
      this.show = false;
      this.utilisateur = JSON.parse(localStorage.getItem("Utilisateur"));
    }
  }
}
