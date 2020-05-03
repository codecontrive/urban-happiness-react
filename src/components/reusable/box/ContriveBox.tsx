import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "./ContriveBox.module.scss";

export interface ContriveBoxProps {
  roundedCorners?: boolean;
}

export const ContriveBox = (props: ContriveBoxProps) => {
  return (
    <Row className={styles.ContriveBoxContainer}>
      <Col className={styles.ContriveBox} lg={12}>
        da
      </Col>
    </Row>
  );
};
