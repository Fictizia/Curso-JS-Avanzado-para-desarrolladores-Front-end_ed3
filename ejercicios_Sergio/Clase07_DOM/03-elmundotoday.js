/*
Diseña un script que sustituya todas las imágenes de las entradas de [Tecnología del Mundo Today](http://www.elmundotoday.com/noticias/tecnologia/) por [imágenes dummy de gatitos](https://placekitten.com/).
```javascript
    // Tu solución
```
*/

var NewsImages = Array.prototype.slice.call(document.querySelectorAll('.entry-thumb'));

NewsImages.forEach((item, index) => {
    NewsImages[index].src = "https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif";
});
