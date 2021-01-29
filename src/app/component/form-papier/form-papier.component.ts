import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {Topic} from "../../class/topic";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../../service/topic.service";
import {Papier} from "../../class/papier";
import {PapierService} from "../../service/papier.service";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-form-papier',
  templateUrl: './form-papier.component.html',
  styleUrls: ['./form-papier.component.css']
})
export class FormPapierComponent implements OnInit {
  conference: Conference
  topics: Topic[];
  papier: Papier;
  p: Papier;
  selectedfile: File;
  email1: string = "";
  email2: string = "";


  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService,
              private papierService: PapierService,
              private utilisateurService: UtilisateurService) {
    this.papier = new Papier();
    this.p = new Papier();
  }

  ngOnInit(): void {
    this.conference = JSON.parse(localStorage.getItem("Conference"));
    this.topicService.findMine(this.conference.id).subscribe(data => {
      this.topics = data;
    });
  }

  select(value: any) {
    this.papier.topic = value;
  }

  change(file: any) {
    this.selectedfile = file.target.files[0];
    console.log(this.selectedfile);
    // this.onUpload(2);
  }

  onUpload(id: any) {
    const uploadFile = new FormData();
    uploadFile.append('file', this.selectedfile[0]);
    console.log(uploadFile);
    this.papierService.upload(id, uploadFile).subscribe();
  }

  onSubmit() {
    this.papier.premierauteur = JSON.parse(localStorage.getItem("Utilisateur"));
    this.papier.conference = JSON.parse(localStorage.getItem("Conference"));
    this.papier.confirmer = false;
    this.papier.deleted = false;
    if (this.papier.lien.startsWith("https://drive.google.com/")) {
      if (this.email1 !== "") {
        this.utilisateurService.getByEmail(this.email1).subscribe(data => {
          if (data == null) {
            alert("L'email du co-auteur est invalable");
          } else {
            this.papier.auteur = data;
          }
        });
      }

      if (this.email2 !== "") {
        this.utilisateurService.getByEmail(this.email2).subscribe(data => {
          if (data == null) {
            alert("L'email du présentateur est invalable");
          } else {
            this.papier.presentateur = data;
          }
        });
      }
      this.papierService.save(this.papier).subscribe(data => {
        this.p = data;
        console.log(this.p);
        //this.onUpload(this.p.id);
        this.router.navigate(['/mypapier']).then();
      });
    } else {
      alert("Lien Google Drive invalide !!!");
    }
  }
}
