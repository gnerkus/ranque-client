import {Component, Input} from "@angular/core";
import {Leaderboard} from "../../shared/models/leaderboard";

@Component({
  selector: 'dashboard-leaderboard',
  standalone: true,
  templateUrl: 'dashboard.leaderboard.component.html'
})

export class DashboardLeaderboardComponent {
  @Input() leaderboard: Leaderboard | undefined;
}
