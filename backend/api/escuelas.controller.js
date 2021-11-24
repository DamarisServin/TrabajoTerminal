import EscuelasDAO from "../dao/escuelasDAO.js"

export default class EscuelasController {
  static async apiGetEscuelas(req, res) {

    let filtro = {}
    if (req.query.area) {
      filtro.area = req.query.area
    } 
    const { escuelasList, totalNumEscuelas } = await EscuelasDAO.getEscuelas({
      filtro,
    })

    let response = {
      escuelas: escuelasList,
      filtro: filtro,
      total_results: totalNumEscuelas,
    }
    res.json(response)
  }


  static async apiGetEscuelaByName(req, res) {
    try {
      let nombre = req.params.nombre || {}
      let escuela = await EscuelasDAO.getEscuelaByName(nombre)
      if (!escuela) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(escuela)
    } catch (e) {
      console.log(`Error en la api: ${e}`)
      res.status(500).json({ error: e })
    }
  }

  /*static async apiGetEscuelaAreas(req, res) {
    try {
      let areas = await EscuelasDAO.getAreas()
      res.json(areas)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }*/
}