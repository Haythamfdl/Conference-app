import { Component, OnInit } from '@angular/core';
import {Conference} from "../../class/conference";
import {Track} from "../../class/track";
import {Papier} from "../../class/papier";
import {ActivatedRoute, Router} from "@angular/router";
import {TrackService} from "../../service/track.service";
import {PapierService} from "../../service/papier.service";
import {Topic} from "../../class/topic";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-info-papier',
  templateUrl: './info-papier.component.html',
  styleUrls: ['./info-papier.component.css']
})
export class InfoPapierComponent implements OnInit {
  conference : Conference
  papier:Papier;
  show:boolean=true;
  u:Utilisateur;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private papierService:PapierService){
  }

  ngOnInit(): void {
    this.u=JSON.parse(localStorage.getItem("Utilisateur"));
    this.papier=JSON.parse(localStorage.getItem("Papier"));
    this.isLoggedIn();
  }

  Review(){
    localStorage.setItem('Papier',JSON.stringify(this.papier));
    this.router.navigate(['/areview']);
  }

  isLoggedIn(){
    if(localStorage.getItem("Utilisateur") === null){
      this.show=false;
    }
    else{
      this.show=true;
      this.canUpdate();
    }
  }

  canUpdate(){
    if(this.u.id == this.papier.premierauteur.id)
    {
      this.show=false;
    }
    if(this.papier.auteur !== null){
      if(this.u.id == this.papier.auteur.id)
      {
        this.show=false;
      }
    }
    if(this.papier.presentateur !== null){
      if(this.u.id == this.papier.presentateur.id)
      {
        this.show=false;
      }
    }
  }
}
