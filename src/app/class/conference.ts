import {Utilisateur} from "./utilisateur";

export class Conference {
  id:string;
  organisateur:Utilisateur;
  nom:string;
  date:string;
  hotel:string;
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
}
