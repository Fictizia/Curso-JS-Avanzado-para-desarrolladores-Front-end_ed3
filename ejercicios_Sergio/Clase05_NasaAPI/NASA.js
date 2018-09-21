const token = "cVXCwImHNJ2mCFkIirKZk4e6AruCMg6ldgw0yOIl";

async function NasaRequest(currentSun, limit, frecuency) {

  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${currentSun}&api_key=${token}`
  let request = await fetch(url);
  let data = await request.json();

  try {

    console.log(`request started for: ${request.url}`);

    if (data.photos.length > 0) {
      console.log(data.photos);
    }
    else {
      console.log(`Delay for next request: ${frecuency}ms`)

      setTimeout(() => {
        NasaRequest(currentSun - 1, limit, frecuency);
      }, frecuency);
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
  const currentValue = NasaRequest(2080, false, 2000);
  console.log("currentValue:", currentValue);
}
init();
    //Tu solución