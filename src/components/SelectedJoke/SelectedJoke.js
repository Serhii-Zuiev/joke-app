import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import axios from "axios";
import { GoBackLinkContainer, StyledSelectedJoke } from "../../styled";

const SelectedJoke = ({
  location: {
    state: { id },
  },
}) => {
  const allJokes = useSelector((state) => state.jokes);
  const jokeToRender = allJokes.find((i) => i.id === id);

  const [fetchedJoke, setFetchedJoke] = useState("");

  function fetchSelectedJoke(id) {
    if (!jokeToRender) {
      axios
        .get(`http://api.icndb.com/jokes/${id}`)
        .then((res) => setFetchedJoke(res.data.value.joke));
    }
  }

  useEffect(() => {
    fetchSelectedJoke(id);
  }, []);

  return (
    <>
      <GoBackLinkContainer>
        <NavLink to="/">
          <Button variant="primary" type="button">
            <ArrowLeft color="#fff" size={26} />
            Go back
          </Button>
        </NavLink>
      </GoBackLinkContainer>

      <StyledSelectedJoke>
        {jokeToRender?.joke || fetchedJoke}
      </StyledSelectedJoke>
    </>
  );
};

export default SelectedJoke;
