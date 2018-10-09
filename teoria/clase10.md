![shieldsIO](https://img.shields.io/github/issues/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript Avanzado para desarrolladores Front-end](https://fictizia.com/formacion/curso-javascript-avanzado)
### POO con JS, ECMA6, Patrones de diseño, AJAX avanzado, HTML5 avanzado, APIs externas.


## Clase 10

### WebSockets

![WS_Sockets](http://fernetjs.com/wp-content/uploads/2012/11/websocket-lifecycle.png)
- Protocolo de comunicación qe se negocia sobre HTTP
- Full-duplex
- Única conexión permanente (Siempre conectado)
- Stream de mensajes
- Contenido en tiempo real
- Orientado a "eventos" (mensajes)
- Baja latencia


**Entendiendo los eventos**

![Sockets](http://cdn.sandsmedia.com/ps/onlineartikel/pspic/picture_file/53/WebSocket4dd23ade6df2a.png)


**Negociación del protocolo WebSocket**

> Para establecer una conexión WebSocket, el cliente manda una petición de negociación WebSocket, y el servidor manda una respuesta de negociación WebSocket, como se puede ver en el siguiente ejemplo:
> [WebSockets en Wikiwand](https://www.wikiwand.com/es/WebSocket)

- Cliente:
```
  GET /demo HTTP/1.1
  Host: example.com
  Connection: Upgrade
  Sec-WebSocket-Key2: 12998 5 Y3 1 .P00
  Sec-WebSocket-Protocol: sample
  Upgrade: WebSocket
  Sec-WebSocket-Key1: 4 @1 46546xW%0l 1 5
  Origin: http://example.com

  ^n:ds[4U
```

- Servidor:
```
  HTTP/1.1 101 WebSocket Protocol Handshake
  Upgrade: WebSocket
  Connection: Upgrade
  Sec-WebSocket-Origin: http://example.com
  Sec-WebSocket-Location: ws://example.com/demo
  Sec-WebSocket-Protocol: sample

  8jKS'y:G*Co,Wxa-
```
> Los 8 bytes con valores numéricos que acompañan a los campos Sec-WebSocket-Key1 y Sec-WebSocket-Key2 son tokens aleatorios que el servidor utilizará para construir un token de 16 bytes al final de la negociación para confirmar que ha leído correctamente la petición de negociación del cliente.


### WS: Nativo

- [Soporte](http://caniuse.com/#search=websocket)
- [Documentación en MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

**Abrir la conexión**
```javascript
var myWebSocket = new WebSocket("ws://www.websockets.org");
```

**Gestión de Eventos**

- Siempre dispondremos del parametro event.
```javascript
myWebSocket.onopen = function() { console.log("Connection open ..."); };
myWebSocket.onmessage = function(evt) { console.log( "Received Message: ", evt.data); };
myWebSocket.onclose = function() { console.log("Connection closed."); };      
```

**Envio de mensajoes**
```javascript
myWebSocket.send("Hello WebSockets!");
```

**Cerrar la conexión**
```javascript
myWebSocket.close();
```

### WS: Sockets.io
![Sockets](https://camo.githubusercontent.com/b74075d1deca125ad36f8fded4055f896d9f2108/687474703a2f2f666f746f732e73756265666f746f732e636f6d2f32376135653361633065393936666134663063643066613239386635356366636f2e706e67)

Caracrerísticas:
- Fácil
- Soporte a navegadores obsoletos (Fallback)
- Popular
- Extraordinariamente simple

Eventos reservados:
- socket.on("connect", cb)
- socket.on("disconnect", cb)
- socket.on("error", cb) *Solo cliente*
- socket.on("message", cb)

**Abrir la conexión**
```javascript
  var socket = io("url");
```

**Gestión de Eventos**
```javascript
  socket.on('channel', function(data) { 
    console.log( "Received Message: ", data); 
  });
```

**Envio de mensajoes**
```javascript
socket.emit('channel', data);
```

**Cerrar la conexión**
```javascript
socket.disconnect() 
socket.close(); // Si quieres reabrir. -> socket.connect();
```

### Nativo vs. Librerías

- [Differences between socket.io and websockets en Stackoverflow](http://stackoverflow.com/a/38558531)
- [WebSocket and Socket.IO by DWD](https://davidwalsh.name/websocket)
- [An Introduction to WebSockets by Matt West](http://blog.teamtreehouse.com/an-introduction-to-websockets)


### Ejemplos

- [IT Pulse](https://github.com/UlisesGascon/twitter-sentiments)
- [Curratelo](https://github.com/UlisesGascon/curratelo)

### Ejercicios

**1 -** Utilizaremos la API de Blockchain.info para mostrar la informaión en tiempo real de las transacciones de Bitcoins.
- [Blockchain AP](https://blockchain.info/es/api)
- [Exchange Rates API](https://blockchain.info/es/api/exchange_rates_api)
- [Bitcoin Websocket API](https://blockchain.info/es/api/api_websocket)

**Detalles importantes:**
- Suscribete a "unconfirmed_sub" y "blocks_sub"
- Filtra las operaciones tipo "utx"
- Convierte los [Satoshis en Bitcoins](https://aulabitcoin.com/basicos/que-es-un-satoshi/). 
- 1 BTC = 100,000,000 Satoshi

**Consejos:**

- Puedes habilitar cors en la api de exchange rate con `https://blockchain.info/es/ticker?cors=true`.
- `{response}.op` nos permite filtrar por tipo de operación.
- `{response}.x.out` nos permite conocer todos los segmentos disponibles y concatenar sus valores `{response}.x.out[{i}].value`. 
- Recuerda que los segmentos estan en Satoshis y debemos convertirlos a BTC. 

**Concepto**

![](https://i.giphy.com/3ohze2apsm6Qpb281y.gif)

```javascript
    //Tu solución
```