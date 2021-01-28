import {Component, OnInit} from '@angular/core';
import {Invitation} from "../../class/invitation";
import {InvitationService} from "../../service/invitation.service";
import {Conference} from "../../class/conference";
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-list-invconf',
  templateUrl: './list-invconf.component.html',
  styleUrls: ['./list-invconf.component.css']
})
export class ListInvconfComponent implements OnInit {
  invitations:Invitation[];
  conference:Conference;
  utilisateur:Utilisateur;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private invitationService:InvitationService) { }

  ngOnInit(): void {
    this.conference=JSON.parse(localStorage.getItem("Conference"));
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.invitationService.invConf(this.conference.id).subscribe(data => {
      this.invitations  = data;
    });
  }

  Ajouter(){
    this.router.navigate(['/invitation']);
  }

}
