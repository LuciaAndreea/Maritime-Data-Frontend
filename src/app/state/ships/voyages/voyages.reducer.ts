import { createReducer, on } from "@ngrx/store";
import { loadVoyages, loadVoyagesSucces, loadVoyagesFailure } from "./voyages.actions";
import { Voyage } from "../../../services/voyages.service";

export interface VoyageState{
    voyages : Voyage[];
}

const initialState : VoyageState ={
    voyages: [],
};

export const voyagesReducer = createReducer(
    initialState,
    on(loadVoyages, (state) => state),
    on(loadVoyagesSucces, (state, {voyages}) =>({
        ...state, voyages,
    }))
);