import {Component, OnInit} from '@angular/core';
import {InvitationService} from "../../service/invitation.service";
import {Invitation} from "../../class/invitation";
import {Utilisateur} from "../../class/utilisateur";

@Component({
  selector: 'app-invit-env',
  templateUrl: './invit-env.component.html',
  styleUrls: ['./invit-env.component.css']
})
export class InvitEnvComponent implements OnInit {
  invitations: Invitation[];
  utilisateur: Utilisateur;

  constructor(private invitationService: InvitationService) {
  }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(localStorage.getItem("Utilisateur"));
    this.invitationService.invEnv(this.utilisateur.id).subscribe(data => {
      this.invitations = data;
    });
  }

}
