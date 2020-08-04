import React from "react";
import { Card, Button } from "react-bootstrap";

const JokeItem = ({ text }) => {
  return (
    <Card style={{ width: "300px" }}>
      <Card.Body>
        <Card.Text>
        {text.length > 46 ? `${text.slice(0, 46)}...` : text}
        </Card.Text>
        <Button variant="outline-primary">Read joke</Button>
      </Card.Body>
    </Card>
  );
};

export default JokeItem;
