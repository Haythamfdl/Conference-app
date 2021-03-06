import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {Session} from "../../class/session";
import {SessionService} from "../../service/session.service";

@Component({
  selector: 'app-list-sess',
  templateUrl: './list-sess.component.html',
  styleUrls: ['./list-sess.component.css']
})
export class ListSessComponent implements OnInit {
  sessions: Session[];
  conference: Conference;
  s: Session;
  show: boolean = false;
  u: Utilisateur;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService: SessionService) {
  }


  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem("Utilisateur"));
    this.conference = JSON.parse(localStorage.getItem("Conference"));
    this.isLoggedIn();
    if (this.conference == null) {
      this.router.navigate(['/login']).then(() => {
        window.location.reload()
      });
    } else {
      this.sessionService.findMine(this.conference.id).subscribe(data => {
        this.sessions = data;
      });
    }
  }

  Modifier(value: any) {
    localStorage.setItem('Session', JSON.stringify(value));
    this.router.navigate(['/msession']).then();
  }

  Ajouter() {
    this.router.navigate(['/asession']).then();
  }

  Supprimer(value: any) {
    this.s = value;
    this.s.deleted = true;
    this.sessionService.update(this.s).subscribe();
    this.router.navigate(['/sessions']).then(() => {
      window.location.reload()
    });
    alert("La Session a été Supprimer");
  }

  Terminer(value: any) {
    this.s = value;
    this.s.terminer = !this.s.terminer;
    this.sessionService.update(this.s).subscribe();
    this.router.navigate(['/sessions']).then();
  }

  isLoggedIn() {
    if (localStorage.getItem("Utilisateur") === null) {
      this.show = true;
    } else {
      this.show = false;
      this.canUpdate();
    }
  }

  canUpdate() {
    if (this.u.id == this.conference.organisateur.id || this.u.isadmin == true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  Tracks(value: any) {
    localStorage.setItem('Session', JSON.stringify(value));
    this.router.navigate(['/tracks']).then();
  }
}
