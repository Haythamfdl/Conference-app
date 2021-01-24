import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../class/hotel";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelService} from "../../service/hotel.service";
import {Chambre} from "../../class/chambre";
import {ChambreService} from "../../service/chambre.service";

@Component({
  selector: 'app-form-chambre',
  templateUrl: './form-chambre.component.html',
  styleUrls: ['./form-chambre.component.css']
})
export class FormChambreComponent implements OnInit {
  hotel:Hotel;
  chambre:Chambre;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private chambreService:ChambreService) {
    this.chambre=new Chambre();
  }

  ngOnInit(): void {
    this.hotel=JSON.parse(localStorage.getItem("Hotel"));
    this.chambre.nbpersonne=1;
    this.chambre.prix=0;
  }

  onSubmit() {
    this.chambre.hotel=this.hotel;
    this.chambre.disponible=true;
    this.chambre.deleted=false;
    this.chambreService.save(this.chambre).subscribe();
    this.router.navigate(['/chambres']);
  }

  select(value: any){
    this.chambre.type =value;
  }

}
