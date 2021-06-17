import "./App.css";
import { generateRandomNumber } from "./numberGenerator";
import React, { useState } from "react";
import { getMessage } from "./StatusMessage";
const num = generateRandomNumber();

export function App() {
  const onSubmit = (event) => {
    event.preventDefault();
    const guess = parseInt(event.target.elements.guessNumber.value);
    if (Math.abs(guess - num) === 0) {
      setStatus("CORRECT");
    } else if (Math.abs(guess - num) <= 10) {
      setStatus("VERY_CLOSE");
    } else if (Math.abs(guess - num) <= 20) {
      setStatus("CLOSE");
    } else if (Math.abs(guess - num) <= 30) {
      setStatus("GETTING_CLOSE");
    } else {
      setStatus("FAR");
    }
  };
  const [status, setStatus] = useState("NOT_STARTED");

  return (
    <div className="App">
      <h1>Guess the number</h1>
      <form onSubmit={onSubmit}>
        <label>Guessing number: </label>
        <input name="guessNumber" type="number" min="1" max="100" />
        <button>Submit</button>
      </form>
      <div>{getMessage(status)}</div>
    </div>
  );
}
