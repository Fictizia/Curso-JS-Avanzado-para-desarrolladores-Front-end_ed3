/**
        Crea una libreta de contactos para guardar multiples datos.
        Objetivos:
        Guardar Nombre, telefono y email
        Mostrar todos los contactos en el html
        Botón para borrar un contacto específico
        Botón para borrar todos los contactos
        Botón para recuperar el telefono y email de un contacto
        Consejos:
        Utiliza JSON.parse() y JSON.stringify() para guardar multiples datos bajo una misma clave
        Genera un avatar al azar para el usuario usando Adorable Avatars
        **/
        
       var contactsData = [];

       let showData = () => {

           // Remove the values in the output
           document.getElementById('contactsList').innerHTML = "";

            if(localStorage.getItem('contacts')) {
                let contactsDataGet = JSON.parse(localStorage.getItem('contacts'));
                
                for (i=0; i<contactsDataGet.length; i++) {
                    document.getElementById('contactsList').innerHTML += `
                        <li id='contact${i}' class="contact">
                            <img src='${contactsDataGet[i].avatar}' alt='${contactsDataGet[i].name}' class="avatar">
                            <ul class="contact-list">
                                <li class="contact-item">${contactsDataGet[i].name}</li>
                                <li class="contact-item">${contactsDataGet[i].phone}</li>
                                <li class="contact-item">${contactsDataGet[i].email}</li>
                            </ul>
                        </li>
                    `;
                }
            }
       }

       let getContactData = () => {

            let name = document.getElementById('name').value;
            let phone = document.getElementById('phone').value;
            let email = document.getElementById('email').value;
            let avatar = `https://api.adorable.io/avatars/150/${email}.png`;

            contactsData.push(
                {
                    name: name,   
                    phone: phone,
                    email: email,
                    avatar: avatar
                }
            );
            localStorage.setItem('contacts', JSON.stringify(contactsData));
            showData();
       }

       let clearAllContacts = () => {
           localStorage.removeItem('contacts');
           if (document.getElementById('contactsList')) {
            document.getElementById('contactsList').innerHTML="";
           }
           if (document.getElementById('contactViewer')) {
            document.getElementById('contactViewer').innerHTML="";
           }
           document.getElementById("createContact").reset();
           contactsData = [];
       }

       let deleteContact = () => {

           contactsData = JSON.parse(localStorage.getItem('contacts'));
           
           let contactToDelete = document.getElementById("deleteContact-input").value;

           if (document.getElementById('deleteError')) {
                document.getElementById('deleteError').remove();
           }

           if (contactsData[contactToDelete]) {
                contactsData.splice(contactToDelete, 1);
                localStorage.setItem('contacts', JSON.stringify(contactsData));
                showData();
                // if deleted contact is viewed, remove from viewer.
                // TODO there is no consistency on id
                // if(document.getElementById(`contactViewer${contactToDelete}`)) {
                //     document.getElementById(`contactViewer${contactToDelete}`).remove();
                // }
           } else {
                document.getElementById('deleteContact-button').insertAdjacentHTML('afterend', `
                    <p id='deleteError' class='error'>There is no contact with id:  "${contactToDelete}"</p>
                `);
           }
           
       }

       let viewContact = () => {

           let contactsDataGet = JSON.parse(localStorage.getItem('contacts'));
           let contactToView = document.getElementById('contactToView').value;

           if (document.getElementById('viewError')) {
                document.getElementById('viewError').remove();
            }

            if (document.getElementById('contactViewer')) {
                document.getElementById('contactViewer').remove();
            }
        
            var habemusContact = false;

            if (contactsDataGet) {
                for (i=0; i<contactsDataGet.length; i++) {
                    if (contactsDataGet[i].name === contactToView) {
                        habemusContact = true;
                        document.getElementById('viewContact').insertAdjacentHTML ('afterend', `
                        <div class="contact" id="contactViewer">
                            <img src='${contactsDataGet[i].avatar}' alt='${contactsDataGet[i].name}' class="avatar">
                            <ul class="contact-list">
                                <li class="contact-item">${contactsDataGet[i].name}</li>
                                <li class="contact-item">${contactsDataGet[i].phone}</li>
                                <li class="contact-item">${contactsDataGet[i].email}</li>
                            </ul>
                        </div>
                        `);
                    }
                }

                if (!habemusContact) {
                    document.getElementById('viewContact').insertAdjacentHTML ('afterend', `
                        <p id='viewError' class='error'>There is no contact with name:  ${contactToView}</p>
                    `);
                }

            } else {
                document.getElementById('viewContact').insertAdjacentHTML ('afterend', `
                    <p id='viewError' class='error'>There is no contact!</p>
                `);
            }
        
       }

       let Init = () => {
        showData();
       }

       Init();