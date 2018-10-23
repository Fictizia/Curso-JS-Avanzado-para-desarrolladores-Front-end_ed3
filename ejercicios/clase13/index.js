function initGMap({latitude,longitude}) {
  debugger;
  const map = new google.maps.Map(document.getElementById('gmaps'), {
    zoom: 8,
    center: {lat:latitude, lng: longitude}
  });
}

navigator.geolocation.getCurrentPosition(function (ev){
  debugger;
  initGMap(ev.coords)
},
(er)=>{debugger;});
