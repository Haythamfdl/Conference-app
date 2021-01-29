import {Component, OnInit} from '@angular/core';
import {SalleConference} from "../../class/salle-conference";
import {ActivatedRoute, Router} from "@angular/router";
import {SalleConfService} from "../../service/salle-conf.service";

@Component({
  selector: 'app-modif-sconf',
  templateUrl: './modif-sconf.component.html',
  styleUrls: ['./modif-sconf.component.css']
})
export class ModifSconfComponent implements OnInit {
  salleConference:SalleConference;
  l:string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private salleConfService:SalleConfService) {
    this.salleConference=new SalleConference();
  }

  ngOnInit(): void {
    this.salleConference=JSON.parse(localStorage.getItem("Sconf"));
    this.l = this.salleConference.numero;
  }

  onSubmit() {
    this.salleConfService.update(this.salleConference).subscribe();
    this.router.navigate(['/salleconferences']).then();
  }

}
