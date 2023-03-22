// Desafio 1
function compareTrue(a, b) {
  return a && b;
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
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maxNumber = Math.max(...numbers);
  return numbers.filter((num) => num === maxNumber).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const dist1 = Math.abs(mouse - cat1);
  const dist2 = Math.abs(mouse - cat2);
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  return numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzBuzz';
    }
    if (num % 3 === 0) {
      return 'fizz';
    }
    if (num % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(trocaCodigo) {
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return trocaCodigo.replace(/[aeiou]/g, (vogal) => vogais[vogal]);
}

function decode(trocaCodigo) {
  const vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return trocaCodigo.replace(/[12345]/g, (vogal) => vogais[vogal]);
}

// Desafio 10
function techList(arrayList, nome) {
  let arrayListENome = [];
  arrayList = arrayList.sort();
  for (let index = 0; index < arrayList.length; index += 1) {
    arrayListENome.push({ tech: arrayList[index], name: nome });
  }
  if (arrayList.length === 0) {
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
