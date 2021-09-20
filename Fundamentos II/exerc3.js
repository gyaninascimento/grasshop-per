/**Guardião da cores
Às vezes, é necessário manter as variáveis separadas, para garantir que não sejam alteradas por engano. Variáveis declaradas com let não podem ser usadas fora do bloco de código onde vivem.

INSTRUÇÕES
Dentro das {} do bloco de código do laço for...of:

Adicione drawBox(color) */

var color = 'yellow';
drawBox(color);
for (let color of [
  'blue',
  'green',
]) {
  drawBox(color);

}
drawBox(color);