import { Routes } from '@angular/router';
import { DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./auth/login.component";

// TODO: define a PageNotFoundComponent and set it to the wildcard route
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/home', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

