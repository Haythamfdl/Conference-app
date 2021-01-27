import {Conference} from "./conference";

export class Topic {
  id: string;
  nom: string;
  description: string;
  conference: Conference;
  deleted: boolean;
}
