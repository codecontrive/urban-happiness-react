import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./ContriveBox.module.scss";

export interface ContriveBoxProps {
  title?: string;
  subtitle?: string;
  roundedCorners?: boolean;
}

export const ContriveBox: React.FunctionComponent<ContriveBoxProps> = (
  props
) => {
  return (
    <Row className={styles.ContriveBoxContainer}>
      <Col className={[styles.ContriveBox, "p-0"].join(" ")} lg={12}>
        <Row className={styles.ContriveBoxHeaderContainer}>
          <Col>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
          </Col>
        </Row>
        <Row className={styles.ContriveBoxContainer}>
          <Col>{props.children}</Col>
        </Row>
        <Row className={styles.ContriveBoxFooterContainer}></Row>
      </Col>
    </Row>
  );
};
