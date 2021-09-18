/**Arco-íris mais comprido
Neste desafio, você usará um laço for...of para repetir uma array de cores e criar um padrão de arco-íris.

INSTRUÇÕES
Dentro das {} do bloco laço for...of:

Adicione uma 3ª função drawBox() usando a variável de laço x como argumento
Adicione uma função newLine() após a 3ª função drawBox() */

for (var x of [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    
  ]) {
    drawBox(x);
    drawBox(x);
    drawBox(x);
    newLine();
  }