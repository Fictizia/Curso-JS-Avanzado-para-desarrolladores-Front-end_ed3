![shieldsIO](https://img.shields.io/github/issues/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript Avanzado para desarrolladores Front-end](https://fictizia.com/formacion/curso-javascript-avanzado)
### POO con JS, ECMA6, Patrones de diseño, AJAX avanzado, HTML5 avanzado, APIs externas.


## Clase 11

### Firebase

![FirebaseLogo](https://firebase.google.com/images/brand-guidelines/logo-standard.png)

- [Pricing](https://firebase.google.com/pricing/)
- [Features](https://firebase.google.com/features/)
- [Clientes](https://firebase.google.com/customers/)
- [Documentación](https://firebase.google.com/docs/)
  - [Primeros Pasos](https://firebase.google.com/docs/web/setup)
  - [Referencia de la API](https://firebase.google.com/docs/reference/js/)
  - [Ejemplos](https://firebase.google.com/docs/samples/#web)
- [Librerías y ayudas](https://firebase.google.com/docs/libraries/)

### Aprendiendo con Firebase 2.x

- [Firebase Docs](https://www.firebase.com/docs/)
- [Firebase Open Data Sets (deprecated)](https://www.firebase.com/docs/open-data/)
- [Firebase - GeoFire](https://github.com/firebase/geofire-js)
- [Firebase - Backbone](https://www.firebase.com/docs/web/libraries/backbone/quickstart.html)
- [Firebase - Angular](https://www.firebase.com/docs/web/libraries/angular/quickstart.html)
- [Firebase - Nodejs/js](https://www.firebase.com/docs/web/quickstart.html)
- [Firebase - Ionic](https://www.firebase.com/docs/web/libraries/ionic/guide.html)
- [Firebase - React](https://www.firebase.com/docs/web/libraries/react/)
- [Firebase - Ember](https://www.firebase.com/docs/web/libraries/ember/)


### Firebase: Primeros pasos

- [Crear una cuenta](https://www.firebase.com/signup/)

- Gestionar dependéncias en cliente:
```javascript
  <script src="https://cdn.firebase.com/js/client/2.2.9/firebase.js"></script>
```

- Gestionar dependéncias en Nodejs:
```
  npm install firebase -save
```


### Firebase: Limitaciones

- [Limitaciones técnicas](https://www.firebase.com/docs/web/guide/understanding-data.html#section-limitations)
- [Conversión de Arrays](https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase)


### Firebase: Guardando Datos

[Demo](https://codepen.io/ulisesgascon/pen/pyYYoR)
[Documentación](https://www.firebase.com/docs/web/guide/saving-data.html#section-ways-to-save)
- `set()` Almacena / remplaza los datos
- `update()` Actualiza los datos
- `push()` Alamacena los datos con un ID único.
- `transaction()` Para datos complejos y cocurridos.


**set()**
```javascript
const ref = new Firebase("https://<<---URL--->>.firebaseio.com/fb-ejemplos/escritura");
const usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});
```

```javascript
const ref = new Firebase("https://<<---URL--->>.firebaseio.com/fb-ejemplos/escritura");
usersRef.child("alanisawesome").set({
  date_of_birth: "June 23, 1912",
  full_name: "Alan Turing"
});
usersRef.child("gracehop").set({
  date_of_birth: "December 9, 1906",
  full_name: "Grace Hopper"
});
```


**update()**
```javascript
const hopperRef = usersRef.child("gracehop");
hopperRef.update({
  "nickname": "Amazing Grace"
});
```


**push()**
```javascript
// update y Callback
const dataRef = ref.child("IDs");
dataRef.push("Guardando datos...", error => {
  if (error) {
    console.warn(`No se han podido guardar los datos.${error}`);
  } else {
    console.info("Datos guardados con exito.");
  }
});
```


### Firebase: Recuperación de datos con eventos

[Demo](https://codepen.io/ulisesgascon/pen/grEEeP)
[Documentación: métodos](https://www.firebase.com/docs/web/guide/retrieving-data.html)
- `on()` fija un evento y disapra el callback con cada cambio
- `once()` devuelve los datos y elimina la suscripción
- `off()` elimina la suscripción
[Documentación: tipos de eventos](https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types)
- `value` cualquier cambio y devuelve toda a información
- `child_removed` cuando se elimina un nodo y devuelve la información por nodo
- `child_added` cuando se añade un nodo y devuelve la información por nodo 
- `child_changed` cuando se cambia un nodo y devuelve la información por nodo
- `child_moved` cuando se mueve el nodo (usando priority) y devuelve la información por nodo


**Evento (value)**
```javascript
const ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");

ref.on("value", snapshot => {
  console.log(snapshot.val());
}, errorObject => {
  console.log(`Fallo en lectura de datos: ${errorObject.code}`);
});
```


**Evento (child_changed)**
```javascript
const ref = new Firebase("https://<<--URL-->>.firebaseio.com/fb-ejemplos/escritura/users");

ref.on("child_changed", snapshot => {
  const usersData = snapshot.val();
  console.log("Nuevos cambios(child_changed): ", usersData);
});
```


**Evento (child_removed)**
```javascript
const ref = new Firebase("https://<<--URL-->>.firebaseio.com/fb-ejemplos/escritura/users");

ref.on("child_removed", snapshot => {
  const usersData = snapshot.val();
  console.log("Usuario eliminado(child_removed): ", usersData);
});
```


**once()**
```javascript
const ref = new Firebase("https://<<--URL-->>.firebaseio.com/fb-ejemplos/escritura/users");

ref.once("child_changed", snapshot => {
  const usersData = snapshot.val();
  console.log(`Nuevo cambio(once - child_changed): ${usersData}`);
});
```

**Quitar evento (value)**
```javascript
ref.off("value");
```

**Quitar todos los eventos**
```javascript
ref.off();
```


### Firebase: Queries
[Demo](https://codepen.io/ulisesgascon/pen/dMrrgb)
[Documentación](https://www.firebase.com/docs/web/guide/retrieving-data.html#section-queries)
- `orderByChild()` Ordenar por hijo
- `orderByKey()` Ordenar por Llave
- `orderByValue()` Ordenar por valor
- `orderByPriority()` Ordenar por prioridad

IMPORTANTE:

Recursos
- [Firebase - Queries Part I](https://www.firebase.com/blog/2013-10-01-queries-part-one.html)
- [Firebase - Queries Part II](https://www.firebase.com/blog/2014-01-02-queries-part-two.html)
- [Firebase - Denormalizing is normal](https://www.firebase.com/blog/2013-04-12-denormalizing-is-normal.html)
- [Firebase Docs - Ordenando Datos](https://www.firebase.com/docs/web/guide/retrieving-data.html#section-ordered-data)



**orderByChild()**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").on("child_added", snapshot => {
  console.log(`${snapshot.key()} was ${snapshot.val().height} meters tall`);
});
```

**orderByKey()**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByKey().on("child_added", snapshot => {
  console.log(snapshot.key());
});
```

**orderByValue()**
```javascript
const scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
scoresRef.orderByValue().on("value", snapshot => {
  snapshot.forEach(data => {
    console.log(`The ${data.key()} dinosaur's score is ${data.val()}`);
  });
});
```

### Firebase: Queries Avanzadas
[Demo](https://codepen.io/ulisesgascon/pen/qZvvve)
[Documentación](https://www.firebase.com/docs/web/guide/retrieving-data.html#section-complex-queries)
- `limitToFirst()` desde el primero...
- `limitToLast()` desde el final...
- `startAt()` empiezan por...
- `endAt()` terminan por...
- `equalTo()` igual a...


### Firebase: Queries Avanzadas (lo básico)

**limitToFirst()**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").limitToFirst(2).on("child_added", snapshot => {
  console.log(snapshot.key());
});
```


**limitToLast()**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("weight").limitToLast(2).on("child_added", snapshot => {
  console.log(snapshot.key());
});
```


### Firebase: Queries Avanzadas (concatenando)

**.orderByValue() y .limitToLast()**
```javascript
const scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
scoresRef.orderByValue().limitToLast(3).on("value", snapshot => {
  snapshot.forEach(data => {
    console.log(`The ${data.key()} dinosaur's score is ${data.val()}`);
  });
});
```


**.orderByChild() y .startAt()**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").startAt(3).on("child_added", snapshot => {
  console.log(snapshot.key());
});
```


**.orderByKey() y .endAt()**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByKey().endAt("pterodactyl").on("child_added", snapshot => {
  console.log(snapshot.key());
});
```


**.startAt() y .endAt()**:
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByKey().startAt("b").endAt("b~").on("child_added", snapshot => {
  console.log(snapshot.key());
});
```


**.equalTo()**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").equalTo(25).on("child_added", snapshot => {
  console.log(snapshot.key());
});
```

### Firebase: Queries Avanzadas (Ejemplo)

**Busquemos un dinosaurio que sea mas pequeño que un Stegosaurus**
```javascript
const ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.child("stegosaurus").child("height").on("value", stegosaurusHeightSnapshot => {
  const favoriteDinoHeight = stegosaurusHeightSnapshot.val();

  const queryRef = ref.orderByChild("height").endAt(favoriteDinoHeight).limitToLast(2);
  queryRef.on("value", querySnapshot => {
      if (querySnapshot.numChildren() == 2) {
        // Data is ordered by increasing height, so we want the first entry
        querySnapshot.forEach(dinoSnapshot => {
          console.log(`el dinosaurio más pequeño que el Stegosaurus es ${dinoSnapshot.key()}`);
          // Returning true means that we will only loop through the forEach() one time
          return true;
        });
      } else {
        console.log("El Stegosaurus es el dinosaurio más pequeño");
      }
  });
});
```

### Firebase: Trabajar Offline

[Documentación](https://www.firebase.com/docs/web/guide/saving-data.html#section-writes-offline)


```javascript
const presenceRef = new Firebase('https://<<--URL-->>.firebaseio.com/info/connectednow');
presenceRef.onDisconnect().set("I disconnected!");
```


### Firebase: Analicemos Código
**Ejemplos**
- [Código Fuente demo de Velocidad](https://github.com/UlisesGascon/raspberrypi-system-info-data-to-firebase)
- [Curratelo](https://github.com/UlisesGascon/curratelo)
- [Raspberrypi system info data to Firebase](https://github.com/UlisesGascon/raspberrypi-system-info-data-to-firebase)
- [Calidad del Aire con Firebase](https://github.com/UlisesGascon/Calidad-del-Aire-con-Firebase)
- [Agroduino](https://github.com/UlisesGascon/Agroduino)
- [Aire Madrid](https://github.com/UlisesGascon/Aire-Madrid)
- [EMT Bus Live](https://github.com/Borjagodoy/emtBusLive)
- [Bitcoin price ticker with Arduino](https://github.com/UlisesGascon/Bitcoin-price-ticker-with-Arduino)
- [MovieFire con Nodejs](https://github.com/UlisesGascon/Simple-API-REST-with-Firebase-and-IMBD)


### [Nuevo Firebase 3.x](https://firebase.google.com/)

![new_logo](http://cdn772.swedroid.se/wp-content/uploads/2016/05/google-firebase-logo-600x308.png)
![funcionalidades](https://cdn.scotch.io/1/Bg4r7dI1Q2W3bX9Sf4oD_unnamed.png)

**Más info**
- [Firebase expands to become a unified app platform](https://firebase.googleblog.com/2016/05/firebase-expands-to-become-unified-app-platform.html)
- [MIgration guide](https://firebase.google.com/support/guides/firebase-web)


**Claves del cambio**
- Nueva Interfaz
- Muchas funcionalidades Nuevas
- Un enfoque amplio a desarrollo de apps nativas (Android e iOS)
- Existe un asistente para migrar los proyectos a la nueva consola
- Los nuevos proyectos ya no componen el nombre del dominio

### Migración de FIrebase 2.x a 3.x

**Nueva versión de las librerías**
- Cliente
```html
<!-- Antes -->
<script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js"></script>
<!-- Ahora -->
<script src="https://www.gstatic.com/firebasejs/3.0.4/firebase.js"></script>
```

- NPM
```
npm uninstall firebase --save
npm install firebase --save
```

**Obtener una referencia de la base de datos**
- Antes
```javascript
const ref = new Firebase("https://databaseName.firebaseio.com");
```

- Ahora
```javascript
// See https://firebase.google.com/docs/web/setup#project_setup for how to auto-generate this config
const config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com"
};

firebase.initializeApp(config);

const rootRef = firebase.database().ref();
```


**Los métodos de obtención sin argumento son propiedades solo de lectura**
- Antes
```javascript
// Reference
const key = ref.key();
const rootRef = ref.root();
const parentRef = ref.parent();

// Query
const queryRef = query.ref();

// DataSnapshot
ref.on("value", snapshot => {
  const dataRef = snapshot.ref();
  const dataKey = snapshot.key();
});
```

- Ahora
```javascript
// Reference
const key = ref.key;
const rootRef = ref.root;
const parentRef = ref.parent;

// Query
const queryRef = query.ref;

// DataSnapshot
ref.on("value", snapshot => {
  const dataRef = snapshot.ref;
  const dataKey = snapshot.key;
});
```


### Resumen Rápido: Realtime Database

![realtime](https://cdn-images-1.medium.com/max/1200/1*qmvFg6ILS7Y8WsUxa2vLOw.gif)

**[Configurando las reglas de lectura/escritura](https://firebase.google.com/docs/database/security/quickstart#sample-rules)**

**¿Cómo se estructuran los datos?**

La base de datos es un simple JSON

```json
{
  "users": {
    "alovelace": {
      "name": "Ada Lovelace",
      "contacts": { "ghopper": true },
    },
    "ghopper": { ... },
    "eclarke": { ... }
  }
}
```

**Lectura/escritura de datos**

```javascript
var userRef = firebase.database().ref(`users/${userId}`);

// LEscuchar cambios en `users/${userId}`
userRef.on('value', (snapshot) => {
  console.log(snapshot.val());
});

// Escuchar una única vez cambios en `users/${userId}`
userRef.once('value', (snapshot) => {
  console.log(snapshot.val());
});

// Almacenar datos en `users/${userId}`
userRef.set({
  username: name,
  email: email,
  profile_picture : imageUrl
});
```

**Actualizando varios datos simultáneamente**

```javascript
var updates = {
    'timestamp': new Date().getTime()
};

updates[`users/${userId}`] = {
  username: name,
  email: email,
  profile_picture : imageUrl
};

firebase.database().ref().update(updates);
```

**¿Cómo borrar datos?**

Las referencias tienen una función `remove()`.

**¿Cómo saber si se ha actualizado un dato?**

Las funciones `set` y `update` devuelven promesas.

**¿Cómo quitar un listener o una referencia?**

Las referencias tienen una función `off(listener)`.
Si no se le pasa ningún parámetro elimina todos los listeners.

**"Arrays" -> Listas**

```javascript
var userRef = firebase.database().ref(`users`);

// Almacenar datos en `users` (genera una clave aleatoria)
userRef.push({
  username: name,
  email: email,
  profile_picture : imageUrl
});
```

**Escuchar cambios en las listas**

```javascript
var userRef = firebase.database().ref(`users`);

// Cuando se añade un elemento
userRef.on('child_added', (snapshot) => { /* ... */ });

// Cuando cambia un elemento
userRef.on('child_changed', (snapshot) => { /* ... */ });

// Cuando se elimina un elemento
userRef.on('child_removed', (snapshot) => { /* ... */ });
```

**Recuperar todos los elementos de una lista**

```javascript
var userRef = firebase.database().ref(`users`);

// Cuando se añade un elemento
userRef.on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const element = childSnapshot.val();
    });
});
```

**Ordenar una lista**

```javascript
const ref = firebase.database().ref(`users`);

// Ordena por el valor de una clave
ref.orderByChild('name');
ref.orderByChild('location/latitude');

// Ordena por el nombre de la clave
ref.orderByKey();

// Ordena por el valor de cada elemento
ref.orderByValue();
```

**Filtrar una lista**

```javascript
const ref = firebase.database().ref(`users`);

// Limita el número de elementos de la lista desde el inicio hasta la cantidad de elementos indicada
ref.limitToFirst(10);

// Limita el número de elementos de la lista desde el final hasta la cantidad de elementos indicada
ref.limitToLast(5);

// Elementos mayores o iguales al valor indicado
ref.startAt(70);

// Elementos menores o iguales al valor indicado
ref.endAt();

// Elementos iguales al valor indicado
ref.equalTo();
```

### Ejercicios


**1 -** Desarrolla una aplicación para gestionar las peliculas que te gustan. Incluyendo llamadas AJAX a la base de datos de IMBD para enriquecer los datos, usando [OMDb API](http://omdbapi.com/).
- Todas las películas que se introducen quedan guardadas en Firebase.
- Las peliculas pueden ser consulatadas.
- Las peliculas pueden ser eliminadas.
- Las peliculas pueden ser editadas desde el html. 
- *Opcional: puedes partir de este [código arvindr21/movieFire(legacy)](https://github.com/arvindr21/movieFire)*
```javascript
//Tu solución
```
