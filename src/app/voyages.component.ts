import { Component, OnInit } from '@angular/core';
import { VoyagesService, Voyage } from './services/voyages.service';
import { CommonModule } from '@angular/common';
import { ShipsService } from './services/ships.service';

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
        <div *ngFor="let voyage of voyages" class="voyage-card">
          <h3>{{getShipName(voyage.shipId)}}</h3>
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
voyages : Voyage[] = [];
ships: any[] =[];
shipsNamesMap : {[key:number]: string} ={};
constructor(private voyageService : VoyagesService, private shipsService: ShipsService){}

ngOnInit(): void {
  this.voyageService.getVoyages().subscribe((data: Voyage[]) =>{
    this.voyages = data;
  })
   this.shipsService.getShips().subscribe((data:any[] ) =>{
    this.ships = data;
    this.ships.forEach((ship) =>{
      this.shipsNamesMap[ship.id] = ship.name;
    })
   })
}

getShipName(shipId: number) : string{
  return this.shipsNamesMap[shipId] || 'Unknown Ship';
}
}
