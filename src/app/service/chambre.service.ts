import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chambre} from "../class/chambre";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/chambres';
  }

  public findAll(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.Url);
  }

  public findAllbyHotel(id: string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.Url + "/" + id);
  }

  public findAlldispo(id: string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.Url + "/disponible/" + id);
  }

  public save(chambre: Chambre): Observable<Object> {
    return this.http.post(this.Url, chambre, this.httpOptions);
  }

  public update(chambre: Chambre): Observable<Object> {
    return this.http.put(this.Url, chambre, this.httpOptions);
  }

}
