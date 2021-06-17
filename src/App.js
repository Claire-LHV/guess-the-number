import logo from "./logo.svg";
import "./App.css";
import { generateRandomNumber } from "./numberGenerator";
const num = generateRandomNumber();
console.log(num);

export function App() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.guessNumber.value);
  };
  return (
    <div className="App">
      <h1>Guess the number</h1>
      <form onSubmit={onSubmit}>
        <label>Guessing number: </label>
        <input name="guessNumber" type="number" min="1" max="100" />
        <button>Submit</button>
      </form>
    </div>
  );
}
