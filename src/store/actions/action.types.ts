import { AuthStatus } from "../reducers/state.types";
import { User } from "../../models/User.interface";

export enum AuthAction {
  SET_STATUS,
  SET_STATUS_LOADING,
  SET_USER,
}

export interface AuthStatusType {
  type: AuthAction;
  payload: AuthStatus;
}

export interface AuthStatusLoadingType {
  type: AuthAction;
  payload: boolean;
}

export interface AuthSetUserType {
  type: AuthAction;
  payload: User;
}

export type AuthTypes =
  | AuthStatusType
  | AuthStatusLoadingType
  | AuthSetUserType;
