import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { shipsReducer } from './app/state/ships/ships.reducer';
import { ShipsEffect } from './app/state/ships/ships.effects';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), 
    provideRouter(routes), 
    provideStore({ships: shipsReducer}), 
    provideEffects([ShipsEffect])]
});
