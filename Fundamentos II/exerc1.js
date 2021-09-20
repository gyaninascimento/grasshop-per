/**Bot de bate-papo
Neste desafio, você criará um bot de bate-papo usando o método de inclusão e algumas if statements. O método .includes() pode ser usado em uma string para verificar se ela contém um valor específico. Por exemplo, 'I love coding'.includes('love') pesquisa a string 'I love coding' para o argumento 'love'. Como a frase 'I love coding' contém 'love', todo o comando retorna true.

INSTRUÇÕES
A 1ª if statement já está completa. Ele responderá se 'hello' estiver em qualquer lugar na string chat.

Atualize a 2ª if statement substituindo chat === 'bye' por chat.includes('bye') */

print(chat);
if (chat.includes('hello')) {
  print('Hi, can I help you pick a destination?');
}
if (chat.includes('bye')) {
  print('See you later, have a great trip!');
}