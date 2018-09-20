/** 
*  1 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando do while.
* El tren número 1 esta funcionando
* El tren número 2 esta funcionando
* El tren número 3 esta funcionando
* El tren número 4 no esta funcionando
* El tren número 5 no esta funcionando
* El tren número 6 no esta funcionando
* El tren número 7 no esta funcionando
* El tren número 8 no esta funcionando
**/
  
/** 
* Creo el objeto trenes con booleanos: true si funciona, false si no funciona.
**/
var train = [true, true, true, false, false, false, false, false];

/** 
* Recorro el array con Do While
**/
var control = 0;

do {
  var trainNumber = control + 1;
    if (train[control]) {
        console.log("El tren número " + trainNumber + " está funcionando.");
    } else {
        console.log("El tren número " + trainNumber + " no está funcionando.");
    }
    control++;
}
while (control < train.length)

