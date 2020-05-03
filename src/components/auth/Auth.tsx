import React, { CSSProperties } from "react";

import styles from "./Auth.module.scss";
import { ContriveBox } from "../reusable/box/ContriveBox";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Logo } from "../reusable/logo/Logo";

export const Auth = () => {
  return (
    <Row className={styles.AuthContainer}>
      <Col className="backgroundWrapper"></Col>
      <Col className={styles.AuthMidContainer}>
        <Row className={styles.LogoContainer}>
          <Col lg={3} sm={12}>
            <Logo />
          </Col>
        </Row>
        <Row className={styles.BoxContainer}>
          <Col lg={6} xl={4} sm={12}>
            <ContriveBox
              title="Authentication"
              subtitle="Use your email and pasword to login."
            >
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </ContriveBox>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
