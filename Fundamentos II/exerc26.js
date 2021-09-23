/**Pelo preço certo
Neste desafio, você filtrará os hotéis Grassland para mostrar apenas aqueles com um preço inferior a $100 por noite. Em seguida, encontrará a avaliação média dos hotéis Grassland acessíveis.

INSTRUÇÕES
Dentro da declaração de função underAHundred, adicione return hotel.price < 100
Atualize a declaração de variável affordableHotels para usar .filter(underAHundred) em grasslandHotels */

import { getData, findHotels } from 'grasshopper.reviews';
import { averageRating } from 'myFunctions';
let grasslandHotels = getData('Grassland', findHotels, ___);
function underAHundred(hotel, ___) {
  return hotel.price < 100;
};
let affordableHotels = grasslandHotels.filter(underAHundred);
console.log('Average Rating in Grassland under $100:');
console.log(averageRating(affordableHotels, ___));