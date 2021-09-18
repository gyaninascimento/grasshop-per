/*Que tom de azul você consegue?
Neste desafio, você verificará uma propriedade objeto como parte de um teste if statement. Se essa propriedade for maior que > 200, então o objeto será usado na drawBox().

INSTRUÇÕES
Remova a função drawBox()
Adicione uma if statement
Dentro dos () do teste da if statement, adicione uma verificação de rgbObject.blue > 200
Dentro das {} do bloco de código da if statement, adicione drawBox(rgbObject)*/

print(rgbObject.blue);
if (rgbObject.blue > 200) {
  drawBox(rgbObject);
}