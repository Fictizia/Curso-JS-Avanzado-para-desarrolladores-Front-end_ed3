/*
    Jugando con datos abiertos (http://datos.gob.es/) saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.
*/

// http://opendata.gijon.es/descargar.php?id=163&tipo=JSON
// http://opendata.gijon.es/descargar.php?id=163&tipo=HTML



    function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();
        
        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                console.info(JSON.parse(xmlHttp.responseText));
                weather = JSON.parse(xmlHttp.responseText);

            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
                console.info(JSON.parse(xmlHttp.responseText));
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }

peticionAjax('http://opendata.gijon.es/descargar.php?id=163&tipo=JSON');