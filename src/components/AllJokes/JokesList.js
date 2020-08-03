import React from "react";
import styled from "styled-components";
import JokeItem from "./JokeItem";
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

const StyledJokesList = styled.ul`
  padding: 40px 0;

  .jokesListItem {
    margin-bottom: 22px;
    border-bottom: 1px solid #777;
    padding: 12px 0;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid tomato;
      padding-left: 3px;
    }
  }
`;
