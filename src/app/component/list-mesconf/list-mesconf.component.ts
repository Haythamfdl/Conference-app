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
    console.log(JSON.stringify(localStorage.getItem("Conference")));
    this.router.navigate(['/mconferences']);
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
    this.router.navigate(['/myconferences']);
  }

  Info(value :any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/conference']);
  }

  Inviter(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/inviter']);
    //this.router.navigate(['/invitation']);
  }

  Session(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/sessions']);
  }

  Topic(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/topics']);
  }

  Papier(value : any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/recpapier']);
  }

  Ajouter(){
    this.router.navigate(['/aconferences']);
  }
}


