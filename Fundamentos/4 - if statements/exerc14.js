/**Jogo de adivinhação
Neste desafio, você criará dicas para adivinhar entre as 3 diferentes conchas para encontrar a ervilha escondida. Você usará o operador de comparação !== que significa é diferente de. Por exemplo, 5 !== 4 seria true, pois 5 é diferente de 4.

INSTRUÇÕES
Use o operador é diferente de !== para verificar onde a ervilha está escondida.

Adicione uma if statement que testa (pea !== 3)
Imprime uma mensagem quando pea não está sob a concha 3 */

var pea = pickRandom([
  1,
  2,
  3,
  
]);
if (pea !== 1) {
  print('Not under shell 1');
}
if (pea !== 3) {
  print('Not under shell 3');
}