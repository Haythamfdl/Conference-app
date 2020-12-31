import { Component, OnInit } from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Hotel} from "../../class/hotel";
import {HotelService} from "../../service/hotel.service";
import {Session} from "../../class/session";

@Component({
  selector: 'app-form-conference',
  templateUrl: './form-conference.component.html',
  styleUrls: ['./form-conference.component.css']
})
export class FormConferenceComponent implements OnInit {

  conference: Conference;
  hotels:Hotel[];
  hotel:Hotel=new Hotel();
  session:Session[];
  idhotel:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conferenceService: ConferenceService,
    private hotelService:HotelService) {
    this.conference = new Conference();
  }

  onSubmit() {
    this.hotel =this.hotels.find(x => x.id === this.idhotel);
    this.conference.nom="aaaaaaaaaaaa";
    this.conference.hotel=this.idhotel;
    this.conference.sessions=this.session;
    this.conference.terminer=false;
    this.conference.deleted=false;
    this.conferenceService.save(this.conference).subscribe(data => {
      this.Alert();
    });
  }

  Alert() {
    alert("La Conference a été Créer !")
  }

  select(event : any){
    this.idhotel=event.target.value;
    console.log(this.idhotel);

  }
  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
  }
}
