import { Component,OnInit} from '@angular/core';
import { PortsService, Port } from './services/ports.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Ports</h2>
    <ul>
      <li *ngFor="let port of ports">
        {{port.name}} ({{ port.country}})
      </li>
    </ul>
  `,
  styles: ``
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
