export const generateRandomNumber = () => {
  const num = Math.ceil(Math.random() * 100);
  if (num === 0) {
    return 1;
  }
  return num;
};

// export {generateRandomNumber};
// export default generateRandomNumber;
