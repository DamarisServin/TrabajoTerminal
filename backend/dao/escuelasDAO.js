//Data Access Object
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let escuelas

export default class EscuelasDAO {
  static async injectDB(conn) {
    if (escuelas) {
      return
    }
    try {
      escuelas = await conn.db(process.env.TT_NS).collection("escuelas")
    } catch (e) {
      console.error(
        `Error accesando al objeto escuela: ${e}`,
      )
    }
  }

  static async getEscuelas({
    filtro = null,
  } = {}) {
    let query
    if (filtro) {     //Opcion para añadir más filtros
      if ("area" in filtro) {
        query = { "": { $eq: filtro["area"] } }
      }
    }

    let encontrado
    
    try {         //Aplica el filtro si existe
      encontrado = await escuelas
        .find(query)
    } catch (e) {
      console.error(`Error buscando el filtro: ${e}`)
      return { escuelasList: [], totalNumEscuelas: 0 }
    }

    try{
      const escuelasList = await encontrado.toArray()
      const totalNumEscuelas = await escuelas.countDocuments(encontrado)

      return {escuelasList, totalNumEscuelas}

    }catch(e){
      console.error(`No se pudo convertir la lista de escuelas o el total de resultados ${e}`)
      return { escuelasList: [], totalNumEscuelas: 0 }
    }

  }

  static async getEscuelaByName(nombre) {
    let encontrado
    
    try {        
      encontrado = await escuelas.find({ "nombre": nombre}).toArray()
      return encontrado
    } catch (e) {
      console.error(`Error buscando la escuela: ${e}`)
    }
  }

/*  static async getAreas() {
    let areas = []
    try {
      areas = await escuelas.distinct("areas")
      return areas
    } catch (e) {
      console.error(`Error al buscar area ${e}`)
      return areas
    }
  }*/
}
