import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokesRequested } from "../../redux/actions";
import {
  StyledJokesContainer,
  StyledJokesHeading,
  StyledForm,
} from "../../styled";
import { JokesList } from "./";
import { Form, Button } from "react-bootstrap";

const AllJoke = () => {
  const DEFAULT_JOKES_AMMOUNT = 20;
  const dispatch = useDispatch();
  const allJokes = useSelector((state) => state.jokes);
  const [jokesFilter, setJokesFilter] = useState("All");
  const [jokesAmmountToFetch, setJokesAmmountToFetch] = useState("");

  function initRequestFetchJokes() {
    if (!allJokes.length) {
      dispatch(fetchJokesRequested(DEFAULT_JOKES_AMMOUNT));
    }
  }

  useEffect(() => {
    initRequestFetchJokes();
  }, []);

  function handleChangeJokesFilter(e) {
    setJokesFilter(e.target.value);
  }

  function handleChangeJokesAmmountToFetch(e) {
    setJokesAmmountToFetch(e.target.value);
  }

  function handleSubmitFetch(e) {
    e.preventDefault();

    if (jokesAmmountToFetch) {
      dispatch(fetchJokesRequested(jokesAmmountToFetch));
    }
  }

  function filterJokes(allJokes, filter) {
    if (filter !== "All") {
      return allJokes.filter((j) =>
        j.categories.includes(filter.toLowerCase())
      );
    } else return allJokes;
  }

  return (
    <StyledJokesContainer>
      <StyledJokesHeading>
        Here are our best jokes, but it isn't certain...
      </StyledJokesHeading>

      <Form style={{ width: "6rem" }}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label style={{ width: "8rem" }}>choose category</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={handleChangeJokesFilter}
            value={jokesFilter}
          >
            <option>All</option>
            <option>Nerdy</option>
            <option>Explicit</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <JokesList allJokes={filterJokes(allJokes, jokesFilter)} />

      <StyledForm onSubmit={handleSubmitFetch}>
        <Form.Control
          type="number"
          value={jokesAmmountToFetch}
          onChange={handleChangeJokesAmmountToFetch}
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
