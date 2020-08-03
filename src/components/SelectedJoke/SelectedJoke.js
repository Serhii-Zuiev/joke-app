import React from "react";
import styled from "styled-components";
import { placeholder } from "../../placeholder";

const SelectedJoke = () => {
  return (
    <>
      <GoBackLinkContainer>
        <a href="#" className="goBackLink">
          &#8592; Go back
        </a>
      </GoBackLinkContainer>

      <StyledSelectedJoke>{placeholder[1].joke}</StyledSelectedJoke>
    </>
  );
};

export default SelectedJoke;

const GoBackLinkContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  .goBackLink {
    display: block;
    height: 30px;
  }
`;

const StyledSelectedJoke = styled.div`
  width: 90%;
  height: calc(100vh - 100px);
  margin: 0 auto;
  padding: 0 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  font-weight: 500;
  text-align: center;
`;
