# Conceptos básicos

Métodos de la consola
console.assert(). Para hacer comparaciones
console.dir(document.body)
console.dirxml()
console.group()
console.table()
console.time

benchmark.js --> librería para ver temas de rendimiento. 

Variables válidas y no válidas
No sirven: puntos(.), guiones(-), espacios ( ) ni palabras reservadas

Tipos de variables en JS:
- Integer (no)
- Null
- Object
- String
- Function
- Number (incluyendo NotANumber)
- Boolean
- Undefined
- Array (es objeto)
- Symbol
Se pueden examinar con el operador typeof(argument); 


Operadores:
Diferencia entre número++ y ++numero

Modo estricto: no hace unas comprobaciones porque te comprometes a usar una serie de buenas prácticas, con lo cual el navegador no interpreta ciertas cosas. Si has hecho chungeces, te da error. 

Función delete (buscar);

Propiedad with (no funciona, no usar)
Método eval()


Evaluación al or (||)
Parámetros opcionales en funciones
function algo(nombre) {
  nombre = nombre || "Robot"
  console.log(nombre);
}

Esto sirve para dar un valor por defecto si no hay uno de entrada. Tener cuidado aquí porque debemos tener cuidado con el tipo de dato que entra (parsearlo si no es int o float) y luego cuidado extra porque si es un 0 te va a dar el caso 

=== Operador ternario ===
Permite, en una sola línea, evaluar condiciones. Así
esMiembro ? pasar() : noPasar()

Es para cosas sencillas, de lo contrario a menudo te puedes liar con muchas operaciones


=== BUCLES ===

// Variables de control del bucle
var control = 1;

while (control <= 10) {
  //definiciones de variables. Las funciones se definen fuera del bucle porque si no creas una función cada vez que recorres el bucle

  // Operaciones 

  // Lo que cierra el bucle
}

Los bucles tienen una estructura break y continue. El break permite salirse del bucle antes de que se cumpla el ciclo que establecimos
for (var i = 0; i < 10)

Por ejemplo el bucle for tiene unos métodos 


ParseInt --> obligatorio pasarle una base de trabajo, normalmente de 10. 

"Arguments" parece un array, huele como una array, pero no lo es. Es un pseudo array


Objeto Date, truco: 

new Date (2018)
Esto lo interpreta como milisegundos y te devuelve un 1/01/1970

new Date (2018, 0);
Ignora el segundo parámetro porque es 0, pero le permite saber que quieres ya saber el año 2018 y te devuelve el 1/01/2018

getUTCFullYear() 


==== ARRAYS ====

var arreglo = new Array(100) es la longitud predeterminada, no se suele usar y se declara una variable con [] que ya es un array

Para saber si es un array, hay una función isArray. Antes no existía y había que andar pintando en el HTML y hacer chanchullos varios

push y pop (añadir al final y eliminar lo último son los métodos más habituales)

para borrar, método splice()

Diferencia entre usar forEach y map en un array, depende de si vamos a recorrerlo o modificarlo. ¿por qué? porque el método map devuelve ya de por si un array, de modo que te ahorras código y tener que crear tú un array antes, luego ir añadiéndole elementos, etc. (probar);


==== OBJETOS LITERALES ====
For... in --> itera sobre las propiedades del objeto. Es un for específico para objetos, pero no itera las propiedades en un orden

==== FUNCIONES ====
Solo tienen una propiedad: name
Todas devuelven undefined

Se pueden crear clases con funciones (en versiones anteriores a ES6)

Todo lo que se pueda devolver en el return de una función va más rápido. Siempre. 

El this dentro de una arrow function siempre vale _self

Las funciones de JS son capaces de recordar las variables cuando se crearon. 