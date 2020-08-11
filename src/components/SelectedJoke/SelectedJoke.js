import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

import { fetchSelectedJokeRequested } from "../../redux/jokesReducer";
import { GoBackLinkContainer, StyledSelectedJoke } from "../../styled";

const SelectedJoke = ({
    location: {
        state: { id },
    },
}) => {
    const dispatch = useDispatch();
    const allJokes = useSelector((state) => state.jokes);
    const jokeToRender = allJokes.find((joke) => joke.id === id);

    useEffect(() => {
        if (!jokeToRender) {
            dispatch(fetchSelectedJokeRequested(id));
        }
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

            <StyledSelectedJoke>{jokeToRender?.joke}</StyledSelectedJoke>
        </>
    );
};

export default SelectedJoke;

SelectedJoke.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
};
