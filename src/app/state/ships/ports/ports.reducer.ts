import { createReducer, on } from "@ngrx/store";
import { loadPorts, loadPortsSucces, loadPortsFailure } from "./ports.actions";
import { Port } from "../../../services/ports.service";

export interface PortsState{
    ports : Port[];
    error : any
}

export const initialState: PortsState ={
    ports: [],
    error: null
};

export const portsReducer = createReducer(
    initialState,
    on(loadPorts, (state) => ({...state})),
    on(loadPortsSucces, (state, {ports}) => ({...state, ports})),
    on(loadPortsFailure, (state, { error }) => ({ ...state, error }))
);