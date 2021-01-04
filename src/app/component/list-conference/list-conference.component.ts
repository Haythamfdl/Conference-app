import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-conference',
  templateUrl: './list-conference.component.html',
  styleUrls: ['./list-conference.component.css']
})
export class ListConferenceComponent implements OnInit {
  conferences : Conference[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private confserv:ConferenceService) { }

  ngOnInit(): void {
    this.confserv.findAll().subscribe(data => {
      this.conferences = data;
    });
  }

  Info(value :any){
    localStorage.setItem('Conference',JSON.stringify(value));
    this.router.navigate(['/conference']);
  }

  test(value : any){
    console.log(JSON.stringify(value));
  }
}
