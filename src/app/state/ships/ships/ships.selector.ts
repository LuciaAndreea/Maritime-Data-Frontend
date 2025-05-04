import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShipsState } from "./ships.reducer";

export const selectShipsState = createFeatureSelector<ShipsState>('ships');
export const selectAllShips = createSelector(
    selectShipsState,
    (state : ShipsState) => state.ships
);