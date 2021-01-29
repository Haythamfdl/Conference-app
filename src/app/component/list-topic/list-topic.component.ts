import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {Topic} from "../../class/topic";
import {TopicService} from "../../service/topic.service";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: ['./list-topic.component.css']
})
export class ListTopicComponent implements OnInit {
  topics:Topic[];
  t:Topic;
  conference : Conference;
  show:boolean =false;
  utilisateur:Utilisateur;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService:TopicService) {}


  ngOnInit(): void {
    this.isLoggedIn();
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    if(this.conference==null){
      this.router.navigate(['/login']).then(() => {window.location.reload()});
    }
    else{
      this.topicService.findMine(this.conference.id).subscribe(data => {
        this.topics = data;
      });
    }
  }

  Modifier(value : any){
    localStorage.setItem('Topic',JSON.stringify(value));
    this.router.navigate(['/mtopic']).then();
  }

  Ajouter(){
    this.router.navigate(['/atopic']).then();
  }

  Supprimer(value : any){
    this.t = value;
    this.t.deleted = true;
    this.topicService.update(this.t).subscribe();
    this.router.navigate(['/topics']).then(() => {window.location.reload()});
    alert("Le Topic a été Supprimer");
  }


  isLoggedIn(){
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    if(this.utilisateur === null){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }

}
