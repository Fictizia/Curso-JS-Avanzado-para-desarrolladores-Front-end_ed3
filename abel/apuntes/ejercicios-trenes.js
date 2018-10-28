//1 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando while. 
var trenes = [
	{nombre: "tren 1", isWorking: true, status: "en movimiento"},
	{nombre: "tren 2", isWorking: true, status: "en movimiento"},
	{nombre: "tren 3", isWorking: true, status: "en movimiento"},
	{nombre: "tren 4", isWorking: false, status: "parado"},
	{nombre: "tren 5", isWorking: false, status: "parado"},
	{nombre: "tren 6", isWorking: false, status: "parado"},
	{nombre: "tren 7", isWorking: false, status: "parado"},
	{nombre: "tren 8", isWorking: false, status: "parado"},
  	{nombre: "tren 9", isWorking: false, status: "parado"},
  	{nombre: "tren 10", isWorking: false, status: "parado", horario: "nocturno"}
];

  while (i < trenes.length) {
	  console.log(`El tren ${trenes[i].nombre} está ${trenes[i].status}`);
	  i++;
  }

// 2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando Do... While.
  var i = 0;
	do {
    console.log(`El ${trenes[i].nombre} está ${trenes[i].status}`);
    i++
  }
  while (trenes[i].isWorking)
    
// 3.- Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando for.   
  for (var i = 0; i < trenes.length; i++) {
    if (trenes[i].isWorking) {
      console.log(`El ${trenes[i].nombre} está ${trenes[i].status}`);
    }
  }

// 4.- Servicio nocturno en el tren 10. Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del tren 10 se especifique que es nocturno. Independientemente de si esta parado o funcionando.
// OPCION 1
  for (var i = 0; i < trenes.length; i++) {
    if (trenes[i].isWorking) {
      console.log(`El ${trenes[i].nombre} está ${trenes[i].status}`);
    }
    if (trenes[i].horario === "nocturno") {
      console.log(`El ${trenes[i].nombre} tiene horario nocturno`);
    }
  }

// OPCION 2
  for (var i = 0; i < trenes.length; i++) {
    if ((trenes[i].isWorking) || (trenes[i].horario === "nocturno")) {
      console.log(`El ${trenes[i].nombre} está ${trenes[i].status} y tiene horario ${trenes[i].horario}`);
      // El tren 1 está en movimiento y tiene horario undefined
    }
  }

// OPCION 3
  for (var i = 0; i < trenes.length; i++) {
    var output = `El ${trenes[i].nombre} está ${trenes[i].status}`;
  
    if (trenes[i].nombre === "tren 10") {
      output = `${output} y tiene horario nocturno`;
    }
  }
  console.log(output);

// 5 -  5 - ¡Refactoricemos! ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno de los trenes esta funcionando?.
    // Todos los trenes funcionando
    function trainIsWorking(array) {
      for (var i = 0; i < array.length; i++) {
        array[i].status = "en movimiento"
      }
    }

    console.log(trenes);

// 6 - El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.
    trenes.push({
      nombre: "tren 11",
      isWorking: false,
      status: "parado",
      horario: "nocturno"
    });
    console.log(trenes);

// 7 - El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados. El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados. Este tren será el número 13.

trenes.push({
  nombre: "Tren juerguista",
  isWorking: false,
  status: "parado"
})
console.log(trenes);

const ultimoTren = trenes.slice(-1)[0];
console.log(ultimoTren);

const date = new Date;
let dia = date.getDay(); // 0-6 desde lunes
console.log(dia);

dia === 5 ? dia = "Sábado" : dia = "Otro día";
console.log(dia);

if (dia === "Sábado") {
  ultimoTren.status = "en movimiento";
}

console.log(`El tren juerguista está ${ultimoTren.status}`);