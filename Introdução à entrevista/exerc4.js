/**Tudo ou nada
A array testResults contém uma lista de strings. Cada string é 'pass' ou 'fail'.

A função check() deve iterar através da array e retornar 'failed'

Se alguma string for igual a 'fail'. Se todas as strings são 'pass', então retorna o comprimento da array.

INSTRUÇÕES
Dentro da declaração de função check():

Iterar por results e testar se cada string é igual a 'fail'
Se for, retorna a string 'failed'
Abaixo o laço for:

Retorna results.length */

import { testResults } from 'grasshopper.laboratory';
function check(results, ___) {
  for (var testResults of results) {
    if (testResults === 'fail') {
      return 'failed';
    }
  }
  return results.length + ' test passed';
};
console.log(check(testResults));