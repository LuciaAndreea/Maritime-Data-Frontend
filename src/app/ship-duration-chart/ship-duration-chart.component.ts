import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { VoyageChartService } from '../services/voyage-chart.service';
import { ShipsService } from '../services/ships.service';
import { firstValueFrom } from 'rxjs';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ship-duration-chart',
  standalone : true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './ship-duration-chart.component.html',
  styleUrl: './ship-duration-chart.component.css'
})
export class ShipDurationChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart? : BaseChartDirective;
  public barChartOptions : ChartOptions<'bar'> ={
    responsive : true,
  };

  public barChartType : 'bar' = 'bar';

  public barChartData : ChartConfiguration<'bar'>['data'] ={
    labels: [],
    datasets :[
      {
        data :[],
        label : "Total voyage duration in hours"
      }
    ]
  };

  public isLoading = true;

  constructor(private voyageService : VoyageChartService, private shipService : ShipsService, private cdRef: ChangeDetectorRef){}

  async ngOnInit(): Promise<void> {
    try {
      const voyages = await firstValueFrom(this.voyageService.getVoyagesData());
      const ships = await firstValueFrom(this.shipService.getShips());
  
      const durationsMap: { [shipId: number]: number } = {};
  
      voyages.forEach((voyage: {
        shipId: number;
        startDate: string;
        endDate: string;
      }) => {
        const start = new Date(voyage.startDate);
        const end = new Date(voyage.endDate);
        const durationHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        durationsMap[voyage.shipId] = (durationsMap[voyage.shipId] || 0) + durationHours;
      });
  
      this.barChartData.labels = ships.map((ship: { id: number; name: string }) => ship.name);
      this.barChartData.datasets[0].data = ships.map((ship: { id: number }) => durationsMap[ship.id] || 0);

      this.cdRef.detectChanges();
      this.chart?.update();
    } catch (error) {
      console.error('Error loading chart data:', error);
    }
  }

}
