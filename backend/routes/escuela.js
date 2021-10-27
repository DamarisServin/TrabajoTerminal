const router = require('express').Router();
let Escuela = require('../models/escuela.model');

router.route('/').get((req, res)=> {
    Escuela.find()
        .then(escuelas => res.json(escuelas))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const area = req.body.area;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const aciertos = req.body.aciertos;
    const carreras = req.body.carreras;

    const newEscuela = new Escuela ({
        area,
        nombre,
        direccion,
        aciertos,
        carreras,
    });

    newEscuela.save()
    .then(()=>res.json('Nueva Escuela!'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req, res) => {
    Escuela.findById(req.params.id)
    .then(escuela => res.json(escuela))
    .catch(err => res.status.json('Error: '+err));
});

router.route('/:id').delete((req, res) => {
    Escuela.findByIdAndDelete(req.params.id)
      .then(() => res.json('Escuela borrada.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/update/:id').post((req, res) => {

    Escuela.findById(req.params.id)
      .then(escuela => {
        escuela.area = req.body.area;
        escuela.nombre = req.body.nombre;
        escuela.direccion = req.body.direccion;
        escuela.aciertos = Number(req.body.aciertos);
        escuela.carreras = req.body.carreras;
  
        escuela.save()
          .then(() => res.json('Cambios realizados!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;