import "../css/Header.css";

function Header() {

    return (
        <ul>
            <li><a href="/" className="inicio">Inicio</a></li>
            <li><a href="../Escuelas" className="escuelas">Nuestras escuelas</a></li>
            <li><a href="../" className="examenes">Examenes y cuestionarios</a></li>
            <li><a href="../" className="resultados">Resultados</a></li>
            <li className = "right-side Cerrar Sesion"><a href="../">Cerrar Sesión</a></li>
            <li className = "right-side Nombre" ><a href="../">Nombre</a></li>
        </ul>
   );
}

export default Header;