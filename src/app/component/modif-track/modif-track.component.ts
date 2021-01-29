import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {Track} from "../../class/track";
import {ActivatedRoute, Router} from "@angular/router";
import {TrackService} from "../../service/track.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-modif-track',
  templateUrl: './modif-track.component.html',
  styleUrls: ['./modif-track.component.css']
})
export class ModifTrackComponent implements OnInit {
  conference : Conference
  track:Track;
  l:string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private trackService:TrackService,
              private datePipe:DatePipe){
    this.track=new Track();
  }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.track=JSON.parse(localStorage.getItem("Track"));
    this.track.datedeb=this.datePipe.transform(this.track.datedeb,'yyyy-MM-ddTHH:mm','UTC');
    this.track.datefin=this.datePipe.transform(this.track.datefin,'yyyy-MM-ddTHH:mm','UTC');
    this.l = this.track.nom;
  }
  onSubmit(){
    this.trackService.update(this.track).subscribe(date =>{
      this.router.navigate(['/tracks']);
    });
  }

}
