import React from "react";
import { Row, Image, Col } from "react-bootstrap";

import LogoImage from "../../../assets/img/logo.png";
import styles from "./Logo.module.scss";

export interface LogoProps {
  animateOnLoad?: boolean;
}

export const Logo = (props: LogoProps) => {
  return (
    <Row className={styles.LogoContainer}>
      <Col>
        <Image className={styles.LogoImage} src={LogoImage} />
      </Col>
    </Row>
  );
};
