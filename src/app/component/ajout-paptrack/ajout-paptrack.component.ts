import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {Track} from "../../class/track";
import {ActivatedRoute, Router} from "@angular/router";
import {TrackService} from "../../service/track.service";
import {Papier} from "../../class/papier";
import {PapierService} from "../../service/papier.service";
import {Topic} from "../../class/topic";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-ajout-paptrack',
  templateUrl: './ajout-paptrack.component.html',
  styleUrls: ['./ajout-paptrack.component.css']
})
export class AjoutPaptrackComponent implements OnInit {
  conference : Conference
  track:Track;
  papiers:Papier[];
  papier:Papier;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private trackService:TrackService,
              private papierService:PapierService){
    this.track=new Track();
    this.papier=new Papier();
    this.papier.topic=new Topic();
    this.papier.premierauteur=new Utilisateur();
    this.papier.auteur=new Utilisateur();
    this.papier.presentateur=new Utilisateur();
  }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.track=JSON.parse(localStorage.getItem("Track"));
    this.papierService.findbyConfC(this.conference.id).subscribe(data => {
      this.papiers = data;
    });
  }
  onSubmit(){
    this.trackService.update(this.track).subscribe(date =>{
      this.router.navigate(['/tracks']).then();
    });
  }

  select(value:Papier){
    this.papier=value;
    this.track.papier =this.papier;
  }
}
