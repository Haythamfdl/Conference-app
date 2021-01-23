import {Chambre} from "./chambre";
import {SalleConference} from "./salle-conference";

export class Hotel {
  id:string;
  nom:string;
  address:string;
  ville:string;
  chambres:Chambre[];
  saleconf:SalleConference[];
  deleted:boolean;
}
