import {AuthResponse} from "./user";

/**
 * User response from service
 */
export type UserResponse = AuthResponse;

export type LoginUserRequest = {
  username: string;
  password: string;
}

export type RegisterUserRequest = {
  username: string;
  password: string;
}
