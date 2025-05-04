import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from './countries.reducer';

export const selectCountriesState = createFeatureSelector<CountriesState>('countries');
export const selectAllCountries = createSelector(selectCountriesState, state => state.countries);