import {Chambre} from "./chambre";
import {SalleConference} from "./salle-conference";

export class Hotel {
  id:string;
  nom:string;
  adress:string;
  ville:string;
  chambres:Chambre[];
  saleconf:SalleConference[];
}
