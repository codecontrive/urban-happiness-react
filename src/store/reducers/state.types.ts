import { User } from "../../models/User.interface";

export interface AppConfigState {
  test: string;
}

export interface AuthError extends Error {
  title?: string;
  body?: string;
  footer?: string;
}

export interface AuthStatus {
  loggedIn: boolean;
  error?: AuthError;
}

export interface AuthState {
  status: AuthStatus;
  user?: User;
}
