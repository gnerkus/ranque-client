import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Leaderboard} from "../models/leaderboard";
import {environment} from "../../../environments/environment";
import {LeaderboardResponse} from "../models/api";

@Injectable({ providedIn: 'root'})
export class LeaderboardService {

  orgIdCookieName = "RANQUE_org"
  orgId = ""

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) {
    this.orgId = this.cookieService.get(this.orgIdCookieName);
  }

  getLeaderboards(): Observable<LeaderboardResponse[]> {
    const url = `${environment.apiUrl}/api/orgs/${this.orgId}/leaderboards`;
    return this.http.get<LeaderboardResponse[]>(url).pipe(
      map(response => response)
    );
  }
}
