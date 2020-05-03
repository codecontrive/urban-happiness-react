import React from "react";
import { useTypedSelector } from "./store/reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Route path="/test">
            <h1>Test</h1>
          </Route>
          <Route>404</Route>
        </Switch>
      </Router>
    </>
  );
};
