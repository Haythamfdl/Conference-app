import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {Hotel} from "../../class/hotel";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConferenceService} from "../../service/conference.service";
import {HotelService} from "../../service/hotel.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-info-conf',
  templateUrl: './info-conf.component.html',
  styleUrls: ['./info-conf.component.css']
})
export class InfoConfComponent implements OnInit {
  conference: Conference;
  hotels: Hotel[];
  form: FormGroup;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conferenceService: ConferenceService,
    private hotelService: HotelService,
    private datePipe:DatePipe) {
    this.conference = new Conference();
  }

  onSubmit() {
    this.conference.id = this.id;
    this.conferenceService.update(this.conference).subscribe(data => {
      this.Alert();
    });
  }

  Alert() {
    alert("La Conference a été Modifier !");
    this.router.navigate(['/Myconferences']).then(() => {
      window.location.reload()
    });
  }

  select(event: any) {
    this.conference.hotel = event;
  }


  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.conference = JSON.parse(localStorage.getItem("Conference"));
    this.conference.date=this.datePipe.transform(this.conference.date,'yyyy-MM-dd','UTC');
    this.conference.delaisoumission=this.datePipe.transform(this.conference.delaisoumission,'yyyy-MM-dd','UTC');
    this.id = this.conference.id;
  }


}
