import React from "react";
import {
  GlobalStyle,
  StyledAppContainer,
  StyledHeader,
  StyledAppHeading,
} from "../styled";
import { AllJokesContainer } from "./AllJokes";
import { SelectedJoke } from "./SelectedJoke";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledAppContainer>
        <div className="appWrapper">
          <StyledHeader>
            <StyledAppHeading>
              <span role="img" aria-label="face emoji">
                😄
              </span>
              Joke app
            </StyledAppHeading>
          </StyledHeader>

          <AllJokesContainer />
          {/* <SelectedJoke /> */}
        </div>
      </StyledAppContainer>
    </>
  );
}

export default App;
