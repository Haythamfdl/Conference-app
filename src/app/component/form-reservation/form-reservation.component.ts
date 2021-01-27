import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../class/hotel";
import {Utilisateur} from "../../class/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelService} from "../../service/hotel.service";
import {ChambreService} from "../../service/chambre.service";
import {ReservationService} from "../../service/reservation.service";
import {Reservation} from "../../class/reservation";
import {Chambre} from "../../class/chambre";

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent implements OnInit {

  hotels:Hotel[];
  chambres:Chambre[];
  chambre:Chambre;
  utilisateur:Utilisateur;
  reservation:Reservation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chambreService: ChambreService,
    private reservationService:ReservationService,
    private hotelService:HotelService) {
    this.reservation=new Reservation();
    this.chambre=new Chambre();
  }

  onSubmit() {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.reservation.client=this.utilisateur;
    this.reservation.deleted=false;
    this.reservationService.save(this.reservation).subscribe();
    this.router.navigate(['/reservations']).then(() => {window.location.reload()});
  }

  selectH(event : Hotel){
    this.reservation.hotel =event;
    this.chambreService.findAlldispo(event.id).subscribe(data => {
      this.chambres = data;
    });
  }

  select(event : any){
    this.reservation.repas=event;
  }

  selectC(event : any){
    this.chambre=event;
    this.reservation.chambre =this.chambre.numero;
  }

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.reservation.repas=false;
  }
}
