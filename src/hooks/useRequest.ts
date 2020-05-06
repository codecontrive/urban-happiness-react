import { useState, useCallback } from "react";

export interface RequestStatus {
  loading: boolean;
}

export interface Request {
  url: string;
  method: "post" | "get" | "put" | "delete";
  data: any;
}

export const useRequest = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>({
    loading: false,
  });

  // simulate request
  const request = useCallback((req: Request) => {
    setRequestStatus({ loading: true });
    setTimeout(() => {
      setRequestStatus({ loading: false });
    }, 2000);
  }, []);

  return { requestStatus, request };
};
