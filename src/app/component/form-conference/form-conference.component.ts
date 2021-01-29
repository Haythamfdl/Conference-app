import {Component, OnInit} from '@angular/core';
import {Conference} from "../../class/conference";
import {ConferenceService} from "../../service/conference.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Hotel} from "../../class/hotel";
import {HotelService} from "../../service/hotel.service";
import {Utilisateur} from "../../class/utilisateur";
import * as XLSX from 'xlsx';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-form-conference',
  templateUrl: './form-conference.component.html',
  styleUrls: ['./form-conference.component.css']
})
export class FormConferenceComponent implements OnInit {

  conference: Conference;
  hotels:Hotel[];
  utilisateur:Utilisateur;
  selectedfile:File;
  c:Conference;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conferenceService: ConferenceService,
    private hotelService:HotelService,
    private datePipe:DatePipe) {
    this.conference = new Conference();
  }

  onSubmit() {
    this.utilisateur=JSON.parse(localStorage.getItem("Utilisateur"));
    this.conference.organisateur=this.utilisateur;
    this.conference.terminer=false;
    this.conference.deleted=false;
    this.conferenceService.save(this.conference).subscribe(data => {
      this.Alert();
    });
  }

  Alert() {
    alert("La Conference a été Créer !");
    this.router.navigate(['/myconferences']);
  }

  select(event : any){
    this.conference.hotel =event;

  }
  ngOnInit(): void {
    this.hotelService.findAll().subscribe(data => {
      this.hotels = data;
    });
    this.conference.maxpapier=1;
    this.conference.prixticket=0;
    this.conference.nticket=1;
  }

  Sel(date){
    console.log(this.conference.date);
  }

  change(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, {type: 'binary'});

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data: [][] = XLSX.utils.sheet_to_json(ws, {raw: false,dateNF:'yyyy-mm-dd'}); // to get 2d array pass 2nd parameter as object {header: 1}
      // @ts-ignore
      this.c=data[0];
      this.conference.nom = this.c.nom;
      this.conference.categorie = this.c.categorie;
      this.conference.sponsor=this.c.sponsor;
      this.conference.pageweb=this.c.pageweb
      this.conference.maxpapier=this.c.maxpapier;
      this.conference.prixticket=this.c.prixticket;
      this.conference.nticket=this.c.nticket;
      this.conference.date=this.datePipe.transform(this.c.date,'yyyy-MM-dd');
      this.conference.delaisoumission=this.datePipe.transform(this.c.delaisoumission,'yyyy-MM-dd');
    }
  }
}
