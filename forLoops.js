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
