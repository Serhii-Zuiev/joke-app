import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import {
    Eyeglasses,
    PatchExclamation,
    EmojiSmile,
} from "react-bootstrap-icons";

import { StyledCardContainer } from "../../styled";

const defineJokeCategory = (category) => {
    let Icon;
    let iconTitle;
    switch (category) {
        case "nerdy":
            Icon = Eyeglasses;
            iconTitle = "Nerdy";
            break;
        case "explicit":
            Icon = PatchExclamation;
            iconTitle = "Explicit";
            break;
        default:
            Icon = EmojiSmile;
            iconTitle = "Funny";
    }
    return { Icon, iconTitle };
};

const JokeItem = ({ text, categories, jokeID }) => {
    const category = defineJokeCategory(categories[0]);

    return (
        <StyledCardContainer>
            <Card style={{ height: "100%" }}>
                <Card.Body className="cardBody">
                    <Card.Text style={{ marginBottom: "0" }}>
                        {text.length > 60 ? `${text.slice(0, 60)}...` : text}
                    </Card.Text>
                    <div className="JokeCategoryWrapper">
                        <NavLink
                            to={{
                                pathname: `/joke/${jokeID}`,
                                state: { id: jokeID, from: "/" },
                            }}
                        >
                            <Button variant="outline-primary">Read joke</Button>
                        </NavLink>

                        <div
                            className="JokeCategory"
                            title={category.iconTitle}
                        >
                            <category.Icon color="#777" size={30} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </StyledCardContainer>
    );
};

export default JokeItem;

JokeItem.propTypes = {
    text: PropTypes.string,
    categories: PropTypes.array,
    jokeID: PropTypes.number,
};

JokeItem.defaultProps = {
    text: "",
    categories: [],
    jokeID: "",
};
