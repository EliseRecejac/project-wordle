import React, { useState } from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);

  const addNewGuess = (guess) => {
    setGuessList([...guessList, checkGuess(guess, answer)]);
  };

  return (
    <>
      <GuessList guessList={guessList} />
      <GuessInput addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
