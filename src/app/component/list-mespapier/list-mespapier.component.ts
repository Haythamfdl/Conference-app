import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Papier} from "../../class/papier";
import {Utilisateur} from "../../class/utilisateur";
import {PapierService} from "../../service/papier.service";

@Component({
  selector: 'app-list-mespapier',
  templateUrl: './list-mespapier.component.html',
  styleUrls: ['./list-mespapier.component.css']
})
export class ListMespapierComponent implements OnInit {
  papiers:Papier[];
  utilisateur:Utilisateur;
  p:Papier;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private papierService:PapierService) { }

  ngOnInit(): void {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.papierService.findMine(this.utilisateur.id).subscribe(data => {
      this.papiers = data;
    });
  }

  Papier(value :any){
    localStorage.setItem('Papier',JSON.stringify(value));
    this.router.navigate(['/papier']).then();
  }

  Modifier(value :any){
    localStorage.setItem('Papier',JSON.stringify(value));
    this.router.navigate(['/mpapier']).then();
  }

  Supprimer(value : any){
    this.p = value;
    this.p.deleted = true;
    this.papierService.update(this.p).subscribe();
    this.router.navigate(['/mypapier']).then(() => {window.location.reload()});
    alert("La Conferrence a été Supprimer");
  }

  Evaluation(value :any){
    localStorage.setItem('Papier',JSON.stringify(value));
    this.router.navigate(['/reviews']).then();
  }
}
