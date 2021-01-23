import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HotelService} from "../../service/hotel.service";
import {Hotel} from "../../class/hotel";

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {
  hotels:Hotel[];
  h:Hotel;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private hotelService:HotelService) { }

  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
  }

  Modifier(value : any){
    localStorage.setItem('Hotel',JSON.stringify(value));
    console.log(JSON.stringify(localStorage.getItem("Hotel")));
    this.router.navigate(['/mhotel']);
  }

  Supprimer(value : any){
    this.h = value;
    this.h.deleted = true;
    this.hotelService.update(this.h).subscribe();
    this.router.navigate(['/hotels']).then(() => {window.location.reload()});
    alert("L'Hotel a été Supprimer");
  }

  Ajouter(){
    this.router.navigate(['/ahotel']);
  }
}
