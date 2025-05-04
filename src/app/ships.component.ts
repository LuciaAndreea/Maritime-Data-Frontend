import { Component, OnInit } from '@angular/core';
import { ShipsService, Ship } from './services/ships.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadShips } from './state/ships/ships.actions';
import { selectAllShips } from './state/ships/ships.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="page-wrapper">
    <h2 class="page-title">Ships</h2>
    <div class="ships-container">
      <div *ngFor="let ship of ships$ | async" class="ship-card">
        <h3>{{ship.name}}</h3>
        <p><strong>Max speed:</strong> {{ship.maxSpeed}} km/h</p>
      </div>
    </div>
    </div>
  `,
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit{
  ships$ : Observable<Ship[]>;
  

  constructor(private store : Store){
    this.ships$ = this.store.select(selectAllShips);
  }
  ngOnInit(): void {
    console.log('✅ ShipsComponent initialized');
      this.store.dispatch(loadShips());
      }
  }

