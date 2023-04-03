// Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

//   Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

//zero parameters
const functionName = () => {};

//one parameter
const functionNameOne = (paraOne) => {};

//two or more parameters
const functionNameTwo = (paraOne, paraTwo) => {};

// A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

//single line block
const sumNumbers = (number) => +number;

//multi-line block
const sumNumbersTwo = (number) => {
  const sum = number + number;
  return sum; //return statement
};

// So if we have a function:

const squareNum = (num) => {
  return num * num;
};

// We can refactor the function to:

const squareNumTwo = (num) => num * num;

//refactor this function
const plantNeedsWater = (day) => {
  return day === "Wednesday" ? true : false;
};

//remove parentheses, curly brackets, and return statement.
const plantNeedsWaterTwo = (day) => (day === "Wednesday" ? true : false);
