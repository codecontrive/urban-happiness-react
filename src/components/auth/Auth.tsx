import React from "react";

import styles from "./Auth.module.scss";

import { Row, Col } from "react-bootstrap";
import { Logo } from "../reusable/logo/Logo";
import { AuthBoxContainer } from "./auth-box/AuthBoxContainer";

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
            <AuthBoxContainer />
          </Col>
        </Row>
        <Row className={styles.LoginHelp}>
          <Col lg={6} xl={4} sm={12}>
            <a href="#!">Forgot your password?</a>
          </Col>
        </Row>
        <Row className={styles.AuthFooterContainer}>
          <Col>
            <p>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.codecontrive.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeContrive
              </a>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
