import UsuariosDAO from "../dao/usuariosDAO.js"

export default class UsuariosController {

  static async apiPostUsuario(req, res) {
    try {
        const username = req.body.username
        const mail = req.body.mail 
        const password = req.body.password
        const date = new Date()

       await UsuariosDAO.addUsuario(
        username,
        mail,
        password,
        date,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiUpdateUsuario(req, res) {
    try {
        const username = req.body.username
        const password = req.body.password

      const usuarioResponse = await UsuariosDAO.updateUsuario(
        username,
        req.body.mail,
        password,
      )

      var { error } = usuarioResponse
      if (error) {
        res.status(400).json({ error })
      }

      if (usuarioResponse.modifiedCount === 0) {
        throw new Error(
          "Los cambios no fueron hechos",
        )
      }

      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiDeleteUsuario(req, res) {
    try {
      const usuarioId = req.query.id
      await UsuariosDAO.deleteUsuario(
        usuarioId,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

}