import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoyageChartService {
  private apiUrl = "https://localhost:5005/api/voyages";
  constructor(private http : HttpClient) { }

  getVoyagesData() : Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
