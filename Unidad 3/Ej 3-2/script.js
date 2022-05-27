alert("punto 3a-1) / Calcular la supeficie de un rectángulo de base B y altura H");
console.log("Punto 3a-1");
console.log("Calcular la superficie de un rectángulo de base B y altura H");
var B = parseFloat( prompt("Ingrese un valor en cm para la base del rectángulo") );
console.log("El valor ingresado para la base es " + B + " cm")
var H = parseFloat( prompt ("Ingrese un valor en cm para la altura del rectángulo"));
console.log ("El valor ingresado para la altura es " + H + " cm")
var superficieRectangulo = parseFloat(B*H).toFixed(2); //se redondea a dos decimales
console.log("Superficie del rectánculo = " + superficieRectangulo + " cm2");
alert("Superficie del rectánculo = " + superficieRectangulo + " cm2");

alert("punto 3a-2) / Calcular la superficie de un triángulo de base B y altura H");
console.log("Punto 3a-2");
console.log("Calcular la superficie de un triángulo de base B y altura H");
var B = parseFloat( prompt("Ingrese un valor en cm para la base del rectángulo") );
console.log("El valor ingresado para la base es " + B + " cm")
var H = parseFloat( prompt ("Ingrese un valor en cm para la altura del rectángulo"));
console.log ("El valor ingresado para la altura es " + H + " cm")
var superficieTriangulo = parseFloat(B*H/2).toFixed(2); //se redondea a dos decimales
console.log("Superficie del rectánculo = " + superficieTriangulo+ " cm2");
alert("Superficie del rectánculo = " + superficieTriangulo+ " cm2");

alert("punto 3a-3) / Calcular la superficie de un círculo de radio r");
console.log("Punto 3a-3");
console.log("Calcular la superficie de un círculo de radio r");
var radio = parseFloat( prompt("Ingrese un valor en cm para el radio del círculo") );
console.log("El valor ingresado para el radio r es " + radio + " cm");
console.log("El valor de PI es " + Math.PI);
var rCuadrado = Math.pow(radio,2);
console.log("el radio al cuadrado es = " + rCuadrado + "cm2");
var superficieCirculo = parseFloat((Math.PI * rCuadrado).toFixed(2)); //se redondea a dos decimales
console.log("Superficie del circulo es = " + superficieCirculo + " cm2");
alert("Superficie del circulo es = " + superficieCirculo + " cm2");


//RESOLUCIÓN PUNTO b)

console.log("punto b)");

var x1 = 3;
var x2 = 5;
var x3 = 7;

var producto = x1 * x2 * x3;
var suma = x1 + x2 + x3;
var promedio = suma / 3;

console.log ("El producto es = " + producto);
console.log ("La suma es = " + suma);
console.log ("El promedio es = " + promedio);


//RESOLUCION PUNTO c)

console.log("Punto c)");

var coefDescuento = 0.15;
var precioProducto1 = 90.35;
var precioProducto2 = 207.55;
var precioProducto3 = 576.99;
var precioProducto4 = 632.26;
var precioProducto5 = 405.47;

var totalSinDescuento = precioProducto1 + precioProducto2 + precioProducto3 + precioProducto4 + precioProducto5;

//console.log("El total sin descuento sin redondeo es de $ "+ totalSinDescuento);
//¿por qué la suma de números con dos decimales da un múmero con más de dos decimales?
// ver http://puntoflotante.org/
// ver https://study.com/academy/lesson/numeric-data-types-in-c-programming.html


totalSinDescuento = totalSinDescuento.toFixed(2); //redondeo a 2 decimales
console.log("El total sin descuento es de $ "+ totalSinDescuento);

var totalDescuento = totalSinDescuento*coefDescuento;
totalDescuento = totalDescuento.toFixed(2);
console.log("El descuento es de $ " + totalDescuento);

var totalAPagar = totalSinDescuento - totalDescuento;
console.log("El total a pagar es " + totalAPagar);


alert("punto d) / Convertir pesos a su equivalente en Dólares");
console.log("Punto d) / Convertir pesos su equivalente en dólar según cotización");

var cantidadPesos = parseFloat( prompt("Ingrese cantidad de pesos a convertir a dólares") );

var cotizacionDolar = parseFloat(prompt("Ingrese cotización del Dólar en pesos"));

var equivalenciaEnDolares = (cantidadPesos/cotizacionDolar).toFixed(2);

console.log("El equivalente en Dólares es de U$S " + equivalenciaEnDolares);



// Resolución punto e)
alert("punto e) / Calcular el IVA de una factura");
console.log("Punto d) / Calcular el IVA de una factura");

const alicuotaIva = 0.21;

var totalFactura = parseFloat(prompt("Ingrese el total de la factura (importe final iva incluido)"));

var netoGravado = (totalFactura/(1+alicuotaIva)).toFixed(2);

console.log("Neto gravado $ " + netoGravado);

var ivaFactura = (netoGravado*alicuotaIva).toFixed(2);

console.log("Iva $ " + ivaFactura);

console.log("Total Factura $" + totalFactura);

console.log("FIN EJERCICIOS UNIDAD 3")