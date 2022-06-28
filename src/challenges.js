// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let vezesNumeros = 0;
  let bigNumber = numbers[0];

  for (i = 0; i < numbers.length; i += 1) {
    if (bigNumber < numbers[i]) {
      bigNumber = numbers[i];
    }
  }
  for (let i2 = 0; i2 < numbers.length; i2 += 1) {
    if (bigNumber === numbers[i2]) {
      vezesNumeros += 1;
    }
  }
  return vezesNumeros;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  if (distanciaGato2 === distanciaGato1){
    return 'os gatos trombam e o rato foge'
  } else if(distanciaGato1 < distanciaGato2){
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  for(i = 0; i < numbers.length; i += 1){
  let divisor3 = numbers[i] % 3;
  let divisor5 = numbers[i] % 5;
  let divisor15 = numbers[i] % 15;
  if (divisor15 === 0){
    return 'fizzBuzz'
  } else if(divisor3 === 0){
    return 'fizz'
  } else if(divisor5 === 0){
    return 'buzz'
  } else {
    return 'bug!'
  }
}
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
