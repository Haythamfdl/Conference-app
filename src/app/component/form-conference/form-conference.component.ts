import {Component, OnInit, ViewChild} from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Hotel} from "../../class/hotel";
import {HotelService} from "../../service/hotel.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-form-conference',
  templateUrl: './form-conference.component.html',
  styleUrls: ['./form-conference.component.css']
})
export class FormConferenceComponent implements OnInit {

  conference: Conference;
  hotels:Hotel[];
  utilisateur:Utilisateur;
  form:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conferenceService: ConferenceService,
    private hotelService:HotelService) {
    this.conference = new Conference();
  }

  onSubmit() {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.conference.organisateur=this.utilisateur;
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

  }
  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
  }
}
