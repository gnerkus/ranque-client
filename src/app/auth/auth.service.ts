import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StateService} from "../shared/services/state/state.service";
import {Observable, map, tap} from "rxjs";
import {AuthResponse} from "../shared/models/user";
import {environment} from "../../environments/environment";
import {LoginUserRequest, RegisterUserRequest, UserResponse} from "../shared/models/api";
import {CookieOptions, CookieService} from "ngx-cookie-service";

// make this service available from the root
// providedIn: 'any' makes the service lazy-loaded
@Injectable({ providedIn: 'root'})
export class AuthenticationService {
  // todo: move to app-wide constants file
  cookieOptions: CookieOptions = {
    sameSite: 'Lax',
    path: '/',
    secure: true
  }

  // todo: move to app-wide constants file
  cookiePrefix = "RANQUE_AUTH"

  constructor(
    private readonly http: HttpClient,
    private readonly stateService: StateService,
    private readonly cookieService: CookieService
  ) {}

  /**
   * Attempts to log the user in and if successful, sets the user in application state
   * @param loginUser User to log in
   * @returns Login user response
   */
  login(loginUser: LoginUserRequest): Observable<AuthResponse> {
    const url = `${environment.apiUrl}/api/auth/login`;
    return this.http.post<UserResponse>(url, loginUser).pipe(
      map(response => response),
      tap(user => {
        this.cookieService.set(`${this.cookiePrefix}_accessToken`, user.accessToken, this.cookieOptions)
        this.cookieService.set(`${this.cookiePrefix}_refreshToken`, user.refreshToken, this.cookieOptions)
        this.stateService.setUser({
          username: user.username
        });
      }),
    );
  }

  register(registerUser: RegisterUserRequest): Observable<AuthResponse> {
    const url = `${environment.apiUrl}/api/auth`;
    return this.http.post<UserResponse>(url, registerUser).pipe(
      map(response => response),
    );
  }
}
