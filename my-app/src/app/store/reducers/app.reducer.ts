import { on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';

import * as actions from '../actions/app.actions';
import { initialState } from '../app.state';
import { IDashboardHostState } from '../app.model';

export const appFeatureKey = 'app';

export const appReducer = createImmerReducer(
  initialState,
  on(actions.updateDashboardMode, (state, { mode }): IDashboardHostState => {
    state.dashboardState.mode = mode;
    return state;
  })
);
