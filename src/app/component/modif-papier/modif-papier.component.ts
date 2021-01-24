import { Component, OnInit } from '@angular/core';
import {Conference} from "../../class/conference";
import {Topic} from "../../class/topic";
import {Papier} from "../../class/papier";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../../service/topic.service";
import {PapierService} from "../../service/papier.service";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-modif-papier',
  templateUrl: './modif-papier.component.html',
  styleUrls: ['./modif-papier.component.css']
})
export class ModifPapierComponent implements OnInit {
  conference : Conference
  topics:Topic[];
  papier:Papier;
  email1:string="";
  email2:string="";
  l:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService:TopicService,
              private papierService:PapierService,
              private utilisateurService:UtilisateurService) {
    this.papier=new Papier();
  }

  ngOnInit(): void {
    this.papier=JSON.parse(localStorage.getItem("Papier"));
    if(this.papier.auteur !== null){
      this.email1=this.papier.auteur.email;
    }
    if(this.papier.presentateur !== null){
      this.email2=this.papier.presentateur.email;
    }
    this.topicService.findMine(this.papier.conference.id).subscribe(data => {
      this.topics = data;
    });
    this.l = this.papier.nom;
  }

  select(value:any){
    this.papier.topic=value;
  }

  change(file:any){
    const data =new FormData();
    data.append('file',file.target.files[0],file.target.files[0].name);
    this.papier.data=data;
  }

  onSubmit() {
    if (this.email1 !== "") {
      this.utilisateurService.getByEmail(this.email1).subscribe(data => {
        if (data == null) {
          alert("L'email du co-auteur est invalable");
        } else {
          this.papier.auteur = data;
          if (this.email2 !== "") {
            this.utilisateurService.getByEmail(this.email2).subscribe(data => {
              if (data == null) {
                alert("L'email du présentateur est invalable");
              } else {
                this.papier.presentateur = data;
                this.papierService.update(this.papier).subscribe();
                this.router.navigate(['/mypapier']);
              }
            });
          }
        }
      });
    }


  }
}
