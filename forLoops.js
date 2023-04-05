// Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

// The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

// A for loop contains three expressions separated by ; inside the parentheses:

// an initialization starts the loop and can also be used to declare the iterator variable.
// a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// an iteration statement is used to update the iterator variable on each loop.

// The for loop syntax looks like this:

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
// In this example, the output would be the following:
0;
1;
2;
3;

// Let’s break down the example:

// The initialization is let counter = 0, so the loop will start counting at 0.
// The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
// The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
// The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.
// This for loop makes it possible to write 0, 1, 2, and 3 programmatically.

// Write your code below
for (let i = 5; i < 11; i++) {
  console.log(i);
}

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

for (let i = 3; i >= 0; i--) {
  console.log(i);
}