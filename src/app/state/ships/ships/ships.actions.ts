import { createAction, props } from "@ngrx/store";
import { Ship } from "../../../services/ships.service";

export const loadShips = createAction('[Ships] Load Ships');
export const loadShipsSucces = createAction(
    '[Ships] Load Ships Succes',
    props<{ ships : Ship[] }>());
export const loadShipsFailure = createAction
('[Ships] Load Ships Failure',
    props<{ error: any }>());