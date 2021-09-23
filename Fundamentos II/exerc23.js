/*Adicionar à lista
Neste desafio, você concluirá a declaração de função getRatings(). Esta função salvará as avaliações do hotel em uma array em vez de apenas registrá-las no console.

INSTRUÇÕES
Dentro da declaração de função getRatings(), depois da array ratings:

Adicione um laço for...of para percorrer cada element de hotelList Dentro de laço for...of:
Use o método .push() adicione cada element.rating à array ratings*/

import { getData, findHotels } from 'grasshopper.reviews';
function getRatings(hotelList, ___) {
  let ratings = [
   
  ];
  for (var element of hotelList) {
    ratings.push(element.rating);
  }
  return ratings;
};
let grasslandHotels = getData('Grassland', findHotels, ___);
console.log('Ratings Array:');
console.log(getRatings(grasslandHotels));
