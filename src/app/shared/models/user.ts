/**
 * User
 */
export type AuthUser = {
  email: string;
  token: string;
  refreshToken: string;
  username: string;
  image?: string;
};
