import { inject, Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { VoyagesService } from '../../../services/voyages.service';
import { loadVoyages, loadVoyagesSucces, loadVoyagesFailure } from './voyages.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
    export class VoyagesEffects{
        private actions$ = inject(Actions);
        private voyagesService = inject(VoyagesService);

        loadVoyages$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadVoyages),
            mergeMap(() =>
            this.voyagesService.getVoyages().pipe(
                map((voyages) => loadVoyagesSucces({ voyages})),
                catchError((error) => of(loadVoyagesFailure({error})))
            ))
        ));
    }
