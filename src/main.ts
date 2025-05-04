import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { shipsReducer } from './app/state/ships/ships/ships.reducer';
import { ShipsEffect } from './app/state/ships/ships/ships.effects';
import { voyagesReducer } from './app/state/ships/voyages/voyages.reducer';
import { VoyagesEffects } from './app/state/ships/voyages/voyages.effects';
import { portsReducer } from './app/state/ships/ports/ports.reducer';
import { PortsEffects } from './app/state/ships/ports/ports.effects';
import { countriesReducer } from './app/state/ships/countriesvisited/countries.reducer';
import { CountriesEffect } from './app/state/ships/countriesvisited/countries.effects';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), 
    provideRouter(routes), 
    provideStore({ships: shipsReducer, voyages: voyagesReducer, ports: portsReducer, countries: countriesReducer}), 
    provideEffects([ShipsEffect, VoyagesEffects, PortsEffects, CountriesEffect])]
});
