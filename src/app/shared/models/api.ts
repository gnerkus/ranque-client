import {AuthUser} from "./user";

/**
 * User response from service
 */
export type UserResponse = AuthUser;

export type LoginUserRequest = {
  email: string;
  password: string;
}
