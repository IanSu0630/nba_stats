import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {
  EMPTY,
  Observable,
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
} from 'rxjs';
import * as types from '../actions/action-types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from '../../app.service';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private service: AppService) {}

  // fetchChart$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(types.UPDATE_DASHBOARD_MODE_TYPE),
  //     mergeMap(() => {
  //       return this.service.getAll().pipe(
  //         map((chart) => ({
  //           type: types.UPDATE_DASHBOARD_MODE_TYPE,
  //           chart,
  //         })),
  //         catchError(() => of({ type: types.UPDATE_DASHBOARD_MODE_TYPE })),
  //       );
  //     })
  //   );
  // });

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies Page] Load Movies'),
      exhaustMap(() =>
        this.service.getAll().pipe(
          map((movies) => ({
            type: '[Movies API] Movies Loaded Success',
            payload: movies,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
