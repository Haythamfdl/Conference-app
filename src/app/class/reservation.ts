import {Hotel} from "./hotel";
import {Utilisateur} from "./utilisateur";

export class Reservation {
  id:string;
  hotel:Hotel;
  chambre:string;
  client:Utilisateur;
  datedeb:string;
  datefin:string;
  repas:boolean;
  deleted:boolean;
}
