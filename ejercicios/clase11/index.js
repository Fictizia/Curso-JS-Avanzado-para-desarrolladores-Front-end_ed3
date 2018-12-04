
(function() {

  function init(){
    const config = {
      apiKey: "AIzaSyAnpiqm8Z1msni5cwGpE8uO8Y9NAj_5Djs",
      authDomain: "curso-js-avanzado.firebaseapp.com",
      databaseURL: "https://curso-js-avanzado.firebaseio.com",
      projectId: "curso-js-avanzado",
      storageBucket: "curso-js-avanzado.appspot.com",
      messagingSenderId: "326570073608"
    };
  
    return firebase.initializeApp(config);
  }
  // Initialize Firebase
  const fb = init();

  document.getElementById('movieName').addEventListener("keyup", (ev)=>{
    if(ev.keyCode == 13){
      const movie = ev.target.value ||'batman';
      const url = `http://omdbapi.com/?apikey=8df86220&t=${movie}`;
      fetch(url)
      .then(res => res.json())
      .then(res => {
        firebase.database().ref("movies").push(res)
      })

    }
  })
}())
