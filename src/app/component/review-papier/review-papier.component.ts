import {Component, OnInit} from '@angular/core';
import {Papier} from "../../class/papier";
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../class/utilisateur";
import {Evaluation} from "../../class/evaluation";
import {EvaluationService} from "../../service/evaluation.service";

@Component({
  selector: 'app-review-papier',
  templateUrl: './review-papier.component.html',
  styleUrls: ['./review-papier.component.css']
})
export class ReviewPapierComponent implements OnInit {

  utilisateur : Utilisateur
  papier:Papier;
  evaluation:Evaluation;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private evaluationService:EvaluationService){
    this.evaluation=new Evaluation();
  }

  ngOnInit(): void {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.papier=JSON.parse(localStorage.getItem("Papier"));
    this.evaluation.evaluateur=this.utilisateur;
    this.evaluation.papier=this.papier;
  }

  onSubmit(){
    this.evaluation.deleted=false;
    this.evaluationService.save(this.evaluation).subscribe();
    alert("Evaluation Soumise");
    this.router.navigate(['/myreviews']).then();
  }

}
