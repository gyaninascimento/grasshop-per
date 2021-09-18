/*Lance uma moeda
Neste desafio, você usará if statements para controlar o fluxo do código. If Statements permitem que você controle se uma parte do código é executada. Se o teste dentro dos parênteses () for verdadeiro, o código dentro das {} do bloco será executado. O JavaScript diferencia maiúsculas e minúsculas. Isso significa que as strings 'tails', 'Tails' e 'tAiLs' são diferentes.

INSTRUÇÕES
Adicione uma nova if statement no final do código
Dentro dos parênteses () de sua nova if statement, teste se answer é igual a 'tails'
Use a função drawBoxes() dentro de sua nova if statement para desenhar algo*/

var answer = pickRandom([
  'heads',
  'tails',
  
]);
print(answer);
if (answer === 'heads') {
  drawBoxes('gwg ggg gwg');
}
if (answer === 'tails') {
  drawBoxes('red');
}