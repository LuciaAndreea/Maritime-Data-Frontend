import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShipsComponent } from './ships.component';
import { VoyagesComponent } from './voyages.component';
import { PortsComponent } from './ports.component';
import { CountriesvisitedComponent } from './countriesvisited.component';
import { VoyagesChartComponent } from './voyages-chart/voyages-chart.component';

export const routes: Routes = [
    {path : "ships", component: ShipsComponent},
    {path : 'voyages', component : VoyagesComponent},
    {path : "countriesvisited", component: CountriesvisitedComponent},
    {path : "ports" , component: PortsComponent},
    {path : 'voyages-chart', component : VoyagesChartComponent},
    {path :'', redirectTo: '/ships', pathMatch: "full"}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}
