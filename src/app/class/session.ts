import {Conference} from "./conference";
import {Utilisateur} from "./utilisateur";

export class Session {
  id: string;
  nom: string;
  conference: Conference;
  chair: Utilisateur;
  tracks: string;
  datedeb: string;
  datefin: string;
  salle: string;
  terminer: boolean;
  deleted: boolean;
}
