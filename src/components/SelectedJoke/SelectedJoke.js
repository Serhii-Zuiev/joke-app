import React from "react";
import { GoBackLinkContainer, StyledSelectedJoke } from '../../styled';
import { Button } from "react-bootstrap";
import { placeholder } from "../../placeholder";

const SelectedJoke = () => {
  return (
    <>
      <GoBackLinkContainer>
      <Button variant="primary">&#8592; Go back</Button>
      </GoBackLinkContainer>

      <StyledSelectedJoke>{placeholder[1].joke}</StyledSelectedJoke>
    </>
  );
};

export default SelectedJoke;
