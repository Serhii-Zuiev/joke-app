import React from "react";
import shortid from "shortid";
import { StyledJokesList } from "../../styled";
import { JokeItem } from "./";

const JokesList = ({ allJokes }) => {
  return (
    <StyledJokesList>
      {allJokes.map((j) => (
        <li key={shortid.generate()} className="jokesListItem">
          <JokeItem text={j.joke} categories={j.categories} jokeID={j.id} />
        </li>
      ))}
    </StyledJokesList>
  );
};

export default JokesList;
