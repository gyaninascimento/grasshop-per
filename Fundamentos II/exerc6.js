/**O inverno está chegando
Neste desafio, você atualizará rapidamente variáveis usando os operadores atribuição de adição += e atribuição de subtração -=. A formiga guardou 40 sementes para o inverno, enquanto o gafanhoto não guardou nenhuma. A generosa formiga decide presentear o gafanhoto com 10 sementes.

INSTRUÇÕES
Atualize o código para que gift seja subtraído de ant e adicionado a grasshopper.

Altere ant -= 1 para ant -= gift
Altere grasshopper += 1 para grasshopper += gift */

let ant = 40;
let gift = 10;
let grasshopper = 0;
ant -= gift;
grasshopper += gift;
print('The Ant has ' + ant + ' seeds, and the Grasshopper has ' + grasshopper + ' seeds');