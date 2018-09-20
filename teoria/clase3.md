![shieldsIO](https://img.shields.io/github/issues/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript Avanzado para desarrolladores Front-end](https://fictizia.com/formacion/curso-javascript-avanzado)
### POO con JS, ECMA6, Patrones de diseño, AJAX avanzado, HTML5 avanzado, APIs externas.

## Clase 3

### Arrays

- Creando un array:
    ```javascript
	var arreglo = [];
	arreglo = [1, "platano", "piscina", "manzana", true];
    ```

- Usando el Índice:
    ```javascript
	arreglo[1];
    ```

- Cambiar un valor del Índice:
    ```javascript
	arreglo[0] = "fresa";
	arreglo[4] = "pera";
	arreglo[2] = "limón";
    ```

- delete *sobrescribe a undefined*
    ```javascript
    delete arreglo[0];
    ```

- Elementos vacios:
    ```javascript
    arreglo[0] = undefined;
    ```

**Propiedades**

- Índice total:
    ```javascript
    	arreglo.length;
    ```

- Usando el Índice total en un bucle:
    ```javascript
	var numeros = [1, 2, 3, 4, 5];
	for (var i = 0; i < numeros.length; i++) {
	  numeros[i] *= 10;
	}
    ```

**Métodos**

- .isArray() *Confirmar que se trata de un Array*:
    ```javascript
    	var arreglo = [1,2,3]
    	
    	// true
    	Array.isArray([1]);
    	Array.isArray(arreglo);
    	
    	// false
    	Array.isArray();
	Array.isArray({});
	Array.isArray(null);
	Array.isArray(undefined);
    ```

- .toLocalString() *Retorna como string (configuración regional) todos los elementos*:
    ```javascript
	var numero = 1337.89;
	var fecha = new Date();
	var miArray = [numero, fecha, 'más datos'];
	
	var arrayConvertida = miArray.toLocaleString(); 
	console.log(arrayConvertida);     
    ```

- .toString() *Retorna una cadena de texto con todos los nombres*:
    ```javascript
	var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
	console.log(amigos.toString());
    ```

- .push() *Añadir elemento al índice*:
    ```javascript
	arreglo.push("nuevo");
    ```

- .pop() *Eliminar el último elemento del índice*:
    ```javascript
    	arreglo.pop();
    ```

- .shift() *Eliminar el primer elemento*:
    ```javascript
    	arreglo.shift();
    ```

- .unShift() *Añade nuevos elementos al principio del array y devuelve la longitud actualizada*:
    ```javascript
	var miArray = [1, 2];
	
	miArray.unshift(true, "otros datos...");
	console.log(miArray);
    ```

- .splice() *Borrar*:
    ```javascript
    	var manzana = arreglo.splice(3, 1);
    ```


- .slice() *Devuelve un nuevo Array con un segmento determinado del Array original*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	var citricos = frutas.slice(1, 3);
	console.info(citricos);
    ```

- .concat() *Retorna un nuevo Array con los Arrays especificados concatenados*:
   - Dos Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    
    	var nuevaArray = arreglo.concat(arreglo2);

	console.log(nuevaArray); 
    ```
   - Múltiples Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    	var otroArreglo = ['abc', 1, false]
    
    	var nuevaArray = arreglo.concat(arreglo2, [5.25, 100], otroArreglo);

	console.log(nuevaArray);
    ```


- .join() *Une todos los elementos en una cadena*:
    ```javascript
	var array = ['dato1', 2, , 'masDatos'];
	var datosJuntos = array.join();      // 'dato1,2,masDatos'
	var datosJuntos2 = array.join('');    // 'dato12masDatos'
	var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
    ```

- .indexOf() *Devuelve la posición donde se escuentra el elemnto o -1 si no lo encuentra*:
    ```javascript
	var array = [2, 5, 9];
	var index = array.indexOf(9); // 2
	var index = array.indexOf(12); // -1
    ```

- .lastIdexOf() *Devuelve la posición del último elemento que coincide o -1 si no lo encuentra*:
    ```javascript
	var array = [7, 1, 3, 7];
	array.lastIndexOf(7); // 3
	array.lastIndexOf(2); // -1
    ```

- .sort() *Ordenación de los elementos*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	frutas.sort(); // ["Limón", "Mango", "Manzana", "Naranja", "Platano"]
	
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.sort(); // [2, "más datos...", true, "uno"]
    ```

- .reverse() *Invierte el orden de un Array*:
    ```javascript
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.reverse(); 
	console.log(miArray) // ["más datos...", true, 2, "uno"]
    ```

- .forEach() *Se ejecuta la función por cada elemnto del array*:
    ```javascript
	function logger(element, index, array) {
	    console.log("array[" + index + "] = " + element);
	}
	[2, 5, 9].forEach(logger);
    ```

- .map():
    ```javascript
	var arreglo = ["plátano", "fresa", "lima", "manzana"];
	var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
	console.log(resultado);
    ```

- .some() *Verifica si alguno de los elementos en el arreglo pasan la prueba implementada por la función dada:*:
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].some(tamañoValido);   // true
	[12, 54, 18, 130, 44].some(tamañoValido); // true
    ```


- .every() *verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada:*
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].every(tamañoValido);   // false
	[12, 54, 18, 130, 44].every(tamañoValido); // true    
    ```

