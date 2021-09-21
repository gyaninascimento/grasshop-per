/**Meu assistente
Neste desafio, você usará uma função que recebe outra função como um argumento. A função sendo usada como um argumento é uma função de retorno de chamada.

INSTRUÇÕES
Adicione outra chamada de função myAssistant()
Para o 1º argumento: dê um tempo como uma string
Para o 2º argumento: use setAlarm outurnOnLights como função retorno de chamada */

function myAssistant(time, callbackFunction, ___) {
    console.log('I am your personal assistant, and I am happy to help with your request');
    callbackFunction(time, ___);
  };
  myAssistant('6pm', recordShow);
  myAssistant('10am', setAlarm);