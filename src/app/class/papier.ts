import {Utilisateur} from "./utilisateur";
import {Track} from "./track";
import {Conference} from "./conference";
import {Topic} from "./topic";
import {Evaluation} from "./evaluation";

export class Papier {
  id: string;
  premierauteur: Utilisateur;
  auteur: Utilisateur;
  presentateur: Utilisateur;
  conference: Conference;
  evaluations: Evaluation[];
  track: Track;
  nom: string;
  description: string;
  confirmer: boolean;
  topic: Topic;
  data: any;
  lien: string;
  deleted: boolean;
}
