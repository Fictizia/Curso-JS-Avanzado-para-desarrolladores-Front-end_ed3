/**
 * 
 * 
 * Hagamos la [web del Metro](https://www.metromadrid.es/es/index.html) más divertida.
- Saca el estado actual de todas las líneas del metro de Madrid por consola.

```javascript
    // Tu solución
```

- Respuesta esperada:
```txt
Circulación normal en Línea 1
Circulación normal en Línea 8
Circulación normal en Línea 2
Circulación normal en Línea 9
Circulación normal en Línea 3
Circulación normal en Línea 10
Circulación normal en Línea 4
Circulación normal en Línea 11
Circulación normal en Línea 5
Circulación normal en Línea 12
Circulación normal en Línea 6
Circulación normal en Ramal
Circulación normal en Línea 7
Circulación normal en ML1
```
 */


var listaLineas = Array.prototype.slice.call(document.querySelectorAll('.circulacion .txt a'));
var outputString = ``;

listaLineas.forEach((item, index) => {
    let circulacion = listaLineas[index].innerText;
    outputString = outputString + (`${circulacion}\n`);
});

console.log(outputString);
