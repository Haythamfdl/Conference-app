import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  show: boolean = false;
  isadmin: boolean = false;
  utilisateur: Utilisateur;
  title = 'Gestion Conférences';

  constructor(private route: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      const c = changes[prop];
      const cc = JSON.stringify(c.currentValue);
      const pc = JSON.stringify(c.previousValue);
      if (cc !== pc)
        this.isLoggedIn();
    }
  }

  loggOut() {
    localStorage.removeItem('Utilisateur');
    this.router.navigate(['/']).then(() => {
      window.location.reload()
    });
  }

  isLoggedIn() {
    if (localStorage.getItem("Utilisateur") === null) {
      this.show = true;
    } else {
      this.show = false;
      this.utilisateur = JSON.parse(localStorage.getItem("Utilisateur"));
      this.isadmin = this.utilisateur.isadmin;
      if(this.utilisateur.id =="-1"){
        this.show = true;
      }
    }
  }
}
