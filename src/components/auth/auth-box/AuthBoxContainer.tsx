import React, { useState, useEffect } from "react";
import { ContriveBox } from "../../reusable/box/ContriveBox";
import { Form, Button } from "react-bootstrap";
import { ContriveAlert } from "../../reusable/alert/ContriveAlert";
import { useTypedSelector } from "../../../store/reducers";

export const AuthBoxContainer = () => {
  const auth = useTypedSelector((state) => state.auth);

  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("adminadmin");

  const [formEnabled, setFormEnabled] = useState(false);

  useEffect(() => {
    setFormEnabled(
      email.length > 0 && password.length > 0 && auth.status.loading === false
    );
  }, [email, password, auth.status.loading]);

  const onSubmit = () => {};

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
        </Button>
      }
    >
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
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
