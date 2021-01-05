import {Utilisateur} from "./utilisateur";
import {Track} from "./track";

export class Papier {
  id:string;
  premierauteur:Utilisateur;
  auteur:Utilisateur;
  presentateur:Utilisateur;
  evaluations:string;
  track:Track;
  nom:string;
  description:string;
  confirmer:boolean;
  topic:string;
  data:any;
  deleted:boolean;
}
