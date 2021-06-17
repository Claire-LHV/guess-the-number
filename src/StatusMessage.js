import React from "react";

export const getMessage = (status) => {
  if (status === "NOT_STARTED") {
    return "Enter your guess";
  } else if (status === "CORRECT") {
    return "You're correct!";
  } else if (status === "VERY_CLOSE") {
    return "You're very close.";
  } else if (status === "CLOSE") {
    return "You're close!";
  } else if (status === "GETTING_CLOSE") {
    return "You're getting close";
  } else {
    return "You're far from it";
  }
};
