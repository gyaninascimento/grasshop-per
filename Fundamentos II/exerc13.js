/**Atualização do assistente
Nesta lição, você usará a palavra-chave import para importar uma função para usar como um retorno de chamada. Um comando de importação é uma maneira de usar o código armazenado em um local diferente. Use a função de retorno de chamada turnOffFan dentro de uma chamada de função myAssistant() para agendar quando desligar o ventilador.

INSTRUÇÕES
Na parte inferior do código:

Adicione myAssistant()
Use uma string como o 1º argumento para definir a hora
Use turnOffFan como o 2º argumento para usar como um retorno de chamada */

import { recordShow, setAlarm, turnOffFan, turnOnFan, turnOffLight, turnOnLight } from 'assistantFunctions';
function myAssistant(time, callbackFunction, ___) {
  console.log('Scheduling:');
  callbackFunction(time, ___);
  console.log('Complete.');
};
myAssistant('8am', turnOnFan);
myAssistant('10am', turnOffFan);