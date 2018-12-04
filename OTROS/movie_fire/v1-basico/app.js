const apikey = '';
const myFBAdress = "https://------.firebaseio.com/jsmovies";
const favMovies = firebase.database().ref().child("jsmovies");
const inputSelector = document.getElementById("movieName");
const listSelector = document.getElementById("favMovies");
const detailsSelector = document.getElementById('movieDetails');

// --- Funciones
function filmData (movieName, cb) {
	const xmlHttp = new XMLHttpRequest();
	const url = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&r=json&apikey=${apikey}`;

	xmlHttp.onreadystatechange = () => {
		if (xmlHttp.readyState === 4){
			cb({code: xmlHttp.status, movie: JSON.parse(xmlHttp.responseText)})
		}
	};

	xmlHttp.open( "GET", url, true );
	xmlHttp.send();
}

function saveFilm(movieName, details=false) {
    favMovies.push({
        name: movieName,
        details: details
    });
}


function filmTpl (filmDetails) {
	const { name, key } = filmDetails
	return `<li data-key="${key}">
		${name} [<span class="action" data-action="details">Details</span> | 
		 <span class="action" data-action="edit">Edit</span> | 
		 <span class="action" data-action="delete">Delete</span> ]
	</li>`;
}

function refreshUI(list) {
    let lis = '';
    for (let i = 0; i < list.length; i++) {
    	lis += filmTpl(list[i]);
    }
    listSelector.innerHTML = lis;
}


function filmDetailsTpl (filmDetails) {
	let poster = "";
	
	if(filmDetails.details.Poster && filmDetails.details.Poster  !== "N/A"){
		poster = `<img src="${filmDetails.details.Poster}">`
	}

	return `<p><b>${filmDetails.details.Title}</b><p>
	<span class="action">[Close]</span>
	${poster}
	<p>Title: ${filmDetails.details.Title}</p>
	<p>Director: ${filmDetails.details.Director}</p>
	<p>Year: ${filmDetails.details.Year}</p>
	<p>Actors: ${filmDetails.details.Actors}</p>
	<p>Genre: ${filmDetails.details.Genre}</p>
	<p>Country: ${filmDetails.details.Country}</p>
	<p>Plot: ${filmDetails.details.Plot}</p>`;
}

function details (key) {
	favMovies.orderByKey().equalTo(key).on("child_added", snapshot => {
		detailsSelector.innerHTML = filmDetailsTpl(snapshot.val());
		detailsSelector.style.display = 'block';
	});
}

function del (key) {
    const response = confirm(`Are certain about removing this film from the list?`);
    if (response) {
        favMovies.child(key).remove();
        hideDetails();
    }
}


function edit (key) {
	const movieName = prompt("Update the movie name:");
	if (movieName){
		filmData(movieName, data => {
			favMovies.child(key).update({
		        name: movieName,
		        details: data.movie || false
			});
			
		})
	}
}

function hideDetails () {
	detailsSelector.innerHTML = "";
	detailsSelector.style.display = 'none';
}


// --- Eventos
detailsSelector.addEventListener("click", event => {
	if(event.target.tagName === "SPAN"){
		hideDetails()
	}
});

inputSelector.addEventListener("keyup", event => {
	if (event.which == 13 || event.keyCode == 13) {
		const movieName = inputSelector.value.trim();
        if (movieName.length > 0) {
        	filmData(movieName, data => {
        		saveFilm(movieName, data.movie);
        	})
        	inputSelector.value = '';
        }
	}
});

listSelector.addEventListener("click", event => {
	const target = event.target.getAttribute("data-action");
	const key = event.target.parentElement.getAttribute("data-key");
	if(target === "delete") {
		del(key)
	} else if (target === "edit"){
		edit(key)
	} else if (target === "details") {
		details(key)
	}
});


favMovies.on("value", snapshot => {
    const films = snapshot.val();
    const list = [];
    for (const key in films) {
    	const name = films[key].name;
    	list.push({key, name});
    }
    refreshUI(list);
});