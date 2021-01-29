import {Component, OnInit} from '@angular/core';
import {Papier} from "../../class/papier";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {PapierService} from "../../service/papier.service";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-list-recpapier',
  templateUrl: './list-recpapier.component.html',
  styleUrls: ['./list-recpapier.component.css']
})
export class ListRecpapierComponent implements OnInit {
  papiers:Papier[];
  conference : Conference;
  utilisateur:Utilisateur;
  p:Papier;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private papierService:PapierService) { }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.papierService.findbyConf(this.conference.id).subscribe(data => {
      this.papiers = data;
    });
  }

  Info(value :any){
    localStorage.setItem('Papier',JSON.stringify(value));
    this.router.navigate(['/papier']).then();
  }

  Confirmer(value : any){
    this.p = value;
    this.p.confirmer = !this.p.confirmer;
    this.papierService.update(this.p).subscribe();
    this.router.navigate(['/recpapier']).then();
  }
}
