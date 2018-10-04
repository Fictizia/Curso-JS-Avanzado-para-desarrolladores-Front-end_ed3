/**
 * Nos creamos un array de objetos con la información, links y fotografías de l@s profes de Fictizia
 * https://www.fictizia.com/profesorado
 */

var teachersInfo = []

var teachersList = Array.prototype.slice.call(document.querySelectorAll('article.microCard'));

teachersList.forEach((item, index) => {

    var teachersLinks = Array.prototype.slice.call(teachersList[index].querySelectorAll('.microBtns li'));

    teachersInfo.push({
        name: teachersList[index].querySelector('h3').innerText,
        info: teachersList[index].querySelector('p').innerText,
        links: [
            teachersLinks.forEach((item, index) => {
                teachersLinks[index].querySelectorAll('a').innerHTML;
            })
        ],
        picture: teachersList[index].querySelector('.withMedia img').src
    });
})

console.log(teachersInfo);