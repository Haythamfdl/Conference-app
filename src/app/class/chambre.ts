import {Hotel} from "./hotel";

export class Chambre {
  id:string;
  etage:string;
  nbpersonne:number;
  prix:number;
  type:string;
  disponible:boolean;
  hotel:Hotel;
}
