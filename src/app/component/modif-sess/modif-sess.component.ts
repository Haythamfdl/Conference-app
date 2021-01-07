import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {Session} from "../../class/session";
import {SalleConference} from "../../class/salle-conference";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../service/session.service";
import {SalleConfService} from "../../service/salle-conf.service";
import {UtilisateurService} from "../../service/utilisateur.service";

@Component({
  selector: 'app-modif-sess',
  templateUrl: './modif-sess.component.html',
  styleUrls: ['./modif-sess.component.css']
})
export class ModifSessComponent implements OnInit {
  utilisateur:Utilisateur;
  conference : Conference
  session:Session;
  salleConferences:SalleConference[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService:SessionService,
              private salleConfService:SalleConfService,
              private  utilisateurService:UtilisateurService) {
    this.session=new Session();
  }

  select(event : any){
    this.session.salle=event;
  }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.session=JSON.parse(localStorage.getItem("Session"));
    this.salleConfService.findAlldispo(this.conference.hotel.id).subscribe(data => {
      this.salleConferences = data;
    });
  }
  onSubmit(){
    this.utilisateurService.getByEmail(this.session.chair.email).subscribe(data => {
      if(data == null){
        alert("cet email est invalable");
      }
      else {
        this.session.chair=data;
        this.sessionService.update(this.session).subscribe(date =>{
          this.router.navigate(['/sessions']);
        });
      }
    });
  }

}
