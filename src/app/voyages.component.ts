import { Component, OnInit } from '@angular/core';
import { VoyagesService, Voyage } from './services/voyages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voyages',
  standalone : true,
  imports: [CommonModule],
  template: `
    <h2>Voyages</h2>
    <ul>
      <li *ngFor="let v of voyages">
        {{v.voyageData}} - {{v.departurePortName}} to {{v.arrivalPortName}}
      </li>
    </ul>
  `,
  styles: ``
})
export class VoyagesComponent implements OnInit {
voyages : Voyage[] = [];
constructor(private voyageService : VoyagesService){}

ngOnInit(): void {
    this.voyageService.getVoyages().subscribe(data => this.voyages = data);
}
}
