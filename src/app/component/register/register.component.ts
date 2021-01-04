import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../class/utilisateur";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  utilisateur:Utilisateur;
  u:Utilisateur;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private utilisateurService: UtilisateurService) {
    this.utilisateur=new Utilisateur();
    this.u=new Utilisateur();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.utilisateur.deleted=false;
    this.utilisateurService.save(this.utilisateur).subscribe(data => {
      this.Alert();
    });
  }

  Alert(){
    this.router.navigate(['/login']).then(() => {window.location.reload()});
    alert("Compte créer avec success!!!");
  }
}
