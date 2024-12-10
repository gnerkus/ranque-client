import { Routes } from '@angular/router';
import { DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./auth/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./auth/register.component";
import {HomeComponent} from "./home/home.component";
import {CanActivateDashboard, CanAuth} from "./auth/auth-guard";

// TODO: define a PageNotFoundComponent and set it to the wildcard route
export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [CanAuth], providers: [CanAuth] },
  { path: 'register', component: RegisterComponent, canActivate: [CanAuth], providers: [CanAuth] },
  { path: 'dashboard/home', component: DashboardComponent, canActivate: [CanActivateDashboard], providers: [CanActivateDashboard] },
  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

