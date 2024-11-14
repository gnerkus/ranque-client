import { AuthUser } from './user';

/**
 * Application state
 */
export type State = {
  user?: AuthUser;
};

/**
 * Initial state
 */
export const initialState: State = {
};
