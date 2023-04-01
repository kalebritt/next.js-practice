let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 0;

if (age >= 18 && registeredEarly) {
  raceNumber += 1000;
}

if(age >= 18 && registeredEarly) {
  console.log(`You will race at 9:30 am and your race numver is ${raceNumber}.`)
}