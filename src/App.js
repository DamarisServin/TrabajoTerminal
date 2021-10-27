import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import Actitudes from './components/Actitudes';
import RegistroUsuario from './components/RegistroUsuario';
import Escuelas from './components/Escuelas';
import InicioSesion from './components/InicioSesion';
import HacerExamenes from './components/HacerExamenes';

function App() {
  return (
    
        
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/RegistroUsuario" component={RegistroUsuario} />
        <Route path="/Actitudes" component={Actitudes} />
        <Route path="/Escuelas" component={Escuelas} />
        <Route path="/InicioSesion" component={InicioSesion} />
        <Route path="/HacerExamenes" component={HacerExamenes} />

    </Router>
  );
}

export default App;
