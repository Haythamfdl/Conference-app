import {Utilisateur} from "./utilisateur";
import {Track} from "./track";
import {Conference} from "./conference";

export class Papier {
  id:string;
  premierauteur:Utilisateur;
  auteur:Utilisateur;
  presentateur:Utilisateur;
  conference:Conference;
  evaluations:string;
  track:Track;
  nom:string;
  description:string;
  confirmer:boolean;
  topic:string;
  data:any;
  deleted:boolean;
}
