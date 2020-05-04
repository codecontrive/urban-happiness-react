import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, Reducer } from "redux";

import { appConfigReducer } from "./app-config.reducer";
import { AppConfigState, AuthState } from "./state.types";
import { authReducer } from "./auth.reducer";

export interface RootState {
  appConfig: AppConfigState;
  auth: AuthState;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const reducers: Reducer<RootState> = combineReducers<RootState>({
  appConfig: appConfigReducer,
  auth: authReducer,
});
