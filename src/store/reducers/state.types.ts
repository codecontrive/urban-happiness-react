import { User } from "../../models/User.interface";

export interface AppConfigState {
  test: string;
}

export interface AuthStatus {
  loading: boolean;
  loggedIn: boolean;
  error?: Error;
}

export interface AuthState {
  status: AuthStatus;
  user?: User;
}