- .filter() *Crea un nuevo array con aquellos elementos que cumplan la condición*:
    ```javascript
	function tamañoValido(elemento) {
	  return elemento >= 10;
	}
	var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);
    ```

- .reduce() *Aplica una función a un acumulador y a cada valor de un vector para reducirlo a un único valor (de izquierda a derecha)*:
    - Base:
    ```javascript
	var reduce = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indiceActual, array){
	  return valorAnterior + valorActual;
	});
	console.log(reduce); // 10
    ```
    
    - Sumar los valores de un Array:
    ```javascript
    var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
    ```
    
    - Fusionar varios Arrays en uno solo:
    ```javascript
    var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
      return a.concat(b);
    });
    console.log("integrado es", integrado); //[0, 1, 2, 3, 4, 5]
    ```

- .reduceRight() *Aplica una función a un acumulador y a cada valor (de izq. a dcha.) de un vector para reducirlo a un único valor (de derecha a izquierda)*:
    ```javascript
  	var reduceRight = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indiceActual, array){
	  return valorAnterior + valorActual;
	});
	console.log(reduceRight); // 10
    ```

**Arreglos avanzados**
```javascript
var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];

var juntandoArreglos = [arreglo1, arreglo2];

function testArreglos () {
    console.log(juntandoArreglos[0][0]);
    console.log(juntandoArreglos[1][3]);
};
```

### Ejercicios

> Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript

![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)

**1 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando *while*.

```javascript
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
	var numeroTren = 1;
	while(numeroTren <= totalTrenes) {
		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));	
		numeroTren++
	};
};
```

- Respuesta esperada (consola):

```
El tren número 1 esta funcionando
El tren número 2 esta funcionando
El tren número 3 esta funcionando
El tren número 4 no esta funcionando
El tren número 5 no esta funcionando
El tren número 6 no esta funcionando
El tren número 7 no esta funcionando
El tren número 8 no esta funcionando
```

**2 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada...  usando *Do... While*.

```javascript
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
	var numeroTren = 1;
	do{
		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));	
		numeroTren++
	} while(numeroTren <= totalTrenes) ;
};
```


**3 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada...  usando *for*.

```javascript
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));	
	};
};
```



**4 - #compliquemos!** Servicio nocturno en el tren 10.
*Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del
tren 10 se especifique que es nocturno. Independientemente de si esta parado o funcionando.*

```javascript
var trenesOperativos = 8;
var totalTrenes = 15;

function estadoDetalle () {
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		if(numeroTren === 10){
		console.info("IMPORTANTE: El tren número 10 es nocturno");
		} else {
  		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
		}	
	};
};
```


