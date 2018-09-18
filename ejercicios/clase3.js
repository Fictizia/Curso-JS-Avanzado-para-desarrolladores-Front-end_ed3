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
