/**Saída interna
Nesta lição, você criará uma função que pega uma array de números e retorna a soma de seus itens.

INSTRUÇÕES
Dentro do bloco de código de sum():

Declare uma variável para usar como saída. Defina seu valor como 0
Dentro de um laço for...of, adicione cada elemento à variável
Abaixo de laço for...of, retorne à variável */

let numbers = [
    2,
    3,
    5,
    ___
  ];
  function sum(numberArray, ___) {
    var sum = 0;
    for (var num of numberArray) {
      sum += num;
    }
    return sum;
  };
  console.log(sum(numbers));