**5 - ¡Refactoricemos!** ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno de los trenes esta funcionando?.

```javascript
var trenesOperativos = 8;
var totalTrenes = 15;

function estadoDetalle () {
	if (!trenesOperativos > 0){
	console.log("IMPORTANTE: Ningún tren esta funcionando");
	return;
	} else if (trenesOperativos == totalTrenes){
		console.log("Todos los trenes estan funcionando");
		return;
	}
	
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		if(numeroTren === 10){
		console.info("IMPORTANTE: El tren número 10 es nocturno");
		} else {
  		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
		}	
	};
};
```

**6 -** El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.

```javascript
var trenesOperativos = 8;
var totalTrenes = 15;

function estadoDetalle () {
	if (!trenesOperativos > 0){
	console.log("IMPORTANTE: Ningún tren esta funcionando");
	return;
	} else if (trenesOperativos == totalTrenes){
		console.log("Todos los trenes estan funcionando");
		return;
	}
	
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		if(numeroTren === 10 || numeroTren === 12){
		console.info("IMPORTANTE: El tren número " + numeroTren + " es nocturno");
		} else {
  		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
		}	
	};
};
```


**7 -** El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados.
 El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados.
 Este tren será el número 13.

*NOTA: EL TREN 13 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código*

```javascript
var trenesOperativos = 8;
var totalTrenes = 15;
var diaSemana = "Sábado";

function estadoDetalle () {
	if (!trenesOperativos > 0){
	console.log("IMPORTANTE: Ningún tren esta funcionando");
	return;
	} else if (trenesOperativos == totalTrenes){
		console.log("Todos los trenes estan funcionando");
		return;
	}
	
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		if(numeroTren === 10 || numeroTren === 12){
		console.info("IMPORTANTE: El tren número " + numeroTren + " es nocturno");
		} else if(numeroTren === 13){
		console.log("El tren fiestero (12+1) " + (diaSemana === "Sábado" ? "esta funcionando" : "funcionará el sábado"));
		} else {
  		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
		}	
	};
};
```


### Objetos

- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [w3schools Objects](http://www.w3schools.com/js/js_objects.asp)

**Objetos Literales**

- Propiedades:
    ```javascript
	var miObjeto = {
	    cadena: 'esto es una cadena',
	    numero: 2,
	    booleano: false
	};
	```


- Métodos:
    ```javascript
	var miObjeto = {
	    saludar: function(){
			console.log("hola!");
		}
	};
	```
	
- Trabajando con espacios y caracteres especiales:
    ```javascript
	var miObjeto = {
		nombre: "objeto",
	    "año": 2015,
	    "estado del sistema": "correcto"
	};
	
	console.log(miObjeto["año"]);
	miObjeto["estado del sistema"] = "fuera de servicio";
	console.log(miObjeto["estado del sistema"]);
	```

- Acortar objetos:

    ```javascript
	var objetoAbreviado = objeto.muy.muy.largo.que.tiene.muchos["metodos y propiedades"];
	
	objetoAbreviado.propiedad1;
	objetoAbreviado.metodo1();

	```

**Métodos**

- .defineProperties() *Define nuevas o modifica propiedades existentes directamente en el objeto, returnando el objeto.*:
    ```javascript
    	var miObjeto = {propiedad: "Propiedad original..."}
	Object.defineProperties(miObjeto, {
	  "propiedad1": {
	    value: true,
	    writable: true
	  },
	  "propiedad2": {
	    value: "Cadena de texto",
	    writable: false
	  }
	});
	console.info(miObjeto);
	miObjeto.propiedad = "Propiedad original Modificada";
	console.info(miObjeto.propiedad);
	miObjeto.propiedad2 = "Cadena de texto... ¿modificada?";
	console.info(miObjeto.propiedad2);
    ```

- .getOwnPropertyDescriptor() *Devuelve las detalles de los objetos y métodos del objeto. Undefined en caso de no existir*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};

	console.info(Object.getOwnPropertyDescriptor(miObjeto, 'propiedad1'));
	// Object {value: "Datos", writable: true, enumerable: true, configurable: true}
	
	console.info(Object.getOwnPropertyDescriptor(miObjeto, 'inventado'));
	// undefined
    ```

- .getOwnPropertyNames() *Devuelve un array con todos los nombres de las propiedades y métodos del objeto*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log(Object.getOwnPropertyNames(miObjeto));
	// ["metodo", "propiedad1"]
    ```

