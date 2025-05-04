import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountriesvisitedService } from '../../../services/countriesvisited.service';
import { loadCountries, loadCountriesFailure, loadCountriesSucces } from './countries.actions';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CountriesEffect {
  private actions$ = inject(Actions);
  private countriesService = inject(CountriesvisitedService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      mergeMap(() =>
        this.countriesService.getCountriesVisited().pipe(
          map(countries => {
            console.log('✅ Countries from API:', countries);
            return loadCountriesSucces({ countries });
          }),
          catchError(error => of(loadCountriesFailure({ error })))
        )
      )
    )
  );
}