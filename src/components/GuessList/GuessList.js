import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessList({ guessList }) {
  const getItemFromGuessList = (index) => {
    return guessList[index]?.split("") ?? ["", "", "", "", ""];
  };
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess guess={getItemFromGuessList(index)} key={index} />
      ))}
    </div>
  );
}

export default GuessList;
