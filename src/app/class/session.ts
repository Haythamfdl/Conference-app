import {Conference} from "./conference";
import {Utilisateur} from "./utilisateur";
import {Track} from "./track";

export class Session {
  id: string;
  nom: string;
  conference: Conference;
  chair: Utilisateur;
  tracks: Track[];
  datedeb: string;
  datefin: string;
  salle: string;
  terminer: boolean;
  deleted: boolean;
}
