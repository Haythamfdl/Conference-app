import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";

@Component({
  selector: 'app-choix-confi',
  templateUrl: './choix-confi.component.html',
  styleUrls: ['./choix-confi.component.css']
})
export class ChoixConfiComponent implements OnInit {
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
      this.confserv.findMine(this.utilisateur.id).subscribe(data => {
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

  Inviter(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/invitation']).then();
  }
}
