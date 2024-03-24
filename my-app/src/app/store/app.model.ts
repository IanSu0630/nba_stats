export interface IDashboardHostState {
  dashboardState: IDashboardState;
}

export interface IDashboardState {
  id: string;
  mode: DashboardMode;
}

export type DashboardMode = 'view' | 'edit';
