import React from "react";
import { useSelector } from "react-redux";
import {
  GlobalStyle,
  StyledAppContainer,
  StyledHeader,
  StyledAppHeading,
} from "../styled";
import { Routing } from "./routing";
import { LoadingSpinner } from "./AllJokes";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

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

          {!isLoading ? <Routing /> : <LoadingSpinner />}

        </div>
      </StyledAppContainer>
    </>
  );
}

export default App;
