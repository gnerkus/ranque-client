import { Component } from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {AuthUser} from "../shared/models/user";
import {StateService} from "../shared/services/state/state.service";
import {HeaderComponent} from "../layout/header.component";
import {LeaderboardService} from "../shared/services/leaderboard.service";
import {LeaderboardResponse} from "../shared/models/api";
import {AsyncPipe} from "@angular/common";
import {DashboardLeaderboardComponent} from "./components/dashboard.leaderboard.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    AsyncPipe,
    DashboardLeaderboardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user$: Observable<AuthUser | undefined>;
  leaderboards$: Observable<LeaderboardResponse[]> = EMPTY

  constructor(
    private readonly stateService: StateService,
    private readonly leaderboardService: LeaderboardService
  ) {
    this.user$ = this.stateService.user$;
  }

  async ngOnInit(): Promise<void> {
    this.leaderboards$ = this.leaderboardService.getLeaderboards();
  }
}
