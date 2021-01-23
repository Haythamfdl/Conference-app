import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../class/hotel";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelService} from "../../service/hotel.service";

@Component({
  selector: 'app-modif-hotel',
  templateUrl: './modif-hotel.component.html',
  styleUrls: ['./modif-hotel.component.css']
})
export class ModifHotelComponent implements OnInit {

  hotel:Hotel;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private hotelService:HotelService) { }

  ngOnInit(): void {
    this.hotel=JSON.parse(localStorage.getItem("Hotel"));
  }

  onSubmit() {
    this.hotelService.update(this.hotel).subscribe();
    this.router.navigate(['/hotels']);
  }

}
