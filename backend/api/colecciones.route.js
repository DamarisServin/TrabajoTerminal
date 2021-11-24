import express from "express"
import UsuariosCtrl from "./usuarios.controller.js"
import EscuelasCtrl from "./escuelas.controller.js"

const router = express.Router()

router.route("/escuelas").get(EscuelasCtrl.apiGetEscuelas)
router.route("/escuela/:nombre").get(EscuelasCtrl.apiGetEscuelaByName)    //Manda el PARAMETRO nombre
//router.route("/area").get(EscuelasCtrl.apiGetEscuelasArea)

router
  .route("/usuarios")
  .post(UsuariosCtrl.apiPostUsuario)
  .put(UsuariosCtrl.apiUpdateUsuario)
  .delete(UsuariosCtrl.apiDeleteUsuario)

export default router