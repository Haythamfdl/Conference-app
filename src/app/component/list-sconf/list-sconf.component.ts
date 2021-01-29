import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../class/hotel";
import {ActivatedRoute, Router} from "@angular/router";
import {SalleConfService} from "../../service/salle-conf.service";
import {SalleConference} from "../../class/salle-conference";

@Component({
  selector: 'app-list-sconf',
  templateUrl: './list-sconf.component.html',
  styleUrls: ['./list-sconf.component.css']
})
export class ListSconfComponent implements OnInit {
  salleConferences: SalleConference[];
  hotel: Hotel;
  c: SalleConference;
  dispo: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private salleConfService: SalleConfService) {
  }

  ngOnInit(): void {
    this.hotel = JSON.parse(localStorage.getItem("Hotel"));
    this.salleConfService.findAllbyHotel(this.hotel.id).subscribe(data => {
      this.salleConferences = data;
    });
  }

  Modifier(value: any) {
    localStorage.setItem('Sconf', JSON.stringify(value));
    this.router.navigate(['/msalleconference']).then();
  }

  Disponible(value: any) {
    this.c = value;
    this.c.disponible = !this.c.disponible;
    this.salleConfService.update(this.c).subscribe();
    if (this.c.disponible == true) {
      alert("La Salle est maintenant disponible !!");
    } else {
      alert("La Salle est maintenant indisponible !!");
    }
    this.router.navigate(['/salleconferences']).then(() => {
      window.location.reload()
    });
  }

  Ajouter() {
    this.router.navigate(['/asalleconference']).then();
  }

  Supprimer(value: any) {
    this.c = value;
    this.c.deleted = true;
    this.salleConfService.update(this.c).subscribe();
    this.router.navigate(['/salleconferences']).then(() => {
      window.location.reload()
    });
    alert("La Salle a été Supprimer");
  }
}
