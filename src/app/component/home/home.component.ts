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
  }

  isLoggedIn() {
    if (localStorage.getItem("Utilisateur") === null) {
      this.show = true;
      this.utilisateur.isadmin=false;
      localStorage.setItem('Utilisateur', JSON.stringify(this.utilisateur));
    } else {
      this.show = false;
      this.utilisateur = JSON.parse(localStorage.getItem("Utilisateur"));
    }
  }
}
