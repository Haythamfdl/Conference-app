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
    localStorage.setItem('Evaluation',JSON.stringify(value));
    this.router.navigate(['/mpapier']);
  }

  Info(value :any){
    localStorage.setItem('Evaluation',JSON.stringify(value));
    this.router.navigate(['/mpapier']);
  }


}
