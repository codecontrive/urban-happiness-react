import React from "react";
import { useTypedSelector } from "./store/reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth } from "./components/auth/Auth";

export const App = () => {
  const appConfig = useTypedSelector((state) => state.appConfig);
  console.log(appConfig);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route>404</Route>
        </Switch>
      </Router>
    </>
  );
};
