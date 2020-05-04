import { AuthState, AuthStatus } from "./state.types";
import { AuthTypes, AuthAction } from "../actions/action.types";
import { User } from "../../models/User.interface";

export const initialState: AuthState = {
  status: { loggedIn: false, loading: false },
};

export const authReducer = (
  state = initialState,
  action: AuthTypes
): AuthState => {
  switch (action.type) {
    case AuthAction.SET_STATUS: {
      const payload = action.payload as AuthStatus;
      return {
        ...state,
        status: payload,
      };
    }
    case AuthAction.SET_STATUS_LOADING: {
      const payload = action.payload as boolean;
      return {
        ...state,
        status: { ...state.status, loading: payload },
      };
    }
    case AuthAction.SET_USER: {
      const payload = action.payload as User;
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};
