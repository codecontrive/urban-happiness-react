import React from "react";

import styles from "./Auth.module.scss";
import { ContriveBox } from "../reusable/box/ContriveBox";
import { Row, Col } from "react-bootstrap";
import { Logo } from "../reusable/logo/Logo";

export const Auth = () => {
  return (
    <Row className={styles.AuthContainer}>
      <Col className={styles.AuthMidContainer}>
        <Row className={styles.LogoContainer}>
          <Col lg={3} sm={12}>
            <Logo />
          </Col>
        </Row>
        <Row className={styles.BoxContainer}>
          <Col lg={6} xl={4} sm={12}>
            <ContriveBox />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
