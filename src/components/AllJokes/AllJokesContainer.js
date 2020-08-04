import React from "react";
import {
  StyledJokesContainer,
  StyledJokesHeading,
  StyledForm,
} from "../../styled";
import { JokesList } from "./";
import { Form, Button } from "react-bootstrap";

const AllJoke = () => {
  return (
    <StyledJokesContainer>
      <StyledJokesHeading>
        Here are our best jokes, but it isn't certain...
      </StyledJokesHeading>

      <Form style={{ width: "6rem" }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{ width: "8rem" }}>choose category</Form.Label>
          <Form.Control as="select" custom>
            <option>All</option>
            <option>Nerdy</option>
            <option>Explicit</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <JokesList />

      <StyledForm>
        <Form.Control
          type="number"
          min="1"
          max="20"
          placeholder="1-20"
          style={{ width: "5rem" }}
        />
        <Button variant="primary" type="submit">
          Get more
        </Button>
      </StyledForm>
    </StyledJokesContainer>
  );
};

export default AllJoke;
