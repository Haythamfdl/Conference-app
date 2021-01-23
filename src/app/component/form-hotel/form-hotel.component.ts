import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Hotel} from "../../class/hotel";
import {HotelService} from "../../service/hotel.service";

@Component({
  selector: 'app-form-hotel',
  templateUrl: './form-hotel.component.html',
  styleUrls: ['./form-hotel.component.css']
})
export class FormHotelComponent implements OnInit {

  hotel:Hotel;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private hotelService:HotelService) {
    this.hotel=new Hotel();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.hotel.deleted=false;
    this.hotelService.save(this.hotel).subscribe();
    this.router.navigate(['/hotels']);
  }
}
