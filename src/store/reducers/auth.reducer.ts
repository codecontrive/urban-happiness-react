import { AuthState, AuthStatus } from "./state.types";
import { AuthTypes, AuthAction } from "../actions/action.types";
import { User } from "../../models/User.interface";

export const initialState: AuthState = {
  status: {
    loggedIn: false,
  },
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
