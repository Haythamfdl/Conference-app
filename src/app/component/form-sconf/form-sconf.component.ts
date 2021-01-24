import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../class/hotel";
import {Chambre} from "../../class/chambre";
import {ActivatedRoute, Router} from "@angular/router";
import {ChambreService} from "../../service/chambre.service";
import {SalleConference} from "../../class/salle-conference";
import {SalleConfService} from "../../service/salle-conf.service";

@Component({
  selector: 'app-form-sconf',
  templateUrl: './form-sconf.component.html',
  styleUrls: ['./form-sconf.component.css']
})
export class FormSconfComponent implements OnInit {
  hotel:Hotel;
  salleConference:SalleConference;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private salleConfService:SalleConfService) {
    this.salleConference=new SalleConference();
  }

  ngOnInit(): void {
    this.hotel=JSON.parse(localStorage.getItem("Hotel"));
    this.salleConference.nbpersonne=1;
  }

  onSubmit() {
    this.salleConference.hotel=this.hotel;
    this.salleConference.disponible=true;
    this.salleConference.deleted=false;
    this.salleConfService.save(this.salleConference).subscribe();
    this.router.navigate(['/salleconferences']);
  }

}