- .isExtensible() *Determina si un objeto es extensible*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
	
	var sellado = Object.seal(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(sellado));
	
	var congelado = Object.freeze(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(congelado));
	
	Object.preventExtensions(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
    ```


- .hasOwnProperty() *Devuelve true o false si l apropiedad existe o no*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Tiene la propiedad \"propiedad1\"?", miObjeto.hasOwnProperty('propiedad1'));
	console.log("¿Tiene la propiedad \"propiedad2\"?", miObjeto.hasOwnProperty('propiedad2'));
    ```


- .propertyIsEnumerable() *Devuelve true o false si la propiedad es especificada es enumerable.*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Es enumerable \"propiedad1\"?", miObjeto.propertyIsEnumerable('propiedad1'));
	console.log("¿Es enumerable \"metodo\"?", miObjeto.propertyIsEnumerable('propiedad2'));
    ```

- .toLocaleString() *Retorna como string (configuración regional) todas las propiedades*:
    ```javascript
	var fecha = new Date();
	
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos",
	  fecha: fecha
	};
	
	miObjeto.toLocaleString()
	console.log("La fecha es ", miObjeto.fecha);
    ```

**For... in**

Itera sobre todas las propiedades de un objeto, en un orden arbitriario.
```javascript
	var objeto1 = {
		propiedad1: "hola",
		propiedad2: 2,
		propiedad3: false,
		propiedad4: [true,2,5, "..."],
		propiedad5: {
			dato: "más datos..."
		},
		metodo: function(){
			console.log("hola");
		}
	}
	function mostrar_propiedades(objeto, nombreObjeto) {
	   var resultado = "";
	   for (var i in objeto) {
	      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
	   }
	   return resultado;
	}
	
	mostrar_propiedades(objeto1, "objeto1");
```

### Funciones


- Propiedad *name*:
    ```javascript
  function miFuncion (){
    // vacia
  };

  console.log(miFuncion.name);
    ```


- **Declaración y ejecución**:
    ```javascript
  function dameTrue (){
    return true
  };

  function dameFalse () {
    return false
  };

  dameTrue();
  dameFalse();
    ```

- **this**:
  - como función (*this* contexto *window*)
    ```javascript
    function ambitoGlobal () {
      return this;
    }
    
    ambitoGlobal()
    ```
  - como método en un objeto (*this* contexto objeto al que pertenece el método)
    ```javascript
    var objeto = {};
    
    objeto.miMetodo = function () {
      return this;
    }
    
    objeto.miMetodo();
    ```   
  - como constructor de un objeto (*this* contexto objeto creado)
  - .apply() y .call() (modificación explícita de *this*)

- **Argumentos:**
  - El exceso de argumentos no es un problema
  - La falta de argumento crea un valor indefinido
    - El Objeto Arguments no es un Array, solo es similar.
    ```javascript    
  
	  function pruebaArguemntos () {
	  console.log(arguments);
	  console.info(arguments[0]);
	  console.info(arguments[1]);
	  }
	  
	  pruebaArguemntos (1, "vale", true);
	  
    ```
- [Objeto Arguments](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/arguments)


- **Retorno**
```javascript
  function sumaCuadrados (a, b) {
    return (a*a) + (b*b);
  };
