import {Component, OnInit} from '@angular/core';
import {Invitation} from "../../class/invitation";
import {Utilisateur} from "../../class/utilisateur";
import {InvitationService} from "../../service/invitation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-invit-recu',
  templateUrl: './invit-recu.component.html',
  styleUrls: ['./invit-recu.component.css']
})
export class InvitRecuComponent implements OnInit {

  invitations: Invitation[];
  utilisateur: Utilisateur;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private invitationService: InvitationService) {
  }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(localStorage.getItem("Utilisateur"));
    this.invitationService.invRec(this.utilisateur.id).subscribe(data => {
      this.invitations = data;
    });
  }

  Accepter(value: Invitation) {
    value.accepter = true;
    this.invitationService.update(value).subscribe();
  }

  Info(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/conference']).then();
  }

  Session(value: any) {
    localStorage.setItem('Conference', JSON.stringify(value));
    this.router.navigate(['/sessions']).then(() => {
      window.location.reload()
    });
  }

}
