import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ship{
  id:number;
  name:string;
  maxSpeed:number;
}

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private apiUrl = "https://localhost:5005/api/ships";
  constructor(private http: HttpClient){}
    getShips() : Observable<Ship[]>{
      return this.http.get<Ship[]>(this.apiUrl);
    }
}
