import {Utilisateur} from "./utilisateur";
import {Hotel} from "./hotel";
import {Session} from "./session";

export class Conference {
  id:string;
  organisateur:Utilisateur;
  nom:string;
  date:string;
  hotel:Hotel;
  idsalle:string;
  sessions:Session[];
  categorie:string;
  sponsor:string;
  pageweb:string;
  maxpapier:number;
  delaisoumission:string;
  prixticket:number;
  nticket:number;
  terminer:boolean;
  deleted:boolean;
}
