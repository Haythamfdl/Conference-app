import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";
import {HotelService} from "../../service/hotel.service";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur:Utilisateur;
  u:Utilisateur;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private utilisateurService: UtilisateurService) {
    this.utilisateur=new Utilisateur();
  }
  onSubmit(){
    this.utilisateurService.login(this.utilisateur.email,this.utilisateur.pass).subscribe(data => {
      this.utilisateur = data;
      this.Alert();
    });
  }

  Alert() {
    if(this.utilisateur == null){
      alert("Email ou mots de passe incorrecte");
      localStorage.removeItem('Utilisateur');
    }
    else {
      localStorage.setItem('Utilisateur',JSON.stringify(this.utilisateur));
      console.log(localStorage.getItem("Utilisateur"));
      this.router.navigate(['/']);
      alert("Vous êtes connecter");
    }

  }
  ngOnInit(): void {
    if(localStorage.getItem("Utilisateur") === null){
      console.log("local doesnt exist");
    }
    else{
      console.log(localStorage.getItem("Utilisateur"));
    }
  }

}
