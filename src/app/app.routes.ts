import { Routes } from '@angular/router';
import { DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./auth/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./auth/register.component";
import {HomeComponent} from "./home/home.component";
import {authGuard} from "./auth/auth-guard";

// TODO: define a PageNotFoundComponent and set it to the wildcard route
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard/home', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

