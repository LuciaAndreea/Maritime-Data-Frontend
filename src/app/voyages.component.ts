import { Component, OnInit, inject } from '@angular/core';
import { VoyagesService, Voyage } from './services/voyages.service';
import { CommonModule } from '@angular/common';
import { ShipsService } from './services/ships.service';
import { Store } from '@ngrx/store';
import { Ship } from './services/ships.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadVoyages } from './state/ships/voyages/voyages.actions';
import { loadShips } from './state/ships/ships/ships.actions';
import { selectAllVoyages } from './state/ships/voyages/voyages.selectors';
import { selectAllShips } from './state/ships/ships/ships.selector';

@Component({
  selector: 'app-voyages',
  standalone : true,
  imports: [CommonModule],
  template: `
    <div class="page-wrapper">
      <h2 class="page-title">Voyages</h2>
      <div class="info-box">
        <p>All the ships and all of their voyages this year</p>
      </div>
      <div class="voyages-container">
        <div *ngFor="let voyage of voyagesWithShipName$ | async" class="voyage-card">
          <h3>{{voyage.shipName}}</h3>
          <p><strong>Voyage Date: </strong>{{voyage.voyageData | date}}</p>
          <p><strong>Departure Port: </strong>{{voyage.departurePortName}}</p>
          <p><strong>Arrival Port: </strong>{{voyage.arrivalPortName}}</p>
          <p><strong>Start Date: </strong>{{voyage.startDate | date}}</p>
          <p><strong>End Date: </strong>{{voyage.endDate | date}}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {
  private store = inject(Store);

  voyagesWithShipName$: Observable<any[]>;

  constructor() {
    const voyages$ = this.store.select(selectAllVoyages);
    const ships$ = this.store.select(selectAllShips);

    this.voyagesWithShipName$ = combineLatest([voyages$, ships$]).pipe(
      map(([voyages, ships]) => {
        console.log('✅ Voyages from store:', voyages);
        console.log('✅  Ships from store:', ships);

        const shipNamesMap: { [key: number]: string } = {};
        ships.forEach((ship) => {
          shipNamesMap[ship.id] = ship.name;
        });

        const result = voyages.map((voyage) => ({
          ...voyage,
          shipName: shipNamesMap[voyage.shipId] || 'Unknown Ship',
        }));

        console.log('✅ Combined voyages with ship names:', result);
        return result;
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadShips());
    this.store.dispatch(loadVoyages());
    console.log('✅ Dispatched loadShips and loadVoyages');
  }
}
