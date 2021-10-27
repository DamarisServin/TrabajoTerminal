import { useHistory } from "react-router-dom";
import Header from './Header';
import "../css/Actitudes.css";


function Opciones({grupo, texto}){
    const first = grupo +"first";
    const second = grupo +"second";
    const third = grupo +"third";
    const fourth = grupo +"fourth";

    return(
        <div className="radioex">
                {texto} <br/>
            <div id="opc"><input  type="radio" name={grupo} id={first}  value="3" required/>
                <label htmlFor={first}>Mucho</label></div>
            <div id="opc"><input  type="radio" name={grupo} id={second}  value="2"/>
                <label htmlFor={second}>Bastante</label></div>
            <div id="opc"><input  type="radio" name={grupo} id={third}  value="1"/>
                <label htmlFor={third}>Poco</label></div>
            <div id="opc"><input  type="radio" name={grupo} id={fourth}  value="0"/>
                <label htmlFor={fourth}>Nada</label></div>
        </div>
    );
}

function Actitudes() {
 
    return (
      <div className = "actitudes" >
          <Header/>
        <div id="head-title" >
            <br/><br/>Cuestionario de Actitudes<br/><br/><br/>
        </div>
        <div id="contenedor">
            <p id= "titulo-pregunta">¿Qué tanto  te gusta...?</p>
            <form method="post" action="../">

                <Opciones grupo="group1" texto="Atender y cuidar enfermos "/>
                <Opciones grupo="group2" texto="Intervenir activamente en las discusiones de clase"/>
                <Opciones grupo="group3" texto="Escribir cuentos, crónicas y artículos "/>
                <Opciones grupo="group4" texto="Dibujar y pintar"/>
                <Opciones grupo="group5" texto="Cantar en un coro estudiantil "/>
                <Opciones grupo="group6" texto="Llevar en orden tus libros y cuadernos"/>
                <Opciones grupo="group7" texto="Conocer y estudiar la estructura de las plantas y de los animales "/>
                <Opciones grupo="group8" texto="Resolver cuestiones matemáticas"/>
                <Opciones grupo="group9" texto="Armar y desarmar objetos mecánicos"/>
                <Opciones grupo="group10" texto="Salir de excursión  "/>
                <Opciones grupo="group11" texto="Enseñar a los analfabetos"/>
                <Opciones grupo="group12" texto="Hacer propaganda para la difusión de una idea"/>
                <Opciones grupo="group13" texto="Representar un papel en una obra de teatro "/>
                <Opciones grupo="group14" texto="Idear y mostrar el escudo de un club o sociedad"/>
                <Opciones grupo="group15" texto="Ser miembro de una asociación musical"/>
                <Opciones grupo="group16" texto="Ayudar a calificar pruebas"/>
                <Opciones grupo="group17" texto="Estudiar y entender las causas de los movimientos sociales"/>
                <Opciones grupo="group18" texto="Explicar a otros como resolver problemas de matemáticas"/>
                <Opciones grupo="group19" texto="Reparar las instalaciones eléctricas de gas o plomería"/>
                <Opciones grupo="group20" texto="Sembrar en una granja durante las vacaciones"/>
                <center><input type="submit" id="btnEnviar" name="btnEnviar" value="Enviar" /></center>
            </form>
        </div>
      </div>
    );
  }
  
  export default Actitudes;