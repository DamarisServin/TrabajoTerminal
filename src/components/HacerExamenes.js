import "../css/HacerExamenes.css";
import Header from './Header';

function HacerExamenes() {

    return (
        <div className="hacerExam">
            <Header/>
        <div id="titulo"><br/><br/>Tus resultados<br/><br/><br/></div>
        <div className="advertencia">
            ¡Todavía no podemos mostrar tus resultados!
            <div className="mensaje">
                Debes de contestar los examenes que están disponibles para mostrarte <br/>adecuadamente tus resultados.
            </div>
            <center><a href="obtenerExamenes.jsp"><button>Hacer examenes</button></a></center>
        </div>
        </div>
        
   );
}

export default HacerExamenes;