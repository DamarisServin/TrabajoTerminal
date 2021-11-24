import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let actitudes

export default class ActitudesDAO {
  static async injectDB(conn) {
    if (actitudes) {
      return
    }
    try {
      actitudes = await conn.db(process.env.TT_NS).collection("actitudes")
    } catch (e) {
      console.error(`La conexion no fue establecida: ${e}`)
    }
  }

  static async addActitudes(id_usuario, puntajes) {
    try {
      const actitudesDoc = { 
          id_usuario: id_usuario,
          servicioSocial: puntajes[],
          ejecutiva: puntajes[],
          verbal: puntajes[],
          artistico: puntajes[],
          musical: puntajes[],
          organizacion: puntajes[],
          cientifico: puntajes[],
          calculo: puntajes[],
          mecanica: puntajes[],
          aireLibre: puntajes[],
          date: date,
        }

      return await actitudes.insertOne(actiudesDoc)
    } catch (e) {
      console.error(`Error al añadir al usuario a la base de datos: ${e}`)
      return { error: e }
    }
  }

  static async updateActitudes(id_actitudes, id_usuario, puntajes, date) {
    try {
      const updateResponse = await actitudes.updateOne(
        { _id: ObjectId(id_actitudes)},                                                     //Cambiar
        { $set: { 
          servicioSocial: puntajes[],
          ejecutiva: puntajes[],
          verbal: puntajes[],
          artistico: puntajes[],
          musical: puntajes[],
          organizacion: puntajes[],
          cientifico: puntajes[],
          calculo: puntajes[],
          mecanica: puntajes[],
          aireLibre: puntajes[],
          date: date
          } },
      )

      return updateResponse
    } catch (e) {
      console.error(`Los resultados del cuestionario de actitudes no fue actualizado: ${e}`)
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