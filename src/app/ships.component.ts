import { Component, OnInit } from '@angular/core';
import { ShipsService, Ship } from './services/ships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Ships</h2>
    <ul>
      <li *ngFor="let ship of ships">
        {{ship.name}} - {{ship.maxSpeed}} knots
      </li>
    </ul>
  `,
  styles: ``
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
