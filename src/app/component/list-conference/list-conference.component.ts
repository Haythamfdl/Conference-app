import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";

@Component({
  selector: 'app-list-conference',
  templateUrl: './list-conference.component.html',
  styleUrls: ['./list-conference.component.css']
})
export class ListConferenceComponent implements OnInit {
  conferences : Conference[];
  constructor(private confserv:ConferenceService) { }

  ngOnInit(): void {
    this.confserv.findAll().subscribe(data => {
      this.conferences = data;
    });
  }

  test(value : any){
    console.log(JSON.stringify(value));
  }
}
