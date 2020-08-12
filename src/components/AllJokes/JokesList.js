import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import { StyledJokesList } from "../../styled";
import { JokeItem } from "./";

const JokesList = ({ allJokes }) => {
    return (
        <StyledJokesList>
            {allJokes.map((joke) => (
                <li key={shortid.generate()} className="jokesListItem">
                    <JokeItem
                        text={joke.joke}
                        categories={joke.categories}
                        jokeID={joke.id}
                    />
                </li>
            ))}
        </StyledJokesList>
    );
};

export default JokesList;

JokesList.propTypes = {
    allJokes: PropTypes.arrayOf(PropTypes.object),
};

JokesList.defaultProps = {
    allJokes: [],
};
