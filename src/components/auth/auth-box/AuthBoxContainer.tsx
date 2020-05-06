import React, { useState, useEffect } from "react";
import { ContriveBox } from "../../reusable/box/ContriveBox";
import { Form, Button, Spinner } from "react-bootstrap";
import { ContriveAlert } from "../../reusable/alert/ContriveAlert";
import { useTypedSelector } from "../../../store/reducers";
import { useLogin } from "../../../hooks/auth/useLogin";

export const AuthBoxContainer = () => {
  const auth = useTypedSelector((state) => state.auth);
  const { loginAttempt, requestStatus } = useLogin();

  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("adminadmin");

  const [formEnabled, setFormEnabled] = useState(false);

  useEffect(() => {
    setFormEnabled(
      email.length > 0 && password.length > 0 && requestStatus.loading === false
    );
  }, [email, password, requestStatus.loading]);

  useEffect(() => {
    console.log("loading: ", requestStatus.loading);
  }, [requestStatus.loading]);

  const onSubmit = () => {
    loginAttempt(email, password);
  };

  return (
    <ContriveBox
      title="Authentication"
      subtitle="Use your email and pasword to login."
      footer={
        <Button
          block
          variant={formEnabled ? "primary" : "secondary"}
          disabled={!formEnabled}
          title="Login"
          onClick={onSubmit}
        >
          Login
          {requestStatus.loading && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </Button>
      }
    >
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            disabled={requestStatus.loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            disabled={requestStatus.loading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      </Form>
      {auth.status.error && (
        <ContriveAlert
          variant="danger"
          title={auth.status.error.title}
          body={auth.status.error.body}
          footer={auth.status.error.footer}
          dismissible
        />
      )}
    </ContriveBox>
  );
};
