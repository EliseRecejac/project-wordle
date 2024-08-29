import React from "react";

function Guess({guess}) {
  return (
    <p className="guess">
      <span className="cell">{guess[0]}</span>
      <span className="cell">{guess[1]}</span>
      <span className="cell">{guess[2]}</span>
      <span className="cell">{guess[3]}</span>
      <span className="cell">{guess[4]}</span>
    </p>
  );
}

export default Guess;
