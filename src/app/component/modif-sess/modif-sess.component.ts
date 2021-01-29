import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {Session} from "../../class/session";
import {SalleConference} from "../../class/salle-conference";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../service/session.service";
import {SalleConfService} from "../../service/salle-conf.service";
import {UtilisateurService} from "../../service/utilisateur.service";
import {DatePipe} from "@angular/common";

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
  l:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService:SessionService,
              private salleConfService:SalleConfService,
              private utilisateurService:UtilisateurService,
              private datePipe:DatePipe) {
    this.session=new Session();
  }

  select(event : any){
    this.session.salle=event;
  }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.session=JSON.parse(localStorage.getItem("Session"));
    this.session.datedeb=this.datePipe.transform(this.session.datedeb,'yyyy-MM-ddTHH:mm', 'UTC');
    this.session.datefin=this.datePipe.transform(this.session.datefin,'yyyy-MM-ddTHH:mm', 'UTC');
    this.salleConfService.findAlldispo(this.conference.hotel.id).subscribe(data => {
      this.salleConferences = data;
    });
    this.l = this.session.nom;
  }
  onSubmit(){
    this.utilisateurService.getByEmail(this.session.chair.email).subscribe(data => {
      if(data == null){
        alert("cet email est invalable");
      }
      else {
        this.session.chair=data;
        this.sessionService.update(this.session).subscribe(date =>{
          this.router.navigate(['/sessions']).then();
        });
      }
    });
  }

}
