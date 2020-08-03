import React from "react";
import styled from "styled-components";
import AllJokes from "./AllJokes/AllJokesContainer";
import SelectedJoke from "./SelectedJoke/SelectedJoke";

function App() {
  return (
    <StyledAppContainer>
      <StyledHeader>
        <StyledAppHeading>
          <span role="img" aria-label="face emoji">
            😄
          </span>
          Joke app
        </StyledAppHeading>
      </StyledHeader>

      <AllJokes />
      {/* <SelectedJoke /> */}
    </StyledAppContainer>
  );
}

export default App;

const StyledAppContainer = styled.div`
  background-color: #eee;
`;

const StyledHeader = styled.header`
  height: 70px;
  width: 90%;
  margin: 0 auto;
`;

const StyledAppHeading = styled.h1`
  font-size: 26px;
  color: #333;
  padding: 16px 0;
  letter-spacing: 1px;
  text-align: center;
  border-bottom: 2px solid #777;
`;
