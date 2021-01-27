import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Papier} from "../../class/papier";
import {Evaluation} from "../../class/evaluation";
import {EvaluationService} from "../../service/evaluation.service";

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {

  papier:Papier;
  evaluations:Evaluation[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private evaluationService:EvaluationService) { }

  ngOnInit(): void {
    this.papier=JSON.parse(localStorage.getItem("Papier"));
    this.evaluationService.findByPapier(this.papier.id).subscribe(data => {
      this.evaluations = data;
    });
  }

  Info(value :any){
    localStorage.setItem('Evaluation',JSON.stringify(value));
    this.router.navigate(['/review']);
  }

}
