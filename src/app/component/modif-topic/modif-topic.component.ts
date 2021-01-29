import {Component, OnInit} from '@angular/core';
import {Topic} from "../../class/topic";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../../service/topic.service";

@Component({
  selector: 'app-modif-topic',
  templateUrl: './modif-topic.component.html',
  styleUrls: ['./modif-topic.component.css']
})
export class ModifTopicComponent implements OnInit {
  topic:Topic;
  l:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService:TopicService) {
    this.topic=new Topic();
  }

  ngOnInit(): void {
    this.topic=JSON.parse(localStorage.getItem("Topic"));
    this.l = this.topic.nom;
  }

  onSubmit(){
    this.topicService.update(this.topic).subscribe(date =>{
      this.router.navigate(['/topics']).then();
    });
  }

}
