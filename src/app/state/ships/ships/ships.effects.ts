import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ShipsService } from "../../../services/ships.service";
import { loadShips, loadShipsFailure, loadShipsSucces } from "./ships.actions";
import { mergeMap, map, catchError, tap} from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class ShipsEffect {
  private actions$ = inject(Actions);
  private shipsService = inject(ShipsService);
  
  constructor() {
    console.log('✅ ShipsEffect created!');
  }

  loadShips$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadShips),
      tap(() => console.log('✅ loadShips action')),
      mergeMap(() =>
        this.shipsService.getShips().pipe(
          tap((ships) => console.log('✅ Ships from API:', ships)),
          map((ships) => loadShipsSucces({ ships })),
          catchError((error) => of(loadShipsFailure({ error })))
        )
      )
    )
  );
}

