import { createAction, props } from "@ngrx/store";
import { CountryVisited } from "../../../services/countriesvisited.service";

export const loadCountries = createAction('[Countries] Load Countries');
export const loadCountriesSucces = createAction('[Countries] Load Countries Succes', props<{countries : CountryVisited[]}>());
export const loadCountriesFailure = createAction('[Countries] Load Countries Failure', props<{ error: any }>());