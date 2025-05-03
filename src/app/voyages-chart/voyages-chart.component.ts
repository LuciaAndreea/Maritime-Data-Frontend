import { Component,OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import {NgChartsModule, BaseChartDirective} from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartConfiguration,ChartType, ChartOptions } from 'chart.js';
import { VoyageChartService } from '../services/voyage-chart.service';

@Component({
  selector: 'app-voyages-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './voyages-chart.component.html',
  styleUrl: './voyages-chart.component.css'
})
export class VoyagesChartComponent implements OnInit{
  public barChartOptions : ChartOptions<'bar'> ={
    responsive : true,
  };

  public barChartType : "bar" = 'bar';

  public barChartData : ChartConfiguration<'bar'>['data'] ={
    labels : [],
    datasets :[
      {
        data : [],
        label: 'Number of voyages started from each port',
      },
    ],
  };

  public isLoading = true; // adding a flag for loading
  @ViewChild(BaseChartDirective) chart ?: BaseChartDirective; //force the re-render when data is completed

  constructor (private voyageService : VoyageChartService, private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    this.voyageService.getVoyagesData().subscribe((data: any[]) => {
      const portCounts: { [port: string]: number } = {};
      data.forEach((voyage: any) => {
        const port = voyage.departurePortName;
        portCounts[port] = (portCounts[port] || 0) + 1;
      });
    
      this.barChartData.labels = Object.keys(portCounts);
      this.barChartData.datasets[0].data = Object.values(portCounts);

      this.isLoading = false;

      this.cdr.detectChanges(); //forcing to modify the changes and update the DOM before update on chart
      this.chart?.update();
    });
  }
  
}
