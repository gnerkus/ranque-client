import {AuthUser} from "./user";

/**
 * User response from service
 */
export type UserResponse = AuthUser;

export type LoginUserRequest = {
  username: string;
  password: string;
}

export type RegisterUserRequest = {
  username: string;
  password: string;
}
