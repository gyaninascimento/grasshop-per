/**Alguns putts
Neste desafio, você criará uma função que calcula se sua pontuação está abaixo do par.

A função deve inserir seu score e o número de par e produzir a diferença.

INSTRUÇÕES
Dentro da declaração de função underPar():

Adicione 2 parâmetros dentro dos parênteses (), o 1º para a pontuação e o 2º para o par
Adicione um comando de retorno dentro do bloco de código {} que retorna par menos a pontuação
Fora da declaração da função:

Adicione 2 argumentos à chamada de função: um número para a pontuação e um número para o par */

function underPar(score, par) {
    return par - score;
  };
  console.log(underPar(10, 2));