import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessList({ guessList }) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess guess={guessList[index]} key={index} />
      ))}
    </div>
  );
}

export default GuessList;
