Apuntes 18/09/18

Closures
Callbacks

ES6

- Constantes: no permiten sobreescribir el contenido de la variable, aunque sí añadir contenido si es un array o modificar propiedades si es un objeto. 

Funciones flecha = () => {
  console.log("Esta es una función flecha);
  el this de la función no vale porque no tienen scope propio
}

yield = múltiples retornos (lo veremos)

arrow functions
const cosa = () =>  {{algo: "lo que sea"}} // Plantilla literal

Función anónima autoejecutada como arrow function, tu this es siempre windows y se llama this contextual

Las arrows function tampoco tienen arguments, se suelen usar (...args)

Parametros por defecto
function sumar (x, y = 7, z = 42)
sumar(10) // Se mantienen los valores de y y de z
sumar(10,11,12) // Los valores se sobreescriben

Más de 3 parámetros en una función es un lío, es un jaleo para entender eso

Parámetros adicionales con (...);

string.raw (cadena de texto que no se pinta)

ES6 Mejoras en objetos
// Antes
const obj = {
  x: x,
  y: y,
}

// Ahora
const obj = {
  x
  y
}

Propiedades computerizadas. Cuando te creas una propiedad de un objeto, puedes crear muchas de un viaje
ES6

obj = {
  foo = "bar",
  [ "prop_" + foo() ]: 42 // Permite añadir propiedades ejecutando un método, señalizándolo con los corchetes
}

// Definición de métodos ES5
var obj = {
  metodo: function blablabla() {}
}

// ES6

const obj = {
  metodo: () {}
}

Objetos desectructurados 

Funciones generadoras. No se pueden construir con arrows function
function* greatGenerator
yield (punto de parada), se ejecutan uno detrás del otro

Set y Maps. Weaksets y weakmaps
Symbol tipo primitivo nuevo

Promesas
resolve si va bien, reject si va mal
concatenar con .then()
promise.all y más métodos

Ejemplo 
function datosUsuario(user, callback) {
  // ...
  data = ajax, transformaciones, wathever;
  callback(data);
}
// Ejecutando la función
datos_usuario("123rel", function(data) {
  console.log(data);
}

Con promesas
function promesa_datos_usuario(user) {
  new Promise (resolve, reject) => {
    data = //...
    err = true;
    // ajax
    // transformaciones
    err ? reject() : resolve(data)
  }
}

promesa_datos_usuario("123rel")
  .then(otra_promesa)
  .then() // Tantos como quieras
  .catch() // Caso de error

  Métodos de promesas
  promise.race() <-- Recibe un array de promesas
  promise.all() <-- Ejecuta un .then cuando se ejecutan todos

  ES6 Modulos exportación
  
  // Fichero config.js
  let config = {
    token: secreto
  }

  export default config // exportar por defecto la variable config.js
  Se importa en otro lado. Como en React