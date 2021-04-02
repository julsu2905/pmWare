import React, { useState } from "react";
import { Row, Col } from "antd";
import { useDraggable } from "@dnd-kit/core";
import "./component-css/CustomCard.css";

const CustomCard = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    /* <Row className="card-content-wrapper">
      <Row className="card-title-wrapper">
        <Col className="card-title"></Col>
      </Row>
      <Row className="card-body-wrapper">
        <Col className="card-body"></Col>
      </Row>
    </Row>
  ); */
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
};

export default CustomCard;
