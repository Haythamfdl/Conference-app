import {Component, OnInit, ViewChild} from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Hotel} from "../../class/hotel";
import {HotelService} from "../../service/hotel.service";
import {Session} from "../../class/session";
import {FormControl, FormGroup} from "@angular/forms";
import {SalleConference} from "../../class/salle-conference";
import {SalleConfService} from "../../service/salle-conf.service";

@Component({
  selector: 'app-form-conference',
  templateUrl: './form-conference.component.html',
  styleUrls: ['./form-conference.component.css']
})
export class FormConferenceComponent implements OnInit {

  conference: Conference;
  hotels:Hotel[];
  form:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conferenceService: ConferenceService,
    private hotelService:HotelService) {
    this.conference = new Conference();
  }

  onSubmit() {
    this.conference.terminer=false;
    this.conference.deleted=false;
    this.conferenceService.save(this.conference).subscribe(data => {
      this.Alert();
    });
  }

  Alert() {
    alert("La Conference a été Créer !");
  }

  select(event : any){
    this.conference.hotel =event;
    console.log("hotel is" , this.conference.hotel);

  }
  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
  }
}
