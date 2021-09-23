/**De qualquer modo
Neste desafio, você registrará as classificações de todos os hotéis em Grassland no console. A chamada de função getData() retornará uma array de objetos. Cada análise de hotel objeto tem as mesmas 4 propriedades, mas valores diferentes:

let exampleHotel = { 
type: 'The Grassy Suites', 
city: 'Hoptropolis', 
price: 171, 
rating: 2​.8 
} 
INSTRUÇÕES
Adicione um laço for...of para percorrer cada objeto na array grasslandHotels
Adicione console.log() no bloco {} do laço, usando element.rating como argumento */

import { getData, findHotels } from 'grasshopper.reviews';
let grasslandHotels = getData('Grassland', findHotels, ___);
for (var element of grasslandHotels) {
  console.log(element.rating);
}