import { Routes } from '@angular/router';
import { DashboardComponent} from "./dashboard/dashboard.component";

// TODO: define a PageNotFoundComponent and set it to the wildcard route
export const routes: Routes = [
  { path: 'dashboard/home', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];
