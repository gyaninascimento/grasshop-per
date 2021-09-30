/**Dados ruins
Neste desafio, você usará console.log() para encontrar um bug.

A função getLength() deve imprimir o comprimento de cada string na array produce.

Entretanto, ela está imprimindo 0 para um dos itens, o que significa que pode haver dados incorretos na array produce.

Use console.log() para inspecionar a array produce e descubra o porquê.

INSTRUÇÕES
Dentro do laço for...of que está na função getLength():

Use console.log() para imprimir cada word */
import { produce } from 'grasshopper.data';
function getLength(words, ___) {
  for (let word of words) {
    console.log(word.length + ' letters');
    console.log(word);
    ___
  }
};
getLength(produce);