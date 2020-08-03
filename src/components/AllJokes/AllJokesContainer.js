import React from "react";
import styled from "styled-components";
import JokesList from "./JokesList";

// "all", "nerdy", "explicit"
// http://api.icndb.com/jokes/random/20?limitTo=[nerdy]
// http://api.icndb.com/jokes/random/15?limitTo=[explicit]

// http://api.icndb.com/jokes/random/20?exclude=[] 20 random шуток всех категорий

const AllJoke = () => {
  return (
    <StyledJokesContainer>
      <StyledJokesHeading>
        Here are our best jokes, but it isn't certain...
      </StyledJokesHeading>
      <label>
        <div>choose category</div>
        <select name="select" className="categorySelect" defaultValue="">
          <option value="">All</option>
          <option value="nerdy">Nerdy</option>
          <option value="explicit">Explicit</option>
        </select>
      </label>

      <JokesList />

      <StyledForm>
        <input
          type="number"
          className="jokesAmmountInput"
          name="jokesAmmount"
          id="jokesAmmount"
          min="1"
          max="20"
          placeholder="1-20"
        />
        <button type="submit" className="loadMoreBtn">
          Get more
        </button>
      </StyledForm>
    </StyledJokesContainer>
  );
};

export default AllJoke;

const StyledJokesContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-top: 40px;

  .categorySelect {
    height: 34px;
    width: 92px;
    margin-top: 10px;
    text-align: center;
    border: 1px solid #333;
    font-size: 18px;
    color: #333;
    border-radius: 4px;
    padding: 4px;
  }
`;

const StyledJokesHeading = styled.h2`
  font-size: 20px;
  color: #333;
  padding: 12px 0;
  letter-spacing: 0.3px;
`;

const StyledForm = styled.form`
  width: 200px;
  margin: 0 auto;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .jokesAmmountInput {
    height: 34px;
    width: 70px;
    text-align: center;
    border: 1px solid #333;
    font-size: 18px;
    color: #333;
    border-radius: 4px;
    padding: 4px;
  }
  .loadMoreBtn {
    height: 34px;
    width: 120px;
    border: 1px solid #333;
    font-size: 18px;
    color: #333;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: tomato;
      border: 1px solid tomato;
    }
  }
`;
