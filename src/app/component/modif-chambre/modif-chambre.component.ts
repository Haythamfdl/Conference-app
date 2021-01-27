import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../class/chambre";
import {ActivatedRoute, Router} from "@angular/router";
import {ChambreService} from "../../service/chambre.service";

@Component({
  selector: 'app-modif-chambre',
  templateUrl: './modif-chambre.component.html',
  styleUrls: ['./modif-chambre.component.css']
})
export class ModifChambreComponent implements OnInit {
  chambre:Chambre;
  l:string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private chambreService:ChambreService) {
  }

  ngOnInit(): void {
    this.chambre=JSON.parse(localStorage.getItem("Chambre"));
    this.l = this.chambre.numero;
  }

  onSubmit() {
    this.chambreService.update(this.chambre).subscribe();
    this.router.navigate(['/chambres']);
  }

  select(value: any){
    this.chambre.type =value;
  }
}
