import "../css/InicioSesion.css";

function InicioSesion() {

    return (
        <div id="content" className="sesion">
            <div id="cuadro1">
                <br/><br/><br/><br/>Iniciar sesión
            </div>
            <div id="cuadro2">
                <center><br/><br/><br/><br/><br/><br/><br/><br/>
                    <form id="iniciar" method="post" >
                        <input type="email" id="email" name="email" placeholder="Escribe tu correo electrónico" required/><br/><br/>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Escribe tu contraseña" required/><br/><br/><br/>
                        <input type="submit" id="btnInicio" name="btnInicio" value="Ingresar" />
                    </form>
                    <div>
                        <br/>
                        <center><a href="/RegistroUsuario"><button>¿Todavía no tienes una cuenta? registrate aquí</button></a></center>
                        <br/>
                        <center><a href="/"><button>Regresar a inicio</button></a></center>
                    </div>
                </center>
            </div>
        </div>
        );
  }
  
  export default InicioSesion;