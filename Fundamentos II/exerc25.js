/**Cálculo da média
Neste desafio, você atualizará a declaração de função averageRating para usar um hotelList, obterá suas ratings e, em seguida, return a average() daquelas ratings. A função average() que você criou no último desafio é importada no início do código. É possível usá-la para encontrar o valor médio das ratings.

INSTRUÇÕES
Atualize o comando return para usar o valor de average(ratings)
Registre a classificação média de hoptropolisHotels no console. */

import { getData, findHotels } from 'grasshopper.reviews';
import { average, getRatings } from 'myFunctions';
function averageRating(hotelList, ___) {
  let ratings = getRatings(hotelList, ___);
  return average(ratings, ___);
};
let grasslandHotels = getData('Grassland', findHotels, ___);
console.log('Average Grassland hotel rating:');
console.log(averageRating(grasslandHotels));
let hoptropolisHotels = getData('Hoptropolis', findHotels, ___);
console.log('Average Hoptropolis hotel rating:');
console.log(averageRating(hoptropolisHotels));