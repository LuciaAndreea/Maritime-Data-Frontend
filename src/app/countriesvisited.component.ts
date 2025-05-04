import { Component, OnInit, inject } from '@angular/core';
import { CountriesvisitedService, CountryVisited } from './services/countriesvisited.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountries } from './state/ships/countriesvisited/countries.actions';
import { selectAllCountries } from './state/ships/countriesvisited/countries.seelctors';
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
      <div *ngFor="let country of countries$ | async" class="country-card">
        <h3>{{country.countryName}}</h3>
        <p><strong>Visited Date : </strong>{{country.visitDate | date}}</p>
      </div>
    </div>
   </div>
  `,
  styleUrls: ['./countriesvisited.component.css']
})
export class CountriesvisitedComponent implements OnInit {
  private store = inject(Store);
  countries$: Observable<CountryVisited[]> = this.store.select(selectAllCountries);

  ngOnInit(): void {
    console.log('✅ Dispatching loadCountries...');
    this.store.dispatch(loadCountries());
    this.countries$.subscribe(data => {
      console.log('✅ Countries from store:', data);
    });
  }
}
