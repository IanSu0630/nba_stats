import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashbard/dashboard.component';

export const routes: Routes = [
  {
    path: 'my-app',
    title: 'My-app',
    component: AppComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        component: DashboardComponent,
      },
    ],
  },
  { path: '', redirectTo: '/my-app', pathMatch: 'full' },
  { path: '**', component: AppComponent },
];
