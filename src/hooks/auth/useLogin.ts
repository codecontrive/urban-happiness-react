import { useCallback } from "react";
import { useRequest } from "../useRequest";

export const useLogin = () => {
  const { requestStatus, request } = useRequest();

  const loginAttempt = useCallback(
    (email: string, password: string) => {
      request({
        url: "https://www.google.ro",
        method: "post",
        data: { email, password },
      });
    },
    [request]
  );

  return { loginAttempt, requestStatus };
};
