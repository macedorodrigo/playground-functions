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
  if (distanciaGato2 === distanciaGato1) {
    return 'os gatos trombam e o rato foge';
  } else if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let resultado = [];
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
// Desafio 9
function encode(trocaCodigo) {
  let fraseCodificada = '';
  for (let i = 0; i < trocaCodigo.length; i += 1) {
    if (trocaCodigo[i] === 'a') {
      fraseCodificada += 1;
    } else if (trocaCodigo[i] === 'e') {
      fraseCodificada += 2;
    } else if (trocaCodigo[i] === 'i') {
      fraseCodificada += 3;
    } else if (trocaCodigo[i] === 'o') {
      fraseCodificada += 4;
    } else if (trocaCodigo[i] === 'u') {
      fraseCodificada += 5;
    } else {
      fraseCodificada += trocaCodigo[i];
    }
  }
  return fraseCodificada;
}

function decode(trocaDecodificada) {
  let fraseDecodificada = '';
  for (let i = 0; i < trocaDecodificada.length; i += 1) {
    if (trocaDecodificada[i] === '1') {
      fraseDecodificada += 'a';
    } else if (trocaDecodificada[i] === '2') {
      fraseDecodificada += 'e';
    } else if (trocaDecodificada[i] === '3') {
      fraseDecodificada += 'i';
    } else if (trocaDecodificada[i] === '4') {
      fraseDecodificada += 'o';
    } else if (trocaDecodificada[i] === '5') {
      fraseDecodificada += 'u';
    } else {
      fraseDecodificada += trocaDecodificada[i];
    }
  }
  return fraseDecodificada;
}

// Desafio 10
function techList(arrayList, nome) {
  let arrayListENome = [];
  arrayList=arrayList.sort();
  for (let index = 0; index < arrayList.length; index += 1) {
    arrayListENome.push({tech:arrayList[index], name: nome });
  }
  if(arrayList.length === 0) {
      return 'Vazio!';
    }
  
  return arrayListENome;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
