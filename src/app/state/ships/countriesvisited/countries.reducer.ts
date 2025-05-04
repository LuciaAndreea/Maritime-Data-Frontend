import { createReducer, on } from '@ngrx/store';
import { loadCountries, loadCountriesSucces, loadCountriesFailure } from './countries.actions';
import { CountryVisited } from '../../../services/countriesvisited.service';

export interface CountriesState {
  countries: CountryVisited[];
  error: any;
}

export const initialState: CountriesState = {
  countries: [],
  error: null
};

export const countriesReducer = createReducer(
  initialState,
  on(loadCountries, state => ({ ...state })),
  on(loadCountriesSucces, (state, { countries }) => ({ ...state, countries })),
  on(loadCountriesFailure, (state, { error }) => ({ ...state, error }))
);