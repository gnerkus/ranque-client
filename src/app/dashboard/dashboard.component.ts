import { Component } from '@angular/core';
import {Button, ButtonModule} from 'primeng/button'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
