import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur: Utilisateur;
  u: Utilisateur;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private utilisateurService: UtilisateurService) {
    this.utilisateur = new Utilisateur();
  }

  onSubmit() {
    this.utilisateurService.login(this.utilisateur.email, this.utilisateur.pass).subscribe(data => {
      this.utilisateur = data;
      this.Alert();
    });
  }

  Alert() {
    if (this.utilisateur == null) {
      this.utilisateur = new Utilisateur();
      alert("Email ou mots de passe incorrecte");
      localStorage.removeItem('Utilisateur');
    } else {
      localStorage.setItem('Utilisateur', JSON.stringify(this.utilisateur));
      this.router.navigate(['/']).then(() => {
        window.location.reload()
      });
      alert("Vous êtes connecter");
    }

  }

  ngOnInit(): void {

  }

}
