/**
*
* #compliquemos! Servicio nocturno en el tren 10. 
* Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del tren 10 se especifique que es nocturno. 
* Independientemente de si esta parado o funcionando.
*
**/

var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
    for (numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
        console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    }	
};