import { AuthUser } from '../models/user';
import { Observable } from 'rxjs';
import { State, initialState } from '../models/state';
import { Store } from './store';
import {deepFreeze, select$} from "../utils";
import {JwtStorageService} from "../jwtStorage.service";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StateService {
  private readonly state$: Store<State>;
  private lastState: State;

  /**
   * User observable
   */
  user$: Observable<AuthUser | undefined>;

  /**
   * Creates a new instance
   */
  constructor(
    private readonly jwtStorageService: JwtStorageService,
  ) {
    this.state$ = new Store(initialState);
    this.lastState = initialState;
    this.user$ = select$(this.state$, state => state.user);
  }

  /**
   * Sets the state (deep freezes it first)
   * @param state State to set
   */
  setState(state: State): void {
    this.state$.next(deepFreeze(state));
    this.lastState = state;
  }

  getLastState(): State {
    return this.lastState;
  }

  /**
   * Sets the user in the state
   * @param user User
   * @returns New state
   */
  async setUser(user: AuthUser): Promise<State> {
    const newState = { ...this.lastState, user };
    this.jwtStorageService.setItem(user?.token || '');
    this.setState(newState);
    return newState;
  }

  /**
   * Returns the last user
   * @returns Last user state
   */
  getLastUser(): AuthUser | undefined {
    return this.lastState.user;
  }
}
