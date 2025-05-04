import { createAction, props } from "@ngrx/store";
import { Port } from "../../../services/ports.service";

export const loadPorts = createAction('[Ports] Load Ports');
export const loadPortsSucces = createAction(
    '[Ports] Load Ports Succes', props<{ports : Port[]}>());
export const loadPortsFailure = createAction(
    '[Ports] Load Ports Failure', props<{error : any}>());