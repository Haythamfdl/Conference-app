import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../class/hotel";
import {Chambre} from "../../class/chambre";
import {Utilisateur} from "../../class/utilisateur";
import {Reservation} from "../../class/reservation";
import {ActivatedRoute, Router} from "@angular/router";
import {ChambreService} from "../../service/chambre.service";
import {ReservationService} from "../../service/reservation.service";
import {HotelService} from "../../service/hotel.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-modif-reservation',
  templateUrl: './modif-reservation.component.html',
  styleUrls: ['./modif-reservation.component.css']
})
export class ModifReservationComponent implements OnInit {

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
    private hotelService:HotelService,
    private datePipe:DatePipe) {
    this.reservation=new Reservation();
    this.chambre=new Chambre();
  }

  onSubmit() {
    this.reservationService.update(this.reservation).subscribe();
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
    this.reservation=JSON.parse(localStorage.getItem("Reservation"));
    this.reservation.datedeb=this.datePipe.transform(this.reservation.datedeb,'yyyy-MM-dd','UTC');
    this.reservation.datefin=this.datePipe.transform(this.reservation.datefin,'yyyy-MM-dd','UTC');
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.reservation.repas=false;
  }

}
