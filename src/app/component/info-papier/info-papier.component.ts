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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private papierService:PapierService){
    this.papier=new Papier();
    this.papier.topic=new Topic();
    this.papier.premierauteur=new Utilisateur();
    this.papier.auteur=new Utilisateur();
    this.papier.presentateur=new Utilisateur();
  }

  ngOnInit(): void {
    this.papier=JSON.parse(localStorage.getItem("Papier"));
  }

}
