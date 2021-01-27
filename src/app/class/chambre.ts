import {Hotel} from "./hotel";

export class Chambre {
  id: string;
  numero: string;
  nbpersonne: number;
  prix: number;
  type: string;
  disponible: boolean;
  hotel: Hotel;
  deleted: boolean;
}
