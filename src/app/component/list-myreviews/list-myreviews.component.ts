import { Component, OnInit } from '@angular/core';
import {Papier} from "../../class/papier";
import {Evaluation} from "../../class/evaluation";
import {ActivatedRoute, Router} from "@angular/router";
import {EvaluationService} from "../../service/evaluation.service";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-list-myreviews',
  templateUrl: './list-myreviews.component.html',
  styleUrls: ['./list-myreviews.component.css']
})
export class ListMyreviewsComponent implements OnInit {
  utilisateur:Utilisateur;
  evaluations:Evaluation[];
  e:Evaluation;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private evaluationService:EvaluationService) { }

  ngOnInit(): void {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.evaluationService.findMine(this.utilisateur.id).subscribe(data => {
      this.evaluations = data;
    });
  }

  Modifier(value :any){
    this.e=value;
    localStorage.setItem('Evaluation',JSON.stringify(this.e));
    this.router.navigate(['/mreview']);
  }

  Info(value :any){
    localStorage.setItem('Evaluation',JSON.stringify(value));
    this.router.navigate(['/review']);
  }

  Supprimer(value : any){
    this.e = value;
    this.e.deleted = true;
    this.evaluationService.update(this.e).subscribe();
    this.router.navigate(['/myreviews']).then(() => {window.location.reload()});
    alert("La Conferrence a été Supprimer");
  }

}
