console.log('js02 EJERCICIO 2');

var palabra1 = "hola";
var palabra2 = "chau";

//Test A

frase = palabra1 + " mundo";
alert(palabra1);
alert(palabra2);
alert(frase);

//Test B
var palabra1 = "hola";
var palabra2 = "chau";

palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";
alert(palabra1);
alert(palabra2);
alert (frase);

//Test C
var palabra1 = "hola";
var palabra2 = "chau";

palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;
alert(palabra1);
alert(palabra2);
alert (frase);

//Test D
//var palabra1 = "hola";
//var palabra2 = "chau";
palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "= 2";
alert(palabra1);
alert(palabra2);
alert(frase);


