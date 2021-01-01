import { Component, OnInit } from '@angular/core';
import {Conference} from "../../class/conference";
import {Hotel} from "../../class/hotel";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";
import {HotelService} from "../../service/hotel.service";

@Component({
  selector: 'app-modif-conference',
  templateUrl: './modif-conference.component.html',
  styleUrls: ['./modif-conference.component.css']
})
export class ModifConferenceComponent implements OnInit {
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
    this.conferenceService.update(this.conference).subscribe(data => {
      this.Alert();
    });
  }

  Alert() {
    alert("La Conference a été Modifier !");
    this.router.navigate(['/Myconferences']).then(() => {window.location.reload()});
  }

  select(event : any){
    this.conference.hotel =event;
    console.log("hotel is" , this.conference.hotel);

  }
  ngOnInit(): void {

    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.conference=JSON.parse(localStorage.getItem("Conference"));

  }

}