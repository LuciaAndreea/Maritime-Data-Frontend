import { Component, OnInit } from '@angular/core';
import { CountriesvisitedService, CountryVisited } from './services/countriesvisited.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countriesvisited',
  standalone : true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let country of countries">
        {{country.countryName}} - {{country.visitDate}}
      </li>
    </ul>
  `,
  styles: ``
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
