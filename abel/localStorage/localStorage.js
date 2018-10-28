addUser = () => {
  const name = document.getElementById('first_name').value;
  const phone = document.getElementById('telephone').value;
  const email = document.getElementById('email').value;

  let numero = Math.floor(Math.random() * 100);

  let userData = {
    id: numero,
    nombre: name,
    telefono: phone,
    email: email
  };

  localStorage.setItem(name, name);
};

const lista = document.getElementById('user_list');

showAllUsers = () => {
  lista.innerHTML = '';

  for (var i = 0; i < localStorage.length; i++) {
    let elementoLista = document.createElement('li');

    let contenidoElementoLista = document.createTextNode(
      localStorage.getItem(localStorage.key(i))
    );

    elementoLista.appendChild(contenidoElementoLista);

    lista.appendChild(elementoLista);
  }
};

document.getElementById('add_user').addEventListener('click', () => {
  addUser();
  showAllUsers();
});

window.addEventListener('load', () => {
  showAllUsers();
});

deleteUser = () => {
  const userName = prompt('Introduce el nombre del usuario');
  localStorage.removeItem(userName);
};

document.getElementById('remove_user').addEventListener('click', () => {
  deleteUser();
  showAllUsers();
});

document.getElementById('delete_all').addEventListener('click', () => {
  localStorage.clear();
  showAllUsers();
});
