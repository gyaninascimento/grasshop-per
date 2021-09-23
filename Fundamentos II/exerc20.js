/**Obtenha o que você pede
Neste desafio, você recuperará e imprimirá avaliações de hotéis usando a função getData(), importada da API grasshopper.reviews. O 1º argumento de getData() é o nome de uma cidade. O 2º argumento é uma função retorno de chamada que diz a getData() que tipo de comentários encontrar.

INSTRUÇÕES
Atualize o 1º argumento de getData() para 'Grassland'
Adicione grasslandHotels.forEach() à próxima linha de código, usando o argumento printHotel */

import { getData, findHotels } from 'grasshopper.reviews';
function printHotel(hotel, ___) {
  console.log('___HOTEL_INFO___');
  console.log('type: ' + hotel.type);
  console.log('city: ' + hotel.city);
  console.log('price: ' + hotel.price);
  console.log('rating: ' + hotel.rating);
};
let grasslandHotels = getData('Grassland', findHotels, ___);
grasslandHotels.forEach(printHotel);