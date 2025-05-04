import { createAction, props } from "@ngrx/store";
import { Voyage } from "../../../services/voyages.service";

export const loadVoyages = createAction('[Voyages] Load Voyages');
export const loadVoyagesSucces = createAction('[Voyages] Load Voyages Succes', props<{voyages : Voyage[]}>());

export const loadVoyagesFailure = createAction('[Voyages] Load Voyages Failure', props<{error : any}>());