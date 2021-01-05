import { Component, OnInit } from '@angular/core';
import {Conference} from "../../class/conference";
import {Session} from "../../class/session";
import {Track} from "../../class/track";
import {ActivatedRoute, Router} from "@angular/router";
import {TrackService} from "../../service/track.service";

@Component({
  selector: 'app-modif-track',
  templateUrl: './modif-track.component.html',
  styleUrls: ['./modif-track.component.css']
})
export class ModifTrackComponent implements OnInit {
  conference : Conference
  track:Track;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private trackService:TrackService){
    this.track=new Track();
  }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.track=JSON.parse(localStorage.getItem("Track"));
  }
  onSubmit(){
    this.trackService.update(this.track).subscribe(date =>{
      this.router.navigate(['/tracks']);
    });
  }

}
