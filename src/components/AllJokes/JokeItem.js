import React from "react";

const JokeItem = ({ text }) => {
  return <p>{text.length > 100 ? `${text.slice(0, 100)}...` : text}</p>;
};

export default JokeItem;
