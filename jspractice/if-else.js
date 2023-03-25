let sale = true;
sale = false;
if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to sell!");
}

//when hunger strikes
let hungerLevel = 12;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

//when sleep strikes
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}

//more!

let isLocked = false;

// if (isLocked) {
//   console.log("You will need a key to open the door.");
// } else {
//   console.log("You will not need a key to open the door.");
// }

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

// if (isCorrect) {
//   console.log("Correct!");
// } else {
//   console.log("Incorrect!");
// }

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = "Love That!";

// if (favoritePhrase === "Love That!") {
//   console.log("I love that!");
// } else {
//   console.log("I don't love that!");
// }

favoritePhrase === "Love That!" ? console.log("I love that!")
  : console.log("I don't love that!");
