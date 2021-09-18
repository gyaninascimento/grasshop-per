/**Lance uma moeda novamente
Neste desafio, você usará uma if...else statement para jogar uma moeda. if...else statements permitem que você controle qual código é executado quando o teste é verdadeiro e qual código é executado quando o teste é falso.

INSTRUÇÕES
Adicione uma função drawBoxes() dentro das {} do bloco else da if...else statement
Use uma string como argumento em sua nova função drawBoxes() */

var answer = pickRandom([
  'heads',
  'tails',
  
]);
print(answer);
if (answer === 'heads') {
  drawBoxes('gwg ggg gwg');
} else {
  drawBoxes('red');
}