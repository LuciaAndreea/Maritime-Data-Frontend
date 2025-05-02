import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Voyage{
  id: number,
  voyageData: string,
  shipId: number,
  startDate: string,
  endDate: string,
  departurePortName: string,
  arrivalPortName: string;
}

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  private apiUrl = "https://localhost:5005/api/voyages";
  constructor(private http: HttpClient) { }
  getVoyages() : Observable<Voyage[]>{
    return this.http.get<Voyage[]>(this.apiUrl);
  }
}
