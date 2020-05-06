import { AuthTypes } from "./action.types";

export const auth = (action: AuthTypes) => ({
  type: action.type,
  payload: action.payload,
});
