/**Auxiliar de conta
Neste desafio, você usará uma função auxiliar para atualizar uma função de divisão de contas para que inclua impostos.

INSTRUÇÕES
Dentro da declaração de função splitBill():

Crie uma variável que armazena o valor retornado da chamada de calculateTax(total)
Atualize total para incluir a variável que armazena o imposto */

import { calculateTax } from 'grasshopper.helperFunctions';
function splitBill(total, people, ___) {
  let clt = calculateTax(total, ___);
  return (total += clt) / people;
};
console.log(splitBill(76, 4));