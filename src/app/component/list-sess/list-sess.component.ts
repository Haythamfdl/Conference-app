import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";
import {Session} from "../../class/session";
import {SessionService} from "../../service/session.service";

@Component({
  selector: 'app-list-sess',
  templateUrl: './list-sess.component.html',
  styleUrls: ['./list-sess.component.css']
})
export class ListSessComponent implements OnInit {
  sessions:Session[];
  conference : Conference;
  s : Session;
  show:boolean =false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService:SessionService) {}


  ngOnInit(): void {
    this.isLoggedIn();
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    if(this.conference==null){
      this.router.navigate(['/login']).then(() => {window.location.reload()});
    }
    else{
      this.sessionService.findMine(this.conference.id).subscribe(data => {
        this.sessions = data;
      });
    }
  }

  Modifier(value : any){
    localStorage.setItem('Session',JSON.stringify(value));
    console.log(JSON.stringify(localStorage.getItem("Session")));
    this.router.navigate(['/msession']).then(() => {window.location.reload()});
  }

  Ajouter(){
    this.router.navigate(['/asession']);
  }

  Supprimer(value : any){
    this.s = value;
    this.s.deleted = true;
    this.sessionService.update(this.s).subscribe();
    this.router.navigate(['/sessions']).then(() => {window.location.reload()});
    alert("La Session a été Supprimer");
  }

  Terminer(value : any){
    this.s = value;
    this.s.termine = true;
    this.sessionService.update(this.s).subscribe();
    this.router.navigate(['/sessions']).then(() => {window.location.reload()});
    alert("La Session a été Terminer");
  }

  isLoggedIn(){
    if(localStorage.getItem("Utilisateur") === null){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }
}
