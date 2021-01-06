import { Component, OnInit } from '@angular/core';
import {Conference} from "../../class/conference";
import {Topic} from "../../class/topic";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../../service/topic.service";
import {Papier} from "../../class/papier";
import {PapierService} from "../../service/papier.service";
import {UtilisateurService} from "../../service/utilisateur.service";
import {Byte} from "@angular/compiler/src/util";

@Component({
  selector: 'app-form-papier',
  templateUrl: './form-papier.component.html',
  styleUrls: ['./form-papier.component.css']
})
export class FormPapierComponent implements OnInit {
  conference : Conference
  topics:Topic[];
  papier:Papier;
  email1:string;
  email2:string;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService:TopicService,
              private papierService:PapierService,
              private utilisateurService:UtilisateurService) {
    this.papier=new Papier();
  }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.topicService.findMine(this.conference.id).subscribe(data => {
      this.topics = data;
    });
  }

  select(value:any){
    this.papier.topic=value;
  }

  change(file:any){
    const data =new FormData();
    data.append('file',file.target.files[0],file.target.files[0].name);
    this.papier.data=data;
    console.log(this.papier.data);
  }

  onSubmit(){
    this.papier.premierauteur = JSON.parse(localStorage.getItem("Utilisateur"));
    this.papier.conference = JSON.parse(localStorage.getItem("Conference"));
    this.papier.confirmer = false;
    this.papier.deleted = false;
    if(this.email1!== null) {
      this.utilisateurService.getByEmail(this.email1).subscribe(data => {
        if (data == null) {
          console.log(data);
          alert("L'email du présentateur est invalable");
        } else {
          this.papier.auteur = data;
          this.utilisateurService.getByEmail(this.email2).subscribe(data => {
            if (data == null) {
              console.log(data);
              alert("L'email du présentateur est invalable");
            } else {
              this.papier.presentateur = data;
              this.papierService.save(this.papier).subscribe(data => {
                this.router.navigate(['/cconference']);
              });
            }
          });
        }
      });
    }
  }
}
