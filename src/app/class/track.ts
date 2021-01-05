import {Session} from "./session";
import {Papier} from "./papier";

export class Track {
  id:string;
  nom:string;
  datedeb:string;
  datefin:string;
  papier:Papier;
  terminer:boolean;
  session:Session;
  deleted:boolean;
}
