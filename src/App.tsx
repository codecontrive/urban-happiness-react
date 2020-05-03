import React from "react";
import { useTypedSelector } from "./store/reducers";

export const App = () => {
  const appConfig = useTypedSelector((state) => state.appConfig);
  console.log(appConfig);
  return <></>;
};
