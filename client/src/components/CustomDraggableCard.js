import React, { useState } from "react";
import { Row, Col } from "antd";
import { useDraggable } from "@dnd-kit/core";
import "./component-css/CustomCard.css";

const CustomCard = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0px)`,
      }
    : undefined;
  return (
    <Row
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="card-content-wrapper"
    >
      <Row className="card-title-wrapper">
        <Col className="card-title">{props.title}</Col>
      </Row>
      <Row className="card-body-wrapper">
        <Col className="card-body"></Col>
      </Row>
    </Row>
  );
};

export default CustomCard;
