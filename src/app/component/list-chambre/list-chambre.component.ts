import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../class/hotel";
import {ActivatedRoute, Router} from "@angular/router";
import {Chambre} from "../../class/chambre";
import {ChambreService} from "../../service/chambre.service";

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.css']
})
export class ListChambreComponent implements OnInit {
  chambres:Chambre[];
  hotel:Hotel;
  c:Chambre;
  dispo:string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private chambreService:ChambreService) { }

  ngOnInit(): void {
    this.hotel=JSON.parse(localStorage.getItem("Hotel"));
    this.chambreService.findAllbyHotel(this.hotel.id).subscribe(data => {
      this.chambres = data;
    });
  }

  Modifier(value : any){
    localStorage.setItem('Chambre',JSON.stringify(value));
    this.router.navigate(['/mchambre']).then();
  }

  Disponible(value : any){
    this.c = value;
    this.c.disponible = !this.c.disponible;
    this.chambreService.update(this.c).subscribe();
    if(this.c.disponible == true){
      alert("La chambre est maintenant disponible !!");
    }
    else{
      alert("La chambre est maintenant indisponible !!");
    }
    this.router.navigate(['/chambres']).then(() => {window.location.reload()});
  }

  Ajouter(){
    this.router.navigate(['/achambre']).then();
  }

  Supprimer(value : any){
    this.c = value;
    this.c.deleted = true;
    this.chambreService.update(this.c).subscribe();
    this.router.navigate(['/chambres']).then(() => {window.location.reload()});
    alert("La chambre a été Supprimer");
  }

  Back(){
    this.router.navigate(['/hotels']).then();
  }

}
