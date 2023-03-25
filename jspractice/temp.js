//kelvin temp
const kelvin = 293;
//temp of celsius
const celsius = kelvin - 273;
//fahrenheit from celsius
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
const newton = Math.floor((celsius * 33) / 100);
console.log(newton)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
