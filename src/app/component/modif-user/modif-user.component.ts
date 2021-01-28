import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../service/utilisateur.service";
import {element} from "protractor";

@Component({
  selector: 'app-modif-user',
  templateUrl: './modif-user.component.html',
  styleUrls: ['./modif-user.component.css']
})
export class ModifUserComponent implements OnInit {
  utilisateur:Utilisateur;
  u:Utilisateur;
  pass:string;
  email:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private utilisateurService: UtilisateurService) {
    this.utilisateur=new Utilisateur();
    this.u=new Utilisateur();
  }

  ngOnInit(): void {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.email=this.utilisateur.email;
  }

  onSubmit(){
    this.utilisateurService.login(this.u.email,this.pass).subscribe(data => {
        this.u=data;
    });
    if(this.u === null) {
      alert("Le mot de passe est incorrect !!!")
    }
    else {
      this.utilisateurService.update(this.utilisateur).subscribe(data => {
        this.Alert();
      });
    }
  }

  Delete(){
    if(confirm("Etes-vous sûr de vouloir supprimer votre Compte !!!")){
      this.utilisateur.deleted=true;
      this.utilisateurService.update(this.utilisateur).subscribe();
      localStorage.removeItem('Utilisateur');
      this.router.navigate(['/login']).then(() => {window.location.reload()});
      alert("Votre Compte a été supprimer avec success!!!");
    }
  }

  Alert(){
    localStorage.setItem('Utilisateur',JSON.stringify(this.utilisateur));
    this.router.navigate(['/']).then(() => {window.location.reload()});
    alert("Votre Compte a été modifier avec success!!!");
  }
}
