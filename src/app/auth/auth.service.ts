import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StateService} from "../shared/state/state.service";
import {Observable, map, tap} from "rxjs";
import {AuthUser} from "../shared/models/user";
import {environment} from "../../environments/environment";
import {LoginUserRequest, RegisterUserRequest, UserResponse} from "../shared/models/api";

// make this service available from the root
// providedIn: 'any' makes the service lazy-loaded
@Injectable({ providedIn: 'root'})
export class AuthenticationService {
  constructor(
    private readonly http: HttpClient,
    private readonly stateService: StateService
  ) {}

  /**
   * Attempts to log the user in and if successful, sets the user in application state
   * @param loginUser User to log in
   * @returns Login user response
   */
  login(loginUser: LoginUserRequest): Observable<AuthUser> {
    const url = `${environment.apiUrl}/api/auth/login`;
    return this.http.post<UserResponse>(url, loginUser).pipe(
      map(response => response),
      tap(user => this.stateService.setUser(user)),
    );
  }

  register(registerUser: RegisterUserRequest): Observable<AuthUser> {
    const url = `${environment.apiUrl}/api/auth`;
    return this.http.post<UserResponse>(url, registerUser).pipe(
      map(response => response),
    );
  }
}
