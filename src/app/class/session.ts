import {Conference} from "./conference";

export class Session {
  id:string;
  nom:string;
  conference:Conference;
  tracks:string;
  datedeb:string;
  datefin:string;
  salle:string;
  termine:boolean;
  deleted:boolean;
}
