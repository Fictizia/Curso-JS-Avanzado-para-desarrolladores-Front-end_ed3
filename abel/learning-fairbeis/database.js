const ref = new Firebase("https://learning-firebase-aec.firebaseio.com");

const asistentes = ref.child("asistentes");

function addUser() {
  var nuevoUsuario = document.getElementsByTagName("input")[0].value;

  asistentes.push({
    full_name: nuevoUsuario
  })
} // Closing function


function removeUser() {
  var usuario = prompt("Dime tu nombre");
  console.log(usuario);

  asistentes.on("value", function(snapshot){
    console.log(snapshot.val());
  });
}

document.getElementsByTagName("button")[0].addEventListener("click", addUser);

document.getElementsByTagName("button")[1].addEventListener("click", removeUser);

