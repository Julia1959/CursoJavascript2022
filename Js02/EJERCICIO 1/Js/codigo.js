console.log('js02 EJERCICIO 1 / TEST A');

var x = 10;
var y = 20;

x = x + x + 1;
y = y - y - x;

console.log('x=',x);
console.log('y=', y);

alert('Test A, x=' + x);
alert('Test A, y =' + y);

console.log('js02 EJERCICIO 1 / TEST B');

var x = 10;
var y = 20;

x = (x-y)+4;
y = 4+(y+5);

console.log('x=',x);
console.log('y=', y);

alert('Test B, x=' + x);
alert('Test B, y =' + y);

console.log('js02 EJERCICIO 1 / TEST C');

var x = 10;
var y = 20;

x = x*2-4;
y = 4-y*2;

console.log('x=',x);
console.log('y=', y);

alert('Test C, x=' + x);
alert('Test C, y =' + y);

console.log('js02 EJERCICIO 1 / TEST D');

var x = 10;
var y = 20;

x = (20-x)/y;
y = x+2/y; //ojo, x está afectada por la operación anterior y resulta x=0.5

console.log('x=',x);
console.log('y=', y);

alert('Test D, x=' + x);
alert('Test D, y =' + y);

console.log('js02 EJERCICIO 1 / TEST E');

var x = 10;
var y = 20;

x = ((1-x)*(y/8)*4*0);
y = x+3/x; // esto será un indeterminado 0/0. Muestra -infinity

console.log('x=',x);
console.log('y=', y);

alert('Test E, x=' + x);
alert('Test E, y =' + y);






