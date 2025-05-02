import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CountryVisited{
  id: number,
  countryId : number,
  visitDate: string,
  countryName: string;
}


@Injectable({
  providedIn: 'root'
})
export class CountriesvisitedService {
  private apiUrl = "https://localhost:5005/api/countriesvisited"
  constructor(private http: HttpClient) { }
  getCountriesVisited() : Observable<CountryVisited[]>{
    return this.http.get<CountryVisited[]>(this.apiUrl);
  }
}
