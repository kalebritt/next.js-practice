// To loop through each element in an array, a for loop should use the array’s .length property in its condition.

// Check out the example below to see how for loops iterate on arrays:

const animals = ["Grizzly Bear", "Sloth", "Sea Lion"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// This example would give you the following output:
// Grizzly Bear
// Sloth
// Sea Lion

// In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll see in a lot of loops. When we use i to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1. If we tried to access an element at the index of animals.length we will have gone too far!
