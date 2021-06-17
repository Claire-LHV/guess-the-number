import { getMessage } from "./StatusMessage";

test("if the status is not started then messge shows game is not started", () => {
  const message = getMessage("NOT_STARTED");
  expect(message).toBe("Enter your guess");
});

test("if the status is CORRECT then messge shows you're correct", () => {
  const message = getMessage("CORRECT");
  expect(message).toBe("You're correct!");
});

test("if the status is VERY_CLOSE then messge shows you're very close", () => {
  const message = getMessage("VERY_CLOSE");
  expect(message).toBe("You're very close.");
});

test("if the status is CLOSE then messge shows you're close", () => {
  const message = getMessage("CLOSE");
  expect(message).toBe("You're close!");
});

test("if the status is GETTING_CLOSE then messge shows you're getting close", () => {
  const message = getMessage("GETTING_CLOSE");
  expect(message).toBe("You're getting close");
});

test("if the status is FAR then messge shows you're far from it", () => {
  const message = getMessage("FAR");
  expect(message).toBe("You're far from it");
});
