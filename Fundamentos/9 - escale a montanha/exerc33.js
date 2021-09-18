/**A subida final
Você está quase no pico, mas deve escalar os últimos 3 metros para chegar ao topo. Tomara que a otherBackpack tenha uma corda dentro da propriedade equipment.

INSTRUÇÕES
Adicione um laço for...of para percorrer todos os itens dentro da otherBackpack.equipment
Adicione uma if...else statement dentro das {}do bloco do laço for...of e teste se element é igual a'rope'
Se o item que você está examinando for 'rope', imprima uma mensagem dizendo que a corda foi encontrada
Dentro das {} do bloco else, imprima uma mensagem dizendo que a corda não foi encontrada */

for (var element of otherBackpack.equipment) {
    if (element === 'rope') {
      print('A corda foi encontrada');
    } else {
      print('A corda não foi encontrada');
    }
  }