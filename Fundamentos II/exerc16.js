/**Um novo lugar
Neste desafio, você usará o método .push() para adicionar um novo elemento ao final de uma array.

INSTRUÇÕES
Dentro do objeto boatAtlanta:

Altere o valor de destination de Seattle para 'Atlanta'
Altere o valor de transportMode de car para 'boat' */

import { travelToCities } from 'grasshopper.travel';
let last = travelToCities[travelToCities.length - 1];
console.log(last.destination);
let boatAtlanta = {
  destination: 'Atlanta',
  transportMode: 'boat',
  cost: 200,
  country: 'Hoptopia',
  ___: ___
};
travelToCities.push(boatAtlanta);
last = travelToCities[travelToCities.length - 1];
console.log(last.destination);