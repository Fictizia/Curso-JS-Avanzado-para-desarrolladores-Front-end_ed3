const token = "cVXCwImHNJ2mCFkIirKZk4e6AruCMg6ldgw0yOIl";

async function NasaRequest(currentSun, limit, frecuency) {

    console.log("request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + currentSun + "&api_key=)" + token);

}; 

function init() {
  /*
    - current sun: 2080
    - limit requests: false
    - frecuency: 1000ms
  */
  const currentValue = NasaRequest(2080, false, 1000);
  console.log("currentValue:", currentValue);
}
init();
    //Tu solución