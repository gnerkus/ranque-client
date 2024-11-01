import { Routes } from '@angular/router';
import { DashboardComponent} from "./dashboard/dashboard.component";

// TODO: define a PageNotFoundComponent and set it to the wildcard route
export const routes: Routes = [
  { path: 'home/dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];
