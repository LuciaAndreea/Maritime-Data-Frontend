import { Component, OnInit } from '@angular/core';
import { CountriesvisitedService, CountryVisited } from './services/countriesvisited.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countriesvisited',
  standalone : true,
  imports: [CommonModule],
  template: `
   <div class="countries-container">
    <h2 class="countries-title">Countries Visited</h2>
    <div class="info-box">
      <p>List of countries visited by ships</p>
    </div>
    <div class="countries-list"> 
      <div *ngFor="let country of countries" class="country-card">
        <h3>{{country.countryName}}</h3>
        <p><strong>Visited Date : </strong>{{country.visitDate | date}}</p>
      </div>
    </div>
   </div>
  `,
  styleUrls: ['./countriesvisited.component.css']
})
export class CountriesvisitedComponent implements OnInit {
  countries : CountryVisited[] = [];

  constructor(private countryService: CountriesvisitedService){}
  ngOnInit(): void {
      this.countryService.getCountriesVisited().subscribe(data =>{
        this.countries = data;
      })
  }
}
