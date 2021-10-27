import "../css/Escuelas.css";
import Header from './Header';

function Opciones({grupo, nombre}){
    const cecyt = "cecyt" +grupo;
    const fondo = "fondo"+grupo;
    const medio = "medio"+grupo;
    const abajo = "abajo" + grupo;
    const boton = "b" + grupo;

    return(
        <div id={cecyt}>
        <div id={fondo}>

        </div>
        <div id={medio}>
            Cecyt 1
        </div>
        <div id={abajo}>
            <br/>{nombre}<br/><br/>
            <center><a href="/"><button id={boton}>Ver escuela</button></a></center>
            
        </div>
        <br/>
    </div>   
    );
}

function Escuelas() {

    return (
        <div className="escuelas">
        <Header/>
        <div id="titulo">
            <br/><br/>Nuestras escuelas<br/><br/><br/>
        </div>
        <div id="subtitulo">
            <br/><br/>Actualmente el Instituto Politécnico Nacional cuenta con diversas opciones para que puedas cursas el nivel medio superior, las cuales son las siguientes:<br/>
        </div>
        <div id="cecyt">
            <p id="t1">Centro de Estudios Científicos y Tecnológicos</p>
            <hr id="uno" />
            <div id="contenedor">            
                <Opciones grupo="1" nombre="Gonzalo Vázquez Vela"/>
                <Opciones grupo="2" nombre="Miguel Bernard"/>
                <Opciones grupo="3" nombre="Estanislao Ramirez Ruiz"/>
                <Opciones grupo="4" nombre="Lázaro Cárdenas"/>
                <Opciones grupo="5" nombre="Benito Juárez García"/>
                <Opciones grupo="6" nombre="Miguel de Othón de Mendizabal"/>
                <Opciones grupo="7" nombre="Cuahtemoc"/>
                <Opciones grupo="8" nombre="Narciso Bassols"/>
                <Opciones grupo="9" nombre="Juan de Dios Bátiz"/>
                <Opciones grupo="10" nombre="Carlos Vallejo Márquez"/>
                <Opciones grupo="11" nombre="Wilfrido Massieu"/>
                <Opciones grupo="12" nombre="José María Morelos"/>
                <Opciones grupo="13" nombre="Ricardo Flores Magón"/>
                <Opciones grupo="14" nombre="Luis Enrique Erro Soler"/>
                <Opciones grupo="15" nombre="Diodoro Antúnez Echegaray"/>  

                <div class="clear"></div> 
            </div>
        </div>
        <div id="otroos">
            <p i="t3">Centro de Estudios Tecnológicos</p>
            <hr id="tres" />
            <div id="contenedor3">
                <div id="cet">
                    <div id="fondoCet">

                    </div>
                    <div id="medioCet">
                        Cet 1
                    </div>
                    <div id="abajoCet">
                        <br/>Walter Cross Buchanan<br/><br/>
                        <center><a href="cecyts/cet "><button id="bCet">Ver escuela</button></a></center>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div id="otros">
            <p id="t2">Centro de Estudios Científicos y Tecnológicos fuera de la CDMX (No entran en programa comipems)</p>
            <hr id="dos" />
            <div id="contenedor2">
                <div id="cecyt16">
                    <div id="fondo16">

                    </div>
                    <div id="medio16">
                        Cecyt 16
                    </div>
                    <div id="abajo16">
                        <br/>Hidalgo<br/><br/>

                    </div>
                </div>
                <div id="cecyt17">
                    <div id="fondo17">

                    </div>
                    <div id="medio17">
                        Cecyt 17
                    </div>
                    <div id="abajo17">
                        <br/>León<br/><br/>

                    </div>
                </div>
                <div id="cecyt18">
                    <div id="fondo18">

                    </div>
                    <div id="medio18">
                        Cecyt 18
                    </div>
                    <div id="abajo18">
                        <br/>Zacatecas<br/><br/>

                    </div>
                </div>

            </div>
            <div class="clear"></div>
        </div>

        </div>
        </div>
        );
    }
    
    export default Escuelas;