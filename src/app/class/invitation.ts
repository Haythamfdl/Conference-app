import {Utilisateur} from "./utilisateur";
import {Conference} from "./conference";

export class Invitation {
  id:string;
  inviteur:Utilisateur;
  inviter:Utilisateur;
  conference:Conference;
  accepter:boolean;
  Message:string;
  date:string;
}
