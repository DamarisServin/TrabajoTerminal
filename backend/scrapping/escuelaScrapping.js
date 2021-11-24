const cheerio = require("cheerio");
const request = require("request-promise");

async function init(){
    const links =[];
    try{
        const $ = await request({
            uri: 'https://www.cecyt1.ipn.mx/oferta-educativa/', //'https://www.cecyt1.ipn.mx/oferta-educativa/carreras'
            transform: body => cheerio.load(body)
        });
        //cecyt 3 no posee el mismo formato
        const titulo = $('.directorio-ecabezado .titulo');
        console.log("Titulo: ", titulo.html());

        $('.directorio-fila .row').each((i, e)=>{
            const nombre = $(e).find('p').html();
            const link = $(e).find('a').attr('href');
            //console.log (nombre.html(), ref);
            links.push({"nombre": nombre,"links": link});
        });
        $ = await request({
            uri: 'https://www.cecyt1.ipn.mx', 
            transform: body => cheerio.load(body)
        });
        const ubicacion = $('.subtitulo-n2');
        console.log("Ubicacion: ", ubicacion.html());

        console.log(links);

    } catch (e) {
        console.log(e);
    }
}

init();