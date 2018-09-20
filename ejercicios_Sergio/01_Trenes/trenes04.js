/**
*
* #compliquemos! Servicio nocturno en el tren 10. 
* Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del tren 10 se especifique que es nocturno. 
* Independientemente de si esta parado o funcionando.
*
**/

var train = [true, true, true, false, false, false, false, false];

train.push(undefined,false);

var message = "";

for (var i=0; i<train.length; i++){
  var trainNumber = i + 1;
  
  if (train[i]){
      message = "El tren número " + trainNumber + " está funcionando.";
  } else {
      message = "El tren número " + trainNumber + " no está funcionando.";
  }

  if (trainNumber === 10){
      message += "\n" + "Este tren en nocturno.";
  }
  
  if (train[i] === undefined){
    continue;
  }
  
  console.log(message);
}