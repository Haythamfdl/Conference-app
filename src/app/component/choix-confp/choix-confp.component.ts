import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";

@Component({
  selector: 'app-choix-confp',
  templateUrl: './choix-confp.component.html',
  styleUrls: ['./choix-confp.component.css']
})
export class ChoixConfpComponent implements OnInit {
  utilisateur: Utilisateur;
  conferences: Conference[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private confserv: ConferenceService) {
  }

  ngOnInit(): void {
    localStorage.removeItem('Conference');
    this.utilisateur = JSON.parse(localStorage.getItem("Utilisateur"));
    if (this.utilisateur == null) {
      this.router.navigate(['/login']).then(() => {
        window.location.reload()
      });
    } else {
      this.confserv.findAll().subscribe(data => {
        this.conferences = data;
      });
    }
  }

  Modifier(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/mconferences']).then();
  }

  Info(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/conference']).then();
  }

  Papier(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/recpapier']).then(() => {
      window.location.reload()
    });
  }

}
