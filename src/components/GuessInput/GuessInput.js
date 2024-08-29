import React, { useState } from "react";

function GuessInput({ addNewGuess }) {
  const [guess, setGuess] = useState("");

  const handleSubmitGuess = (event) => {
    event.preventDefault();
    addNewGuess(guess);
    setGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmitGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letters word"
      />
    </form>
  );
}

export default GuessInput;
