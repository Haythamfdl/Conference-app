import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-list-conference',
  templateUrl: './list-conference.component.html',
  styleUrls: ['./list-conference.component.css']
})
export class ListConferenceComponent implements OnInit {
  conferences : Conference[];
  utilisateur:Utilisateur;
  c:Conference;
  isadmin:boolean=false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private confserv:ConferenceService) { }

  ngOnInit(): void {
    this.confserv.findAll().subscribe(data => {
      this.conferences = data;
    });
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.isadmin=this.utilisateur.isadmin;
  }

  Info(value :any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/conference']).then();
  }

  Inviter(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/inviter']).then();
    //this.router.navigate(['/invitation']).then();
  }

  Session(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/sessions']).then();
  }

  Topic(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/topics']).then();
  }

  Papier(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/recpapier']).then();
  }

  Modifier(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/mconferences']).then();
  }

  Supprimer(value : any){
    this.c = value;
    if(confirm("Etes-vous sûr de vouloir Annuler La Conférence "+this.c.nom+" !!!")) {
      this.c.deleted = true;
      this.confserv.update(this.c).subscribe();
      this.router.navigate(['/lconferences']).then(() => {
        window.location.reload()
      });
      alert("La Conferrence a été Supprimer");
    }
  }
}
