import { Component, OnInit } from '@angular/core';
import {Conference} from "../../class/conference";
import {Session} from "../../class/session";
import {Track} from "../../class/track";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../service/session.service";
import {TrackService} from "../../service/track.service";

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.component.html',
  styleUrls: ['./list-track.component.css']
})
export class ListTrackComponent implements OnInit {
  conference : Conference;
  session : Session;
  tracks:Track[];
  t:Track;
  show:boolean =false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService:SessionService,
              private trackService:TrackService) {}


  ngOnInit(): void {
    this.isLoggedIn();
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.session=JSON.parse(localStorage.getItem("Session"));
    if(this.session==null){
      this.router.navigate(['/login']).then(() => {window.location.reload()});
    }
    else{
      this.trackService.findMine(this.session.id).subscribe(data => {
        this.tracks = data;
      });
    }
  }

  Modifier(value : any){
    localStorage.setItem('Track',JSON.stringify(value));
    console.log(JSON.stringify(localStorage.getItem("Track")));
    this.router.navigate(['/mtrack']);
  }

  Ajouter(){
    this.router.navigate(['/atrack']);
  }

  Supprimer(value : any){
    this.t = value;
    this.t.deleted = true;
    this.trackService.update(this.t).subscribe();
    this.router.navigate(['/tracks']).then(() => {window.location.reload()});
    alert("Track a été Supprimer");
  }

  Terminer(value : any){
    this.t = value;
    this.t.terminer = true;
    this.trackService.update(this.t).subscribe();
    this.router.navigate(['/tracks']);
    alert("Track a été Terminer");
  }

  isLoggedIn(){
    if(localStorage.getItem("Utilisateur") === null){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }
  aPapier(value:Track){
    if(value.papier !== null)
      return false;
    else
      return true;
  }
  Enlever(value:Track){
    this.t = value;
    this.t.papier = null;
    this.trackService.update(this.t).subscribe();
    this.router.navigate(['/tracks']).then(() => {window.location.reload()});
    alert("Papier a été Enlever");
  }
  AjouterP(value:any){
    localStorage.setItem('Track',JSON.stringify(value));
    this.router.navigate(['/apaptrack']);
  }
}
