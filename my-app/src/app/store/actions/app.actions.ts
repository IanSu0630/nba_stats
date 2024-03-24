import { createAction, props } from "@ngrx/store";

import * as types from './action-types';
import { DashboardMode } from "../app.model";

export const updateDashboardMode = createAction(
    types.UPDATE_DASHBOARD_MODE_TYPE,
    props<{ mode: DashboardMode }>(),
  );