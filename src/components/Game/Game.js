import React, { useState } from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function HappyBanner({ numberOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner() {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [status, setStatus] = useState("running");

  const isGuessCorrect = (guess) => {
    let isCorrect = true;
    for (letter of guess) {
      if (letter.status !== "correct") {
        isCorrect = false;
        break;
      }
    }
    return isCorrect;
  };

  const addNewGuess = (guess) => {
    const nextGuess = checkGuess(guess, answer);
    const nextGuessList = [...guessList, nextGuess];
    setGuessList(nextGuessList);
    console.log(guessList.length);
    if (isGuessCorrect(nextGuess)) {
      setStatus("won");
    } else if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };

  return (
    <>
      <GuessList guessList={guessList} />
      {status === "running" && <GuessInput addNewGuess={addNewGuess} />}
      {status === "won" && <HappyBanner numberOfGuesses={guessList.length} />}
      {status === "lost" && <SadBanner />}
    </>
  );
}

export default Game;
