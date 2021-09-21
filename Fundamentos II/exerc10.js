/**Ao máximo
Nesta lição, você adicionará uma chamada de função a uma declaração de função. Complete a declaração de função maximum() adicionando uma chamada de função larger().

INSTRUÇÕES
Dentro do laço for...of da declaração de função maximum():

Altere max = num para max = larger(max, num) */

function larger(a, b, ___) {
    return a > b ? a : b;
  };
  function maximum(array, ___) {
    let max = 0;
    for (let num of array) {
      max = larger(max, num);
    }
    return max;
  };
  console.log(list);
  console.log(maximum(list));