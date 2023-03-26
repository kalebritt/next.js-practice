const userName = "Atias";
userName ? console.log(`Hello, ${userName}.`) : console.log("Hello.");
const userQuestion = "Ask something, ";
console.log(userQuestion + userName);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
console.log(randomNumber);

function answer() {
  const inputForm = (document.getElementById("inputForm").value = eightBall);
  if (randomNumber === 0) {
    eightBall = "It is certain.";
  } else if (randomNumber === 1) {
    eightBall = "It is decidedly so.";
  } else if (randomNumber === 2) {
    eightBall = "Reply hazy, try again.";
  } else if (randomNumber === 3) {
    eightBall = "Cannot predict future now.";
  } else if (randomNumber === 4) {
    eightBall = "Do not count on it.";
  } else if (randomNumber === 5) {
    eightBall = "My sources say no.";
  } else if (randomNumber === 6) {
    eightBall = "Outlook not so good";
  } else if (randomNumber === 7) {
    eightBall = "Signs point to yes.";
  }
}

function clearForm() {
  document.getElementById("inputForm").value = "";
  document.getElementById("answer-form").value = "";
  document.location.reload();
}

// switch (randomNumber) {
//   case 0:
//     console.log("It is certain.");
//     break;
//   case 1:
//     console.log("It is decidedly so.");
//     break;
//   case 2:
//     console.log("Reply hazy, try again.");
//     break;
//   case 3:
//     console.log("Cannot predict future now.");
//     break;
//   case 4:
//     console.log("Do not count on it.");
//     break;
//   case 5:
//     console.log("My sources say no.");
//     break;
//   case 6:
//     console.log("Outlook not so good");
//     break;
//   case 7:
//     console.log("Signs point to yes.");
//     break;
// }
console.log(eightBall);
