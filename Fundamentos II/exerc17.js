/**Um novo caminho
Neste desafio, você usará o método .pop() para remover o último elemento de uma array. O método .pop() removerá o último item em uma array. Por exemplo: myArray.pop() pegaria o último item salvo em myArray, removeria esse item de myArray e retornaria o valor do item.

INSTRUÇÕES
Atualize atlantaTravel.transportMode para que seja igual a 'hovercraft'
Adicione travelToCities.push() à próxima linha de código
Use atlantaTravel como um argumento para travelToCities.push() */

import { travelToCities } from 'grasshopper.travel';
let atlantaTravel = travelToCities.pop();
atlantaTravel.transportMode = 'hovercraft';
travelToCities.push(atlantaTravel);
let last = travelToCities[travelToCities.length - 1];
console.log(last.destination);
console.log(last.transportMode);