/**Cambista
Neste desafio, você aprenderá sobre declarações de função. Declarações de função salvam um bloco de código que pode ser usado sempre que o nome da função é chamado.

INSTRUÇÕES
A declaração de função inYen() pegará um número em dólares americanos e o converterá em ienes japoneses.

Atualize o 0 no último console.log() com inYen(100). */

function inYen(dollars, ___) {
    let amount = dollars * 113;
    return amount;
  };
  console.log('20 US dollars is:');
  console.log(inYen(20) + ' Japanese yen');
  console.log('100 US dollars is:');
  console.log(inYen(100) + ' Japanese yen');