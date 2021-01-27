import {Component, OnInit} from '@angular/core';
import {Evaluation} from "../../class/evaluation";
import {ActivatedRoute, Router} from "@angular/router";
import {EvaluationService} from "../../service/evaluation.service";

@Component({
  selector: 'app-modif-review',
  templateUrl: './modif-review.component.html',
  styleUrls: ['./modif-review.component.css']
})
export class ModifReviewComponent implements OnInit {

  evaluation:Evaluation;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private evaluationService:EvaluationService){
    this.evaluation=new Evaluation();
  }

  ngOnInit(): void {
    this.evaluation=JSON.parse(localStorage.getItem("Evaluation"));
  }

  onSubmit(){
    this.evaluationService.update(this.evaluation).subscribe();
    this.router.navigate(['/myreviews']).then(() => {window.location.reload()});
  }


}
