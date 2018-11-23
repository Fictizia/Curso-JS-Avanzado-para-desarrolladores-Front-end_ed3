const http = require('http');
const port = process.env.PORT || 5000
const server = http.createServer().listen(port);
const html = function(data = {}){
  const {header, body} = data
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${header ||'main'}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    ${body || ''}
  </body>
  </html>
  `
}
const addBody = function (body = ''){
  return `
  <nav>
    <a href="/">Principal</a>
    <a href="./quienes_somos">Quienes somos</a>
    <a href="./donde_estamos">Donde estamos</a>
    <a href="./contacto">Contacto</a>
  </nav>
  <article>
    <section>
      ${body}
    </section>
  </article>
  `
}

server.on('request', (request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});

  // console.log(request.url)
  let data = {};
  
  switch(request.url){
    case '/quienes_somos':
      data.body = addBody("estas en quienes somos");
    break;
    case '/donde_estamos':
      data.body = addBody("estas en donde_estamos");
    break;
    case '/contacto':
      data.body = addBody("estas en contacto");
    break;
    default: 
      data.body = addBody();
    break;
  }
  
	response.end(html(data));
});

console.log(`Servidor escuchando por el puerto ${port}`);