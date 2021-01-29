import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {Session} from "../../class/session";
import {ActivatedRoute, Router} from "@angular/router";
import {Track} from "../../class/track";
import {TrackService} from "../../service/track.service";

@Component({
  selector: 'app-form-track',
  templateUrl: './form-track.component.html',
  styleUrls: ['./form-track.component.css']
})
export class FormTrackComponent implements OnInit {
  conference: Conference
  session: Session;
  track: Track;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private trackService: TrackService) {
    this.track = new Track();
  }

  ngOnInit(): void {
    this.conference = JSON.parse(localStorage.getItem("Conference"));
    this.session = JSON.parse(localStorage.getItem("Session"));
  }

  onSubmit() {
    this.track.terminer = false;
    this.track.deleted = false;
    this.track.session = this.session;
    this.trackService.save(this.track).subscribe(date => {
      this.router.navigate(['/tracks']).then();
    });
  }

}
