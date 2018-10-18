
(function(){

  function init(){
    var config = {
      apiKey: "AIzaSyDmuxF0FBkQ5O78sWi7F_UD8wOvNDufWDc",
      authDomain: "clase12jsavanzado.firebaseapp.com",
      databaseURL: "https://clase12jsavanzado.firebaseio.com",
      projectId: "clase12jsavanzado",
      storageBucket: "clase12jsavanzado.appspot.com",
      messagingSenderId: "948621629590"
    };
   firebase.initializeApp(config);
  }

  function printError(error){
    document.getElementById('errors').innerText = error
  }

  function saveOnFirebase(info){
    
    return firebase.database().ref("users").push(info);
  }



  init();

  document.getElementById('login').addEventListener("click", (ev)=>{

    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(user => {
      debugger;
      if(!user.additionalUserInfo.isNewUser){
        printError("Ya estas apuntado a la fiesta");
      }else{
        const newUser = {
          id:user.credential.accessToken,
          name:user.additionalUserInfo.username,
          githubInfo:user.additionalUserInfo.profile
        }
        saveOnFirebase(newUser).then(res =>{
          debugger;
          alert("guardado!")
        });
      }




      
    }).catch(err => {
      debugger;
      alert(err);
    })
    
  });


})()
