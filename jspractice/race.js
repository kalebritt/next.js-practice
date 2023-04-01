let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 0;

if (age >= 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age >= 18 && registeredEarly) {
  console.log(
    `You will race at 9:30 am and your race number is ${raceNumber}.`
  );
} else if (age >= 18 && !registeredEarly) {
  console.log(
    `Your will race at 11:00 a.m. and your race number is ${raceNumber}`
  );
} else if (age < 18) {
  console.log(
    `You will race at 12:30 p.m. and your race number is ${raceNumber}.`
  );
} else if (age === 18) {
  console.log(`Please see the registration desk.`);
}
