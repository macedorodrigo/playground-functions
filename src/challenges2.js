function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let repeated = {};
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (!repeated[numbers[i]]) {
      repeated[numbers[i]] = 1;
    } else {
      repeated[numbers[i]] += 1;
    }
    if (repeated[numbers[i]] === 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return `(${numbers.slice(0, 2).join('')}) ${numbers
    .slice(2, 7)
    .join('')}-${numbers.slice(7).join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const sides = [lineA, lineB, lineC].sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2];
}

function hydrate(beverages) {
  const total = beverages.match(/\d+/g).reduce((acc, cur) => acc + parseInt(cur), 0);
  return total === 1 ? `${total} copo de água` : `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
