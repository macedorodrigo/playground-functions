# Playground Functions
Este repositório contém uma coleção de funções simples. As funções estão divididas em desafios, sendo eles:

## Desafio 1 - compareTrue(a, b)
Retorna true se ambos os parâmetros forem verdadeiros e false caso contrário.

## Desafio 2 - calcArea(base, height)
Retorna a área de um triângulo dado sua base e altura.

## Desafio 3 - splitSentence(frase)
Recebe uma string e retorna um array contendo cada palavra da string como um elemento.

## Desafio 4 - concatName(array)
Recebe um array de strings e retorna uma string formada pela concatenação do último elemento com o primeiro, separados por vírgula e um espaço.

## Desafio 5 - footballPoints(wins, ties)
Recebe o número de vitórias e empates de um time de futebol e retorna o número total de pontos que o time tem em um campeonato.

## Desafio 6 - highestCount(numbers)
Recebe um array de números e retorna quantas vezes o maior número aparece no array.

## Desafio 7 - catAndMouse(mouse, cat1, cat2)
Recebe a posição de um rato e duas posições de gatos em uma linha e retorna qual gato irá pegar o rato ou se eles irão trombar.

## Desafio 8 - fizzBuzz(numbers)
Recebe um array de números e retorna um novo array contendo 'fizz' para números divisíveis por 3, 'buzz' para números divisíveis por 5, 'fizzBuzz' para números divisíveis por 3 e 5 e 'bug!' para os demais números.

## Desafio 9 - encode(trocaCodigo) - decode(trocaCodigo)
A função encode recebe uma string e substitui cada vogal presente na string pelos seus respectivos valores numéricos (a=1, e=2, i=3, o=4, u=5), retornando a string modificada.

A função decode recebe uma string que foi modificada pela função encode e substitui cada valor numérico presente na string pelos seus respectivos vogais, retornando a string original.

## Desafio 10 - techList(arrayList, nome)
A função techList recebe um array contendo uma lista de tecnologias e uma string com um nome. A função retorna um array de objetos, em que cada objeto possui uma propriedade tech (tecnologia) e uma propriedade name (nome), com os valores correspondentes às tecnologias do array e ao nome informado, respectivamente. Se o array estiver vazio, a função retorna a string 'Vazio!'.

## Desafio 11 - generatePhoneNumber(numbers)
A função generatePhoneNumber recebe um array de 11 números e verifica se todos os valores do array estão entre 0 e 9. Se algum valor estiver fora desse intervalo, a função retorna a string 'não é possível gerar um número de telefone com esses valores'. Caso contrário, a função verifica se algum número é repetido três vezes consecutivas, retornando a mesma string caso essa condição seja satisfeita. Se todas as condições forem atendidas, a função retorna uma string formatada como um número de telefone, no formato '(XX) XXXXX-XXXX'.

## Desafio 12:
A função triangleCheck recebe três argumentos que representam os comprimentos dos lados de um triângulo. A função retorna um valor booleano indicando se os três lados formam um triângulo válido. Um triângulo é considerado válido se e somente se a soma dos comprimentos de quaisquer dois lados for maior que o comprimento do terceiro lado.

A função primeiro ordena os três lados em ordem crescente e, em seguida, verifica se a soma dos dois menores lados é maior que o maior lado. Se esta condição for verdadeira, então os três lados formam um triângulo válido e a função retorna true. Caso contrário, a função retorna false.

## Desafio 13:
A função hydrate recebe um argumento de string representando uma lista de bebidas, cada uma seguida por um número indicando a quantidade de bebida em onças. A função calcula o total de água necessária para hidratar a pessoa que consumiu as bebidas.

A função primeiro extrai todos os valores numéricos da string usando uma expressão regular e, em seguida, os soma usando o método reduce. O total resultante representa o número de onças de água necessárias para hidratar a pessoa.

A função então verifica se o total de água é igual a 1 ou não. Se for, a função retorna uma string indicando que a pessoa precisa de "1 copo de água". Caso contrário, a função retorna uma string indicando o número total de copos de água necessários.