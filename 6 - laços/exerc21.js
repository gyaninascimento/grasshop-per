/*Decodificador de imagem
Neste desafio, você usará uma if statement dentro de um laço for...of para revelar uma imagem. Cada vez que o laço for...of faz uma iteração, a if statement aninhada dentro dele testará a letter atual em img.

INSTRUÇÕES
Atualize a função drawBoxes() para usar a variável de laço letter em vez da string 'e'*/

for (var letter of img) {
    if (letter !== 'e') {
      drawBoxes(letter);
    }
  }