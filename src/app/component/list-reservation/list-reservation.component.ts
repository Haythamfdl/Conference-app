import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../class/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../service/reservation.service";
import {Reservation} from "../../class/reservation";

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  utilisateur:Utilisateur;
  reservations:Reservation[];
  r:Reservation;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.reservationService.findAll(this.utilisateur.id).subscribe(data => {
      this.reservations = data;
    });
  }

  Modifier(value :any){
    this.r=value;
    localStorage.setItem('Reservation',JSON.stringify(this.r));
    this.router.navigate(['/mreservation']);
  }

  Ajouter(){
    this.router.navigate(['/areservation']);
  }

  Annuler(value : any){
    this.r = value;
    this.r.deleted = true;
    this.reservationService.update(this.r).subscribe();
    this.router.navigate(['/reservations']).then(() => {window.location.reload()});
    alert("La Reservation a été Annuler");
  }


}
