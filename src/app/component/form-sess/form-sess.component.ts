import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";
import {Session} from "../../class/session";
import {SalleConference} from "../../class/salle-conference";
import {Hotel} from "../../class/hotel";
import {SalleConfService} from "../../service/salle-conf.service";
import {SessionService} from "../../service/session.service";

@Component({
  selector: 'app-form-sess',
  templateUrl: './form-sess.component.html',
  styleUrls: ['./form-sess.component.css']
})
export class FormSessComponent implements OnInit {
  utilisateur:Utilisateur;
  conference : Conference
  session:Session;
  salleConferences:SalleConference[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService:SessionService,
              private salleConfService:SalleConfService) {
    this.session=new Session();
  }

  select(event : any){
    this.session.salle=event;
  }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.salleConfService.findAlldispo(this.conference.hotel.id).subscribe(data => {
      this.salleConferences = data;
    });
  }
  onSubmit(){
    this.session.termine=false;
    this.session.deleted=false;
    this.session.conference=this.conference;
    this.sessionService.save(this.session).subscribe(date =>{
      this.router.navigate(['/sessions']);
    });
  }
}