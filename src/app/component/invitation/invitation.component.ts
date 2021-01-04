import { Component, OnInit } from '@angular/core';
import {Invitation} from "../../class/invitation";
import {Utilisateur} from "../../class/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../service/utilisateur.service";
import {InvitationService} from "../../service/invitation.service";

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  invitation:Invitation;
  invitee:Utilisateur;
  i:Utilisateur;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private utilisateurService: UtilisateurService,
              private invitationService:InvitationService) {
    this.invitation=new Invitation();
    this.invitee=new Utilisateur();
  }
  onSubmit(){
    this.utilisateurService.getByEmail(this.invitee.email).subscribe(data => {
      if(data == null){
        console.log(data);
        alert("cet email est invalable");
      }
      else {
        this.invitation.invitee=data;
        this.invitation.accepter=false;
        this.invitationService.save(this.invitation).subscribe();
        alert("L'invitation a été envoyer");
      }
    });

  }
  ngOnInit(): void {
    this.invitation.conference=JSON.parse(localStorage.getItem("Conference"));
    this.invitation.inviteur=JSON.parse(localStorage.getItem("Utilisateur"));
    console.log(JSON.stringify(localStorage.getItem("Utilisateur")));
    console.log(JSON.stringify(localStorage.getItem("Conference")));
  }

}
