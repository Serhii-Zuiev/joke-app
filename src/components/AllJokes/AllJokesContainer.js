import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

import {
    fetchJokesRequested,
    filterJokes as filterJokesAction,
} from "../../redux/jokesReducer";
import {
    StyledJokesContainer,
    StyledJokesHeading,
    StyledForm,
} from "../../styled";
import { JokesList } from "./";

const AllJoke = () => {
    const DEFAULT_JOKES_AMMOUNT = 20;
    const dispatch = useDispatch();
    const allJokes = useSelector((state) => state.jokes);
    const apiError = useSelector((state) => state.error);
    const reduxJokesFilter = useSelector((state) => state.filter);
    const [jokesFilter, setJokesFilter] = useState(reduxJokesFilter);
    const [jokesAmmountToFetch, setJokesAmmountToFetch] = useState("");

    const initRequestFetchJokes = () => {
        if (allJokes.length < 2) {
            dispatch(fetchJokesRequested(DEFAULT_JOKES_AMMOUNT));
        }
    };

    useEffect(() => {
        if (!apiError) {
            initRequestFetchJokes();
        }
    }, []);

    useEffect(() => {
        if (allJokes.length > DEFAULT_JOKES_AMMOUNT) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, [allJokes.length]);

    const handleChangeJokesFilter = ({ target: { value } }) => {
        setJokesFilter(value);
        dispatch(filterJokesAction(value));
    };

    const handleChangeJokesAmmountToFetch = ({ target: { value } }) => {
        setJokesAmmountToFetch(value);
    };

    const handleSubmitFetch = (event) => {
        event.preventDefault();

        if (jokesAmmountToFetch) {
            dispatch(fetchJokesRequested(jokesAmmountToFetch));
        }
    };

    const filterJokes = (allJokes, filter) => {
        if (filter !== "All") {
            return allJokes.filter((joke) =>
                joke.categories.includes(filter.toLowerCase())
            );
        } else return allJokes;
    };

    return (
        <StyledJokesContainer>
            <StyledJokesHeading>
                Here are our best jokes, but it isn't certain...
            </StyledJokesHeading>

            <Form style={{ width: "6rem" }}>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label style={{ width: "8rem" }}>
                        choose category
                    </Form.Label>
                    <Form.Control
                        as="select"
                        custom
                        onChange={handleChangeJokesFilter}
                        value={jokesFilter}
                    >
                        <option>All</option>
                        <option>Nerdy</option>
                        <option>Explicit</option>
                    </Form.Control>
                </Form.Group>
            </Form>

            <JokesList allJokes={filterJokes(allJokes, jokesFilter)} />

            <StyledForm onSubmit={handleSubmitFetch}>
                <Form.Control
                    type="number"
                    value={jokesAmmountToFetch}
                    onChange={handleChangeJokesAmmountToFetch}
                    required
                    min="1"
                    max="20"
                    placeholder="1-20"
                    style={{ width: "5rem" }}
                />
                <Button variant="primary" type="submit">
                    Get more
                </Button>
            </StyledForm>
        </StyledJokesContainer>
    );
};

export default AllJoke;
