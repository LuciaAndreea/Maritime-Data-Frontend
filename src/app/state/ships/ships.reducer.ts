import { createReducer, on } from "@ngrx/store";
import { loadShipsFailure, loadShipsSucces } from "./ships.actions";
import { Ship } from "../../services/ships.service";

export interface ShipsState{
    ships: Ship[];
    error : any;
}

export const initialState: ShipsState ={
    ships: [],
    error : null
};

export const shipsReducer = createReducer(
    initialState,
    on(loadShipsSucces, (state, { ships }) => ({
      ...state,
      ships: ships,
    })),
    on(loadShipsFailure, (state, { error }) => ({
      ...state,
      error: error,
    }))
  );