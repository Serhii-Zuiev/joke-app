import React from "react";
import { useSelector } from "react-redux";
import {
  GlobalStyle,
  StyledAppContainer,
  StyledHeader,
  StyledAppHeading,
} from "../styled";
import { Routing } from "./routing";

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

          {!isLoading ? <Routing/> : <div style={{ fontSize: "200px" }}>LOADING</div>}

        </div>
      </StyledAppContainer>
    </>
  );
}

export default App;
