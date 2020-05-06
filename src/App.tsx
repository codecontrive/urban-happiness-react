import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth } from "./components/auth/Auth";
import { Organization } from "./components/apps/organization/Organization";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/apps/organization">
            <Organization />
          </Route>

          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route>404</Route>
        </Switch>
      </Router>
    </>
  );
};
