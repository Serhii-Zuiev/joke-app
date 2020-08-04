import React from "react";
import { StyledJokesList } from "../../styled";
import { JokeItem } from "./";
import { placeholder } from "../../placeholder";

const JokesList = () => {
  return (
    <StyledJokesList>
      {placeholder.map((item) => (
        <li key={item.id} className="jokesListItem">
          <JokeItem text={item.joke} />
        </li>
      ))}
    </StyledJokesList>
  );
};

export default JokesList;
