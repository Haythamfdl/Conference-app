import {Utilisateur} from "./utilisateur";
import {Papier} from "./papier";

export class Evaluation {
  id:string;
  evaluateur:Utilisateur;
  papier:Papier;
  revue:string;
  commentaire:string;
  note:string;
  date:string;
  deleted:boolean;
}