```

### Scope

- Declaración y ejecución:
    ```javascript
  var numero = 450;
  var otroNumero = 23;

  function sumaCuadrados (a, b) {
    var numero = a;
    var otroNumero = b;
    var calculo = (numero*numero) + (otroNumero*otroNumero);
    console.log("\"numero\" es \""+numero+"\", local");
    console.log("\"otroNumero\" es \""+otroNumero+"\", local");
  };

  function verificarGlobales() {
    console.log("\"numero\" es \""+numero+"\", global");
    console.log("\"otroNumero\" es \""+otroNumero+"\", global");
  };
    ```

### Funciones Avanzadas

- Anónimas (expresiones):
    ```javascript
  var sumaCuadrados = function (a, b) {
    return (a*a) + (b*b);
  };
    
    console.log("El .name de sumaCuadrados es "+sumaCuadrados.name)
    ```

- Funciones como dato:
    ```javascript
  function saludo () {
    console.log("hola!");
  };

  function lanzar (funcion){
    funcion();
  };
    ```

- Funciones anónimas autoejecutables:
    ```javascript
  (function() {
    console.log("hola Amigo/a")

  }) (); //ex:Jquery
    ```


- Funciones anónimas con parámetros:
    ```javascript
  ( function(quien){
     console.log("hola " + quien);
  })("Amigo/a");
    ```


- Función que devuelve una función anónima:
  - Asignando una variable:
    ```javascript
  function saludo(quien){
          return function(){
                  alert("hola " + quien);
          }
  }
  var saluda = saludo("Amigo/a");
  saluda();
    ```

  - Sin asignar una variable:
    ```javascript
  function saludo(quien){
          return function(){
                  alert("hola " + quien);
          }
  }
  saludo("Amigo/a")();
    ```


### Funciones Avanzadas: Anidación

**Con variables**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
var saluda = saludar("Amigo/a");
saluda();
```

**Ejecución directa**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
saludar("Amigo/a")();
```
    
### Funciones Avanzadas: Recursión

- Calcular el [factorial](https://www.wikiwand.com/es/Factorial).
  
    ```javascript
    function factorial(n){
      return n <= 1 ? 1 : n * factorial(n-1);
    }
    
    factorial(0); // n! = 1
    factorial(1); // n! = 1
    factorial(2); // n! = 2
    factorial(3); // n! = 6 (3*2*1)
    factorial(4); // n! = 24 (4*3*2*1)
    factorial(5); // n! = 120 (5*4*3*2*1)
    factorial(6); // n! = 720 (...)
    // ...
    ```

### Funciones Avanzadas: Closures

> Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.

> No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.
> [Closures MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

- Fábrica de función:
    ```javascript
  function sumador(x) {
    return function(y) {
      return x + y;
    };
  }

  var sum1 = sumador(10); //Closure
  var sum2 = sumador(30); //Closure

  console.log(sum1(2)); // Devuelve 12
  console.log(sum2(2)); // Devuelve 32
  console.log(sumador(20)(2)); //Devuelve 22
    ```

- Otro ejemplo, ahora temporizado:
    ```javascript
  function saludar(segundos){
    var hola = "Hola, Hola!";

    setTimeout(function(){
      console.info(hola);
    },segundos*1000);
  }

  saludar(2);
    ```

- Otro ejemplo... más útil:
    ```javascript
      var varGlobal = "Soy un dato Global";
      var burbuja;

      function nivel1() {
        var varInterna = "Soy un dato interno. -> nivel1";

        function nivel2() {
          console.log("Estoy dentro de la funcion -> nivel2")
          console.log("Estoy dentro de la funcion -> nivel2 y puedo acceder al nivel1: "+varInterna)
        }

        burbuja = nivel2;

      }

      nivel1();

      burbuja();
      console.log("Burbuja recuerda su contexto original")
    ```

### Funciones Avanzadas: Callbacks

> En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

- Ejemplo condensado:
    ```javascript
  var quieroCallback = function(parametro, callback){
      if ((callback) && (typeof callback === 'function')){
          callback(parametro);
      }
      else
          console.log(parametro, callback);
  }
   
  quieroCallback('a', 'b');
   
  quieroCallback('a', function(val){
      console.log(val);
  });
    ```


- Ejemplo con Jquery:
    ```javascript
    $('#elemento').fadeIn('slow', function() {
      // código del callback
  });
    ```


- Otro ejemplo:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      callback();
  }

  comerSandwich('jamón', 'queso', function() {
      console.info('Ya terminé...');
  });
    ```


