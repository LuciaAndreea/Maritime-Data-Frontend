import { Component,OnInit} from '@angular/core';
import { PortsService, Port } from './services/ports.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ports-container">
    <h2 class="ports-title">Ports</h2>
    <div class="info-box">
      <p>List with all the ports available</p>
    </div>
    <div class="ports-list">
      <div *ngFor="let port of ports" class="port-card">
        <h3>{{port.name}}</h3>
        <p><strong>Ship Id: {{port.country}}</strong></p>
      </div>
    </div>
    </div>
  `,
  styleUrls: ['./ports.component.css']
})
export class PortsComponent implements OnInit{
  ports : Port[] = [];

  constructor(private portService : PortsService){}
  ngOnInit(): void {
    this.portService.getPorts().subscribe(data =>{
      this.ports = data;
    })
}
}
