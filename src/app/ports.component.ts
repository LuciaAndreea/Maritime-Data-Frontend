import { Component} from '@angular/core';
import { PortsService, Port } from './services/ports.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadPorts } from './state/ships/ports/ports.actions';
import { selectAllPorts } from './state/ships/ports/ports.selectors';
import { OnInit, inject } from '@angular/core';

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
      <div *ngFor="let port of ports$ | async" class="port-card">
        <h3>{{port.name}}</h3>
        <p><strong>Ship Id: {{port.country}}</strong></p>
      </div>
    </div>
    </div>
  `,
  styleUrls: ['./ports.component.css']
})
export class PortsComponent implements OnInit {
  private store = inject(Store);
  ports$ = this.store.select(selectAllPorts);

  ngOnInit(): void {
    console.log('✅ Dispatching loadPorts...');
    this.store.dispatch(loadPorts());

    this.ports$.subscribe(data => {
      console.log('✅ Ports from store:', data);
    });
  }
}
