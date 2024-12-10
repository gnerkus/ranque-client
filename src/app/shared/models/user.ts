/**
 * User
 */
export type AuthUser = {
  username: string;
  image?: string;
};

export type AuthResponse = {
  username: string;
  accessToken: string;
  refreshToken: string;
}