- Ejemplo con Callback opcional:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback) {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```


- Sanitizar el Callback:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback && typeof(callback) === "function") {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```


### Funciones Avanzadas: Asincronia
```javascript
	    function comerSandwich(elemento1, elemento2, callback) {
	      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    
	    setTimeout(alarma, 5000);
	    function alarma(){
	      console.log("ring! ring!.. pasaron los 5 segundos!");
	    };
	
	    
	      if (callback && typeof(callback) === "function") {
	          callback();
	      }
	  }
	
	  comerSandwich('jamón', 'queso', function() { 
	      console.log('Ya terminé...');
	  });
```


- Más información: 
  - [Callback Functions in JavaScript de Louis Lazaris](http://www.impressivewebs.com/callback-functions-javascript/)
  - [Creando y utilizando callbacks de Pablo Novas en fernetjs](https://fernetjs.com/2011/12/creando-y-utilizando-callbacks/)

### Funciones Avanzadas: Funciones anónimas autoejecutadas

- **Sintaxis:**
```javascript
    (function(){
      console.log('Hola Mundo!');
    })();
```

- **Incluyendo referencias y manipulando otros elementos:**
```javascript
    var myApp = myApp || {};
    
    (function(w, doc, ns){
      
      ns.accesoWindow = function(){
        return w === window;
      };
      ns.accesoDocument = function(){
        return doc === document;
      };
      ns.confirmacion = function(){
        console.log('Hola Mundo! Mis caracteristicas son: \n Acceso a Window: '+this.accesoWindow()+'\n Acceso a Document: '+this.accesoDocument());
      }
    })(window, document, myApp);

    
    // myApp.confirmacion()
```

### Ejercicios

#### Trenes

**8 -** Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
*Nota: El primer asiento del tren es el 1 y no el 0.*

```javascript
var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

function listaPasajeros(){
	pasajeros.forEach(function(pasajero, posicion){
        console.log("El pasajero "+pasajero+" tiene reservado el asiento "+(posicion+1));
	})
};
```

- Respuesta esperada (consola):
```
	El pasajero Alicia Gutierrez tiene reservado el asiento 1
	El pasajero Alfonso Gomez tiene reservado el asiento 2
	El pasajero Luis Navarro tiene reservado el asiento 3
	El pasajero Oscar Garcia tiene reservado el asiento 4
	El pasajero Andres Fernandez tiene reservado el asiento 5
	El pasajero Lucia Mellado tiene reservado el asiento 6
```


**9 -** Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
*Nota: Pensemos que a la larga pueden existir más listas.*

```javascript
var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

function agregarPasajero(nombre, lista) {
  lista.push(nombre);
};

function quitarPasajero(nombre, lista) {
  if (lista.length == 0) {
  	console.log("La lista \""+lista+"\" esta vacía.");
  } else {
  	var posicion = lista.indexOf(nombre);
  	
  	if(posicion !== -1){
  		console.log("El pasajero \""+lista[posicion]+"\" será eliminado!")
  		lista.splice(posicion, 1);
  	} else {
  		console.log("El pasajero \""+nombre+"\" no encontrado!")
  	}
  };
};
```


**10 -** La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes.
*Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*

```javascript
// Tu solución
```


**11 -** Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías para hacer transbordos directos entre las estaciones afectadas.

Nuestra Misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán,
Moncloa y Hortaleza. Es necesario incluir un texto informativo y el nombre del usuario también en el billete.

*Nota: Intenta utilizar Closures*

Info: 	
	- Tetuán (12)
   	- Moncloa (19)
   	- Hortaleza (21)

```javascript
// Tu solución
```