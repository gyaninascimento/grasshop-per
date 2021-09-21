/**Substituição de recursão
Neste desafio, você usará uma função para corrigir recursivamente todos os erros de digitação de uma string.

INSTRUÇÕES
Na última linha da declaração de função updateAllNames():

Altere a return string para return updateAllNames()
Atualize os argumentos para (string, oldPart, newPart) respectivamente */

function updateAllNames(string, oldPart, newPart, ___) {
    if (string.includes(oldPart) === false) {
      return string;
    }
    string = string.replace(oldPart, newPart);
    return updateAllNames(string, oldPart, newPart);
  };
  console.log(travelDocument);
  console.log(updateAllNames(travelDocument, 'grasshoper', 'grasshopper'));