import {inject, Injectable} from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { PortsService } from "../../../services/ports.service";
import { loadPorts, loadPortsSucces, loadPortsFailure } from "./ports.actions";
import { mergeMap, map, catchError} from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PortsEffects{
    private actions$ = inject(Actions);
    private portsService = inject(PortsService);

    loadPorts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadPorts),
        mergeMap(() =>
        this.portsService.getPorts().pipe(
            map((ports) =>{
                console.log("✅ Ports from API: ", ports);
                return loadPortsSucces({ports});
            }),
            catchError((error) => of(loadPortsFailure({error})))
        ))
    )
);
}