/**Gerador de nomes de banda
Neste desafio, você usará um laço dentro de outro laço para ajudar a gerar novas ideias de nomes de banda. Isso se chama usar um laço aninhado.

INSTRUÇÕES
Ajude a gerar novas ideias de nomes de banda combinando duas arrays [] usando laços aninhados

Adicione 2 strings ao array do laço externo, como 'Happy' e 'Hungry'
Adicione 2 strings ao array do laço interno, como 'Squids' e 'Twins' */

for (var adj of [
    'Raging',
    'Happy',
    'Hungry',
   
  ]) {
    for (var noun of [
      'Pharmacists',
      'Squids',
      'Twins',
      
    ]) {
      print('The ' + adj + ' ' + noun);
    }
  }