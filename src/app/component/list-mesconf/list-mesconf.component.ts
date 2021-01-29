import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";
import {Utilisateur} from "../../class/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-mesconf',
  templateUrl: './list-mesconf.component.html',
  styleUrls: ['./list-mesconf.component.css']
})
export class ListMesconfComponent implements OnInit {
  utilisateur:Utilisateur;
  conferences : Conference[];
  c : Conference;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private confserv:ConferenceService) {}

  ngOnInit(): void {
    localStorage.removeItem('Conference');
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    if(this.utilisateur==null){
      this.router.navigate(['/login']).then(() => {window.location.reload()});
    }
    else{
      this.confserv.findMine(this.utilisateur.id).subscribe(data => {
        this.conferences = data;
      });
    }
  }

  Modifier(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/mconferences']).then();
  }

  Supprimer(value : any){
    this.c = value;
    if(confirm("Etes-vous sûr de vouloir Annuler La Conférence "+this.c.nom+" !!!")){
      this.c.deleted = true;
      this.confserv.update(this.c).subscribe();
      this.router.navigate(['/myconferences']).then(() => {window.location.reload()});
      alert("La Conferrence a été Supprimer");
    }
  }

  Terminer(value : any){
    this.c = value;
    this.c.terminer = !this.c.terminer;
    this.confserv.update(this.c).subscribe();
    this.router.navigate(['/myconferences']).then();
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

  Ajouter(){
    this.router.navigate(['/aconferences']).then();
  }
}


