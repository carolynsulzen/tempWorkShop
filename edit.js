function convertToCelsius (f){
  return (5 / 9) * (f - 32)
}

function createMessage(f, c){
  let message = (``)
  const numF = f * 1

  if(numF < 32){message = `That is very cold`;} 
  else if (numF < 64){message = `That is cold`;}
  else if (numF < 86){message = `That is warm`;}
  else if (numF < 100){message = `That is hot`;}
  else if (numF >= 100){message = `That is very hot!`;}
  return alert (`${f} degrees Fahrenheit is ${c} degrees Celsius. ${message}`);

}

function rand(limit){
  return Math.round (Math.random() * limit);
}


let Fahrenheit = prompt(`Please enter a temperature in fahrenheit and we will convert it to celsius`);
let convertedCelsius = convertToCelsius(Fahrenheit);
let output = createMessage (Fahrenheit, convertedCelsius);
console.log (output);

Fahrenheit = prompt (`Let's try again! Enter a new temperature that we will convert from Fahrenheit to Celsius`);
convertedCelsius = convertToCelsius(Fahrenheit);
output = createMessage (Fahrenheit, convertedCelsius);
console.log(output);

let getRandomInt = rand(110);
convertedCelsius = convertToCelsius(Fahrenheit);
output = createMessage (getRandomInt, convertedCelsius);
console.log (output);
