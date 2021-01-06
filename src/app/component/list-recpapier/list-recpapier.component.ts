import { Component, OnInit } from '@angular/core';
import {Papier} from "../../class/papier";
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {PapierService} from "../../service/papier.service";

@Component({
  selector: 'app-list-recpapier',
  templateUrl: './list-recpapier.component.html',
  styleUrls: ['./list-recpapier.component.css']
})
export class ListRecpapierComponent implements OnInit {
  papiers:Papier[];
  conferences : Conference;
  p:Papier;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private papierService:PapierService) { }

  ngOnInit(): void {
    this.conferences=JSON.parse(localStorage.getItem("Conference"));
    this.papierService.findbyConf(this.conferences.id).subscribe(data => {
      this.papiers = data;
    });
  }

  Info(value :any){
    localStorage.setItem('Papier',JSON.stringify(value));
    this.router.navigate(['/papier']);
  }

  Confirmer(value : any){
    this.p = value;
    this.p.confirmer = true;
    this.papierService.update(this.p).subscribe();
    this.router.navigate(['/recpapier']);
  }
}
