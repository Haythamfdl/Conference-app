import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {Topic} from "../../class/topic";
import {TopicService} from "../../service/topic.service";

@Component({
  selector: 'app-form-topic',
  templateUrl: './form-topic.component.html',
  styleUrls: ['./form-topic.component.css']
})
export class FormTopicComponent implements OnInit {
  conference: Conference
  topic: Topic;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService) {
    this.topic = new Topic();
  }

  ngOnInit(): void {
    this.conference = JSON.parse(localStorage.getItem("Conference"));
  }

  onSubmit() {
    this.topic.deleted = false;
    this.topic.conference = this.conference;
    this.topicService.save(this.topic).subscribe(date => {
      this.router.navigate(['/topics']).then();
    });
  }
}
