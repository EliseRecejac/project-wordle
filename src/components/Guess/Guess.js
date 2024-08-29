import React from "react";
import { range } from "../../utils";


function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          className={`cell ${guess ? guess[index].status : ""}`}
          key={index}
        >
          {guess ? guess[index].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
