import "../css/RegistroUsuario.css";

function RegistroUsuario() {

        document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("forma").addEventListener('submit', validarFormulario); 
      });
      
      function validarFormulario(evento) {
        evento.preventDefault();
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var contrasena = document.getElementById('contrasena').value;
        var contrasena1 = document.getElementById('contrasena1').value;

        
        if (nombre.length === 0  || email.length === 0 || contrasena.length === 0 ||contrasena1.length === 0) {
            alert('Asegurate de no dejar datos en blanco');
            return;
        } 
        if (/^[A-Za-zñÑ-áéíóúÁÉÍÓÚ\s]*$/.test(nombre) === false) {
            if (/^([0-9])*$/.test(nombre) === false) {
                alert('Escribe tu nombre sin números ni caracteres especiales');
            } else
                alert('Escribe tu nombre sin números ni caracteres especiales');
            return;
        } 
        if (!expr.test(email)) {
            alert('Algo está mal. Verifica tu correo electrónico');
            return;
        } 
        if (contrasena !== contrasena1) {
            alert('Algo está mal. Asegurate de que las contraseñas sean identicas');
            return;
        } 
            this.submit();
                
      }

   
 
    return (
        <div className="registro">
            <div id="cuadro1">
                <br/><br/><br/><br/><br/>Registro
            </div>
            <div id="cuadro2">
                <form id="forma"   method="POST"> 
                    <br/><br/><br/><br/>
                    <center>
                        <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required /><br/><br/>
                        <input type="email" id="email" name="email" placeholder="Escribe tu correo" required /><br/><br/>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Escribe tu contraseña" required /><br/><br/>
                        <input type="password" id="contrasena1" name="contrasena1" placeholder="Vuelve a escribir tu contraseña" required /><br/><br/><br/>
                        <input type="submit" id="btnRegistro" name="btnRegistro" value="Registrarse" /><br/>
                    </center>
                </form> 
                <br/> <center><a href="/">Regresar a inicio</a></center>
                <br/><br/>
            </div>
        </div>
        );
  }
  
  export default RegistroUsuario;