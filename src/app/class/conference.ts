import {Utilisateur} from "./utilisateur";
import {Hotel} from "./hotel";

export class Conference {
  id:string;
  organisateur:Utilisateur;
  nom:string;
  date:string;
  hotel:Hotel;
  idsalle:string;
  sessions:string;
  categorie:string;
  sponsor:string;
  pageweb:string;
  maxpapier:number;
  delaisoumission:string;
  prixticket:string;
  nticket:string;
  terminer:boolean;
  deleted:boolean;
}
