import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-choix-conf',
  templateUrl: './choix-conf.component.html',
  styleUrls: ['./choix-conf.component.css']
})
export class ChoixConfComponent implements OnInit {
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
    this.router.navigate(['/mconferences']);
  }

  Info(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/conference']);
  }

  Papier(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/apapier']).then(() => {
      window.location.reload()
    });
  }

}
