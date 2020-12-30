import {Reservation} from "./reservation";

export class Utilisateur {
  id:string;
  nom:string;
  prenom:string;
  email:string;
  affiliaton:string;
  fonction:string;
  pays:string;
  reservations:Reservation[];
  invitationsenv:string;
  invitationsrecu:string;
  deleted:boolean;
}
