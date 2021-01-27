import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../class/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/reservations';
  }

  public findAll(utilisateur): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.Url + "/" + utilisateur);
  }

  public save(reservation: Reservation): Observable<Object> {
    return this.http.post(this.Url, reservation, this.httpOptions);
  }

  public update(reservation: Reservation): Observable<Object> {
    return this.http.put(this.Url, reservation, this.httpOptions);
  }
}
