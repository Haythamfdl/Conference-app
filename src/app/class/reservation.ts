import {Hotel} from "./hotel";
import {Utilisateur} from "./utilisateur";

export class Reservation {
  id:string;
  hotel:Hotel;
  idchambre:string;
  client:Utilisateur;
  datedeb:string;
  datefin:string;
  repas:boolean;
  prix:number;
  deleted:boolean;
}
