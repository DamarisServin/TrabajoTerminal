import { useHistory } from "react-router-dom";
import "../css/Home.css";

function Home() {

    const history = useHistory();
    function irActitudes(evt){
        evt.preventDefault();
        history.push("Actitudes");
    }
    function irRegistro(evt){
      evt.preventDefault();
      history.push("RegistroUsuario");
  }
    function irEscuelas(evt){
      evt.preventDefault();
      history.push("Escuelas");
  }
    function irSesion(evt){
      evt.preventDefault();
      history.push("InicioSesion");
  }
  function irHacerExamenes(evt){
    evt.preventDefault();
    history.push("HacerExamenes");
}
  return (
      <div>
    <h1>
        HOME 
    </h1>
    <button  type="button" onClick={irActitudes}>
    Cuestionario
  </button>
  <button  type="button" onClick={irRegistro}>
    RegistroUsuario
  </button>
  <button  type="button" onClick={irEscuelas}>
    Escuela
  </button>
  <button  type="button" onClick={irSesion}>
    Inicio de Sesion
  </button>
  <button  type="button" onClick={irHacerExamenes}>
    HacerExamenes
  </button>
  </div>

  );
}

export default Home;