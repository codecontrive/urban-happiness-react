import { combineReducers } from "redux";

import { appConfigReducer } from "./app-config.reducer";
import { AppConfigState } from "./state.types";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export interface RootState {
  appConfig: () => AppConfigState;
}

const appState: RootState = {
  appConfig: appConfigReducer,
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default combineReducers(appState);
