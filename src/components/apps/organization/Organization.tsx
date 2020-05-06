import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

export interface OrganizationProps {}

export const Organization: React.FunctionComponent<OrganizationProps> = (
  props
) => {
  return (
    <>
      {/* <Route path={props.match.path}>team</Route> */}
      <Route path="/" exact>
        home
      </Route>
    </>
  );
};
