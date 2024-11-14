import { Routes } from '@angular/router';
import { DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./auth/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./auth/register.component";

// TODO: define a PageNotFoundComponent and set it to the wildcard route
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard/home', component: DashboardComponent },
  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

