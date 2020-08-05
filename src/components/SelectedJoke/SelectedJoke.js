import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { GoBackLinkContainer, StyledSelectedJoke } from "../../styled";

const SelectedJoke = ({ location : {state : {id} } }) => {
  const allJokes = useSelector((state) => state.jokes);
  const jokeToRender = allJokes.find((i)=>i.id===id)
  return (
    <>
      <GoBackLinkContainer>
        <NavLink to="/">
          <Button variant="primary" type="button">
            <ArrowLeft color="#fff" size={26} />
            Go back
          </Button>
        </NavLink>
        {/* <Button variant="primary" href="/" aria-current="page">
          <ArrowLeft color="#fff" size={26} />
          Go back
        </Button> */}
      </GoBackLinkContainer>

      <StyledSelectedJoke>{jokeToRender.joke}</StyledSelectedJoke>
    </>
  );
};

export default SelectedJoke;
