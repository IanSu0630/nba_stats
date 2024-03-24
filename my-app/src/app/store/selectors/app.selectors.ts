import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IDashboardHostState } from '../app.model';

export const appFeatureKey = 'app';

const selectDashboardHost =
  createFeatureSelector<IDashboardHostState>(appFeatureKey);

export const selectDashboardState = createSelector(
  selectDashboardHost,
  (state) => state.dashboardState
);

export const selectMode = createSelector(
  selectDashboardState,
  (state) => state.mode
);
