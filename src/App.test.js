import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("checking initial message", () => {
  render(<App />);
  const messageElement = screen.getByText(/enter your guess/i);
  expect(messageElement).toBeInTheDocument();
});
