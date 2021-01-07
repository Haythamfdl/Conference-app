import { Component, OnInit } from '@angular/core';
import {Evaluation} from "../../class/evaluation";
import {ActivatedRoute, Router} from "@angular/router";
import {EvaluationService} from "../../service/evaluation.service";

@Component({
  selector: 'app-info-review',
  templateUrl: './info-review.component.html',
  styleUrls: ['./info-review.component.css']
})
export class InfoReviewComponent implements OnInit {

  evaluation:Evaluation;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private evaluationService:EvaluationService){
    this.evaluation=new Evaluation();
  }

  ngOnInit(): void {
    this.evaluation=JSON.parse(localStorage.getItem("Evaluation"));
    console.log(this.evaluation);
  }

}
