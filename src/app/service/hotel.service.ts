import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../class/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/hotels';
  }

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.Url);
  }

  public findbyId(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(this.Url + "/" + id);
  }

  public save(hotel: Hotel) {
    return this.http.post<Hotel>(this.Url, hotel);
  }

  public update(hotel: Hotel) {
    return this.http.put<Hotel>(this.Url, hotel, this.httpOptions);
  }
}
