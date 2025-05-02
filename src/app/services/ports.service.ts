import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Port{
  id : number,
  name : string,
  country : string;
}

@Injectable({
  providedIn: 'root'
})
export class PortsService {
  private apiUrl = "https://localhost:5005/api/ports";
  constructor(private http: HttpClient) { }
  getPorts() : Observable<Port[]>{
    return this.http.get<Port[]>(this.apiUrl);
  }
}
