import {AuthResponse} from "./user";
import {Leaderboard} from "./leaderboard";

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

/**
 * Leaderboard response
 */

export type LeaderboardResponse = Leaderboard;
