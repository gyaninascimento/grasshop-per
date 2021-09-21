/*Um pouco mais de mudança
Neste desafio, você criará uma declaração de função que usa um comando de retorno para converter dólares em baht tailandês. A palavra-chave retorna diz a uma função para parar de executar e retorna um valor.

INSTRUÇÕES
Dentro do bloco de código {} da função inBaht():

Use let para criar uma variável chamada baht
Atribuir baht o valor dollars * 33
Retorna baht*/

let wallet = 50;
function inYen(dollars, ___) {
  let yen = dollars * 113;
  return yen;
};
function inBaht(dollars, ___) {
  let baht = dollars * 33;
  return baht;
};
console.log(wallet + ' US dollars is:');
console.log(inYen(wallet) + ' Japanese yen');
console.log(inBaht(wallet) + ' Thai baht');