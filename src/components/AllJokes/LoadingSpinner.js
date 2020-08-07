import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { StyledSpinnerContainer } from "../../styled";

const LoadingSpinner = () => (
  <StyledSpinnerContainer>
    <Spinner animation="border" variant="primary" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </StyledSpinnerContainer>
);

export default LoadingSpinner;
