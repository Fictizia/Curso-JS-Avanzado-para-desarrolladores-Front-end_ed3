![shieldsIO](https://img.shields.io/github/issues/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# [Curso de JavaScript Avanzado para desarrolladores Front-end](https://fictizia.com/formacion/curso-javascript-avanzado)
### POO con JS, ECMA6, Patrones de diseño, AJAX avanzado, HTML5 avanzado, APIs externas.


## Clase 12

### Authentication

![auth](../assets/clase12/a7bd48d3-bce9-4a2b-955a-2b98ef0f98d6.png)

[Todas las funcionalidades](https://firebase.google.com/docs/auth/web/start)

**FirebaseUI**

FirebaseUI es una capa que recubre el módulo de autenticación de Firebase que provee de flujos visuales de autenticación con las plataformas más utilizadas de la web.

> Añade fácilmente autenticación visual mediante FirebaseUI

- **Multiple Providers**: Email, teléfono, Google, Facebook, Twitter and GitHub sign-in.
- **Account Linking**: Flujos definidos para almacenar la información del usuario.
- **Customization**: Permite sobreescribir los estilos CSS por defecto.
- **One-tap**: Un único click para autenticarse
- **Localized UI**: Internacionalización para 40 idiomas.

**Login con Google** (sólo cliente)

```javascript
const provider = new firebase.auth.GoogleAuthProvider();

// Open login pop-up
firebase.auth().signInWithPopup(provider).then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const token = result.credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  // ...
});
```
**Detectar cambios de usuario**

```javascript
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // Do something...
  }
});
```

### Firebase Authentication: Ejemplos
- [User-auth con Firebase](https://www.firebase.com/docs/web/guide/user-auth.html)
- [Ejemplo en jsfiddle](http://jsfiddle.net/firebase/a221m6pb/embedded/result,js,css/)
- [Ajustes de seguridad](https://www.firebase.com/docs/security/guide/securing-data.html)



### Firebase Authentication: Migración de 2.x a 3.x


**Actualización de tu código de autenticación**
- Antes
```javascript
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      // An error occurred
      console.error(error);
    } else {
      // User signed in!
      var uid = authData.uid;
    }
  });
```

- Ahora
```javascript
  var auth = firebase.auth();
  
  var provider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithPopup(provider).then(function(result) {
    // User signed in!
    var uid = result.user.uid;
  }).catch(function(error) {
    // An error occurred
  });
```


**Obtener el token de acceso**

- Antes
```javascript
  ref.onAuth(function(authData) {
    if (authData) {
      var accessToken = authData.providerData[authData.provider].accessToken;
    }
  });
```

- Ahora
```javascript
  var auth = firebase.auth();
  
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function(result) {
    var accessToken = result.credential.accessToken;
  });
```


**Controlar el estado de autenticación**

- Antes
```javascript
  ref.onAuth(function(authData) {
    if (authData) {
      // User signed in!
      var uid = authData.uid;
    } else {
      // User logged out
    }
  });
```

- Ahora
```javascript
  var auth = firebase.auth();
  
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User signed in!
      var uid = user.uid;
    } else {
      // User logged out
    }
  });
```

### Firebase: Hosting

**Recursos**
- [Deploy en Cloud](https://www.firebase.com/docs/web/guide/deploying.html)
- [Deploy usando Node](https://www.firebase.com/docs/hosting/quickstart.html)

**Pasos**

1. Instalar cli

  ```bash
  $ npm install -g firebase-tools
  ```

2. Inicializar aplicación:

  ```bash
  $ firebase init
  ```

3. Desplegar

  ```bash
  $ firebase deploy
  ```


### Ejercicios

**1 -** Crea un nuevo formulario que nos permita registrarnos en Firebase.

Objetivos:
- Comprobar si ese mismo usuario ya esta registrado (Email como ID), para evitar multiples inscripciones.
- Incluiremos en la página los usuarios que se van sumando.

**Solución:**
- [Firebase 2.x](http://codepen.io/ulisesgascon/pen/19f8b66b32e9ebc0fea3d8dd5c03e0f4)
- [Firebase 3.x](http://codepen.io/ulisesgascon/pen/4ba77abe2917a57b5780ec3531d79341)

**2 -** Partiendo del ejercicio anterior... realizaremos un nuevo formulario que nos permita registrarnos usando nuestra cuenta de Github.

- Objetivos Opcionales:
  - Subir los datos proporcionados por Github a nuestra base de datos.
  - Incluir parte de los datos como el avatar y el nombre del usuario en el html 

- Documentación:
  - [GitHub User Authentication](https://www.firebase.com/docs/web/guide/login/github.html)

**Solución:**
- [Firebase 2.x](http://codepen.io/ulisesgascon/pen/2b9ee3341e4e21ee3c0b32b247313858)
- [Firebase 3.x](http://codepen.io/ulisesgascon/pen/11130424da2c833b7b8cc86a6c5034b8)