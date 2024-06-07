import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLink } from "react-icons/bs";

function ExperiencesCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.company}</Card.Title>
        <Card.Header> {props.role}</Card.Header>
        <Card.Subtitle>{props.duration}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.linkedIn} target="_blank">
          <BsLink /> &nbsp;
          {props.isBlog ? "Blog" : "LinkedIn"}
        </Button>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ExperiencesCard;
