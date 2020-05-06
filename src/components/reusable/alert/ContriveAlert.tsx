import React from "react";
import { Alert, AlertProps } from "react-bootstrap";

export interface ContriveAlertProps extends AlertProps {
  title?: string;
  body?: string;
  footer?: string;
}

export const ContriveAlert: React.FunctionComponent<ContriveAlertProps> = (
  props
) => {
  return (
    <Alert dismissible={props.dismissible} variant={props.variant}>
      <Alert.Heading>{props.title}</Alert.Heading>
      <p>{props.body}</p>
      {props.footer && <hr />}
      <p className="mb-0">{props.footer}</p>
    </Alert>
  );
};
