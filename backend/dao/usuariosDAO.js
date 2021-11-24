import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let usuarios

export default class UsuariosDAO {
  static async injectDB(conn) {
    if (usuarios) {
      return
    }
    try {
      usuarios = await conn.db(process.env.TT_NS).collection("usuarios")
    } catch (e) {
      console.error(`La conexion no fue establecida: ${e}`)
    }
  }

  static async addUsuario(username, mail, password, date) {
    try {
      const usuarioDoc = { 
          username: username,
          mail: mail,
          password: password,
          date: date,
        }

      return await usuarios.insertOne(usuarioDoc)
    } catch (e) {
      console.error(`Error al añadir al usuario a la base de datos: ${e}`)
      return { error: e }
    }
  }

  static async updateUsuario(username, mail, password) {
    try {
      const updateResponse = await usuarios.updateOne(
        { mail: mail},
        { $set: { username: username, password: password  } },
      )

      return updateResponse
    } catch (e) {
      console.error(`El usuario no fue actualizado: ${e}`)
      return { error: e }
    }
  }

  static async deleteUsuario(usuarioId) {

    try {
      const deleteResponse = await usuarios.deleteOne({
        _id: ObjectId(usuarioId),
      })

      return deleteResponse
    } catch (e) {
      console.error(`Error al eliminar al usuario: ${e}`)
      return { error: e }
    }
  }

}