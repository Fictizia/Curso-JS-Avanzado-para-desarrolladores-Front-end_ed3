const pup = require("puppeteer");

async function navigateTo(browser,url){
    const page = await browser.newPage();
    await page.goto(url,{waitUntil:'networkidle0'});
    return page;
}

async function ejercicio1(browser){
    try{
        
        const page= await navigateTo(browser,'https://www.fictizia.com/planes/desarrollo-interactivo-y-web');
        
        const cards = await page.evaluate(() => {
            let cursosYmasters = Array.from(document.querySelectorAll('.card.plan'));
            
            return cursosYmasters.map((el,index) => {
                let title = el.querySelector('h1>a');
                let item = {
                    time: el.querySelector('.mainTag').innerHTML,
                    url: title.getAttribute('href'),
                    name: title.innerHTML
                };
                 
                return item;
            });
        });
        const output = cards.map((card)=> `- [${card.name} (${card.time})] (${card.url})`);
        
        return output;   
    }catch(error){
        console.log(error);
        Promise.reject(new Error(error));
    }
}

async function ejercicio2(browser){

    const page = await navigateTo(browser,'https://www.metromadrid.es/es/index.html');
    
    
    const lines = await page.evaluate(() => {
        let lineas = Array.from(document.querySelectorAll('.med>.bloquet'));
        let exp = new RegExp(/\r?\n|\r/);
        return lineas.map(el => {
            return (el.querySelector('.circulacion>.txt')) ? el.querySelector('.circulacion>.txt').innerText.trim().replace(exp,'') : null;
        });
    });
    
    return lines.sort((a,b) => a - b).filter(el => (el));
}

async function ejercicio3(browser){
    try{
        const page = await navigateTo(browser,'https://www.elmundotoday.com/noticias/tecnologia/');

        await page.evaluate(()=>{
            const photos = document.querySelectorAll('.td-container img[src]');
            photos.forEach(photo => photo.src = `http://placekitten.com/${photo.width}/${photo.height}`);
        });
        try{
            
        }catch(error){
            
        }
        await page.waitFor(3000);
        await page.screenshot({ path: './kittens.png', fullPage:true });

        return "Done!";
        
    }catch(error){
        console.error(error);
        Promise.reject(new Error("petó!! "));
    }
    
}
async function ejercicio4(browser){
    try{
        const page = await navigateTo(browser,'https://www.fictizia.com/profesorado');
    
        const output = await page.evaluate(()=>{
            const profes = Array.from(document.querySelectorAll('.microCard'));
            const info = profes.map(profe => {
                const img = profe.querySelector('.withMedia img').src;

                const name = profe.querySelector('div:not(.withMedia) h3').innerText.trim();
                const description = profe.querySelector('div:not(.withMedia) p').innerText.trim();
                return {
                    img,
                    name,
                    description
                };
            });
            return info;
        });
        
        return output.map(out => `img: ${out.img}, name: ${out.img}, description: ${out.description}`);
        
    }catch(error){
        console.error(error);
        Promise.reject(new Error("petó!!"));
    }
    
}

(async function(){
try{
        const browser = await pup.launch();

        console.log("Lanzando ejercicio1");
        let exercise1 = await ejercicio1(browser);
        console.log("Lanzando ejercicio2");
        let exercise2 = await ejercicio2(browser);
        console.log("Lanzando ejercicio3");
        let exercise3 = await ejercicio3(browser);
        console.log("Lanzando ejercicio4");
        let exercise4 = await ejercicio4(browser);
        
        browser.close();
        console.log([
            {"ejercicio1:":exercise1},
            {"ejercicio2:":exercise2},
            {"ejercicio3:":exercise3},
            {"ejercicio4:":exercise4}
            ]);
    }catch(err){
        console.error(err);

    }
})();