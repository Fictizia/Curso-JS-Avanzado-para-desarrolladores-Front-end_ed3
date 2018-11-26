const process = require('process');
const request = require('https').request;

function killApp(msg){
  process.stdout.write(`\r\n${msg}, saliendo Y(^.^)Y\r\n`)
  process.exit(0);
}
function header({generated,title,status,count}){
  
  process.stdout.write(`
  *****************************
  ${title}, Past Hour
     ---------------------     
  total: ${count}
  status: ${status}
     ---------------------     
  ${new Date(generated).toLocaleString('es')}
  *****************************
  `)
}
function body({title,time,mag,status,type,place,url,detail}, {coordinates}){
  process.stdout.write(`==============================
  ${title}
  ${new Date(time).toLocaleString('es')}
  Magnitud: ${mag}
  Estatus: ${status}
  Tipo: ${type}
  Lugar: ${place}
  Coordenadas: ${coordinates[0]}, ${coordinates[1]}
  Info: ${url}
  Detalles: ${detail}
  ==============================`)
}
function searchHearquakes(magnitude){
  const date = Date.now();
  const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${new Date(date - 3600000).toISOString()}&endtime=${new Date(date).toISOString()}&maxmagnitude=${magnitude}`;//&minmagnitude=${magnitude}
  let req = request(url,function(res){
    res.setEncoding('utf-8');
    let responseString = '';

    res.on('data', function(data) { 
      console.log('recibiendo datos...');
      responseString += data; 
    });

    res.on('end', function() {
        const data = JSON.parse(responseString);
        header(data.metadata);
        data.features.forEach(feature => body(feature.properties, feature.geometry));
    });

    res.on('error',killApp)
  });

  req.end();
}
const args = process.argv;
if(args.length <= 2){
  killApp("no hay datos suficiente para realizar petición")
}
if(!isNaN(args[2]) && (args[2] < 0 || args[2] > 10)){
  killApp("Valores erroneos");
}

searchHearquakes(args[2]);