const token = "Token";


async function NasaRequest(sun, maxRequest = 50, frecuency = 1000) {
  if(typeof maxRequest !== "number"){
    maxRequest = 100;
  }
  if (maxRequest > 0) {
    let delay = (frecuency < 1000) ? 1000 : frecuency
    await new Promise((r) => setTimeout(() => {console.log(`Delay for next request ${delay}ms`); r()}, delay));
    try {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sun}&api_key=${token}`;
      console.log(`request started for:${url}`);
      let request = await fetch(url);/*global fetch*/
      let data = await request.json()
      console.info(data)
      return (data.photos && data.photos.length > 0) ? data.photos : NasaRequest(--sun, --maxRequest, frecuency)

    } catch (error) {
      Promise.reject(error)
    }
  } else {
    return "limite de peticiones alcanzado"
  }
}

async function init() {
  /*
    - current sun: 2080
    - limit requests: false
    - frecuency: 1000ms
  */
  try {
    const currentValue = await NasaRequest(2080, false, 1000);
    console.log("currentValue:", currentValue);

  } catch (error) {
    console.error(error)
  }
}
init();
