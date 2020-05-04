import React from "react";
import { ContriveBox } from "../../reusable/box/ContriveBox";
import { Form, Button } from "react-bootstrap";
import { ContriveAlert } from "../../reusable/alert/ContriveAlert";

export const AuthBoxContainer = () => {
  const onSubmit = () => {};

  return (
    <ContriveBox
      title="Authentication"
      subtitle="Use your email and pasword to login."
      footer={
        <Button block title="Login" onClick={onSubmit}>
          Login
        </Button>
      }
    >
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <ContriveAlert
        variant="danger"
        title="Ooops!"
        body="Something went wrong while we tried to log you in..."
        footer="In case you need further help, please contact us."
        dismissible
      />
    </ContriveBox>
  );
};
