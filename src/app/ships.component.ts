import { Component, OnInit } from '@angular/core';
import { ShipsService, Ship } from './services/ships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="page-wrapper">
    <h2 class="page-title">Ships</h2>
    <div class="ships-container">
      <div *ngFor="let ship of ships" class="ship-card">
        <h3>{{ship.name}}</h3>
        <p><strong>Max speed:</strong> {{ship.maxSpeed}} km/h</p>
      </div>
    </div>
    </div>
  `,
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit{
  ships: Ship[] = [];

  constructor(private shipService : ShipsService){}
  ngOnInit(): void {
      this.shipService.getShips().subscribe(data =>{
        this.ships = data;
      })
  }
}
