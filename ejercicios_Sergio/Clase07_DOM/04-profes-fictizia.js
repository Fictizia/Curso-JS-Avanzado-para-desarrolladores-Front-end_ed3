/**
 * Nos creamos un array de objetos con la información, links y fotografías de l@s profes de Fictizia
 * https://www.fictizia.com/profesorado
 */

// TODO probar con for anidados.
 
var teachersInfo = []

var teachersList = Array.prototype.slice.call(document.querySelectorAll('article.microCard'));


var links = [];

var patata;

for (i=0; i < teachersList.length; i++ ) {

    // var teachersLinks = []

    var teachersLinks = teachersList[i].querySelectorAll('.microBtns li');

   
    
    for (j=0; j < teachersLinks.length; j++ ) {
        
        console.log(teachersLinks[i][j]);
        //var links = teachersList[i][j].querySelectorAll('.microBtns li a');
        //links[i].push(teachersLinks.querySelector('a').href);

        //console.log(links);
    }

    //console.log(teachersLinks);

    // teachersList.forEach((item, index) => {
    //     Array.prototype.slice.call(teachersList[i][index].querySelector('.microBtns li a')).innerText;
    // })

    // teachersInfo.push({
    //     name: teachersList[i].querySelector('h3').innerText,
    //     info: teachersList[i].querySelector('p').innerText,
    //     links: [
            
    //     ]
            
    //     ,
    //     picture: teachersList[i].querySelector('.withMedia img').src
    // });
}

// console.log(teachersInfo);