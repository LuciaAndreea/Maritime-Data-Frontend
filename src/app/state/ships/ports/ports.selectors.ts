import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PortsState } from "./ports.reducer";

export const selectPortsState = createFeatureSelector<PortsState>('ports');
export const selectAllPorts = createSelector(
    selectPortsState,
    (state) => state.ports
);