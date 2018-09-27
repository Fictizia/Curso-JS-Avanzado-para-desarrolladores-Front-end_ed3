const token = "cVXCwImHNJ2mCFkIirKZk4e6AruCMg6ldgw0yOIl";
var counter = 0;

async function NasaRequest(currentSun, limit, frecuency) {

  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${currentSun}&api_key=${token}`
  let request = await fetch(url);
  let data = await request.json();
  counter++;

  try {

    console.log(`request started for: ${request.url}`);

    if(!limit || counter < limit) {

      console.log(`counter: ${counter}, limit: ${limit}`);

      if (data.photos.length) {
        console.log(data.photos);
      }
      else {
        console.log(`Delay for next request: ${frecuency}ms`);

        setTimeout(() => {
          NasaRequest(currentSun - 1, limit, frecuency);
        }, frecuency);
      }
    }
    else {
      console.log(`Requests limit reached ${limit}`);
    }
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }

  return (data.photos);

}; 

function init() {
  /*
    - current sun: 2080
    - limit requests: false
    - frecuency: 1000ms
  */
  const currentValue = NasaRequest(2178, 3, 1000);
  console.log("currentValue:", currentValue);
}
init();
    //Tu solución