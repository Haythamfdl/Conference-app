import {Reservation} from "./reservation";
import {Invitation} from "./invitation";

export class Utilisateur {
  id:string;
  nom:string;
  prenom:string;
  email:string;
  pass:string;
  affiliaton:string;
  fonction:string;
  pays:string;
  reservations:Reservation[];
  invitationsenv:Invitation[];
  invitationsrecu:Invitation[];
  deleted:boolean;
  isadmin:boolean;
}
