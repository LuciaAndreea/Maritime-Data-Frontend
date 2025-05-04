import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VoyageState } from "./voyages.reducer";

export const selectVoyageState = createFeatureSelector<VoyageState>('voyages');

export const selectAllVoyages = createSelector(
    selectVoyageState,
    (state) => state.voyages
);