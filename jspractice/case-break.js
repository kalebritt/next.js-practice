let athleteFinalPosition = 'first place';
//switch statements take in two parameters, the first one is the switch statement and the second one is the value to which the switch statement is assigned.
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}