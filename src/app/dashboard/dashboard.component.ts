import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AuthUser} from "../shared/models/user";
import {StateService} from "../shared/state/state.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user$: Observable<AuthUser | undefined>

  constructor(
    private readonly stateService: StateService
  ) {
    this.user$ = this.stateService.user$;
  }

  async ngOnInit(): Promise<void> {
    // fetch the user profile
  }
}
