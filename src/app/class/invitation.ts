import {Utilisateur} from "./utilisateur";
import {Conference} from "./conference";

export class Invitation {
  id:string;
  inviteur:Utilisateur;
  invitee:Utilisateur;
  conference:Conference;
  accepter:boolean;
  message:string;
  date:string;
}
