/**
 * Ejercicio 1
 *
 */
let trenes = [true, true, true, false, false, false, false, false];
let i = 0;
let max = trenes.length;
console.info("ejercicio 1");
while (i < max) {
  console.log(
    `El tren número ${i + 1} ${trenes[i] ? 'esta' : 'no está'} funcionando`,
  );

  i++;
}

/**
 * Ejercicio 2
 *
 */
console.info("ejercicio 2");
i = 0;
do {
  console.log(`El tren número ${i + 1} ${trenes[i] ? 'esta' : 'no está'} funcionando`);
  i++;
} while (i < max);

/**
 * Ejercicio 3
 */
console.info("ejercicio 3");
for (let i = 0; i < trenes.length; i++) {
  console.log(`El tren número ${i + 1} ${trenes[i] ? 'esta' : 'no está'} funcionando`);

}

/**
 * Ejercicio 4
 */
trenes = trenes.map(tren => tren = { funcionamiento: tren, nocturno: false });
trenes[9] = { funcionamiento: true, nocturno: true };

console.log(trenes);

/**
 * Ejercicio 5
 */
trenes.forEach(tren => tren.funcionamiento = true)
console.log(trenes);

/**
 * Ejercicio 6
 */
trenes[11] = { funcionamiento: true, nocturno: true };
console.log(trenes);

/**
 * Ejercicio 7
 */
const dias = ["l","m","x","j","v","s","d"]
trenes = trenes.map(tren => tren = {...tren, dias});
trenes[12] = { funcionamiento: true, nocturno: true, dias:["s"] };
console.log(trenes);


/**
 * Ejercicio 8
 * Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de la lista y su número 
 * de asiento (basado en el orden del índice).
 * Nota: El primer asiento del tren es el 1 y no el 0.*
 */
const pasajeros = [
  { name: 'Alicia Gutierrez' },
  { name: 'Alfonso Gomez' },
  { name: 'Luis Navarro' },
  { name: 'Oscar Garcia' },
  { name: 'Andres Fernandez' },
  { name: 'Lucia Mellado' }
];
pasajeros.forEach((pasajero,i) => console.log(`El pasajero ${pasajero.name} tiene reservado el asiento ${i+1}`));

/**
 * Ejercicio 9
 * Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
 * Nota: Pensemos que a la larga pueden existir más listas.*
 */

 /**
  * Returns the list modified with the item added to it
  * @param {Array} list - array where add the name
  * @param {String} name - name to be added
  * @returns {Number} List length
  */
 function addPassenger(list, name){
  return list.push({name});
 }

 /**
  * Returns the list modified with the item removed from it
  * @param {Array} list - array where remove the name
  * @param {String} name - name to be deleted
  * @returns {Number} List length
  */
 function removePassenger(list, name){
  let index = list.findIndex(item => item.name === name);
  if(index > -1){
    list.splice(index,1);
  }
  return list.length
 }

 /**
 * Ejercicio 10
 * La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, 
 * pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula 
 * un o varios billetes.
 * Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los 
 * billetes quedaban desactualizados.*
 */
function bookTicket(name, seat){

}
 