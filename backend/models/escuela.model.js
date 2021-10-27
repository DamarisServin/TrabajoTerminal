const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const escuelaSchema = new Schema({
    area: {
        type: String,
        required: true,
        unique: false,
        trim: false
    },
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: false,
        minlength: 3
    },
    direccion: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 3
    },
    aciertos: {
        type: Number,
        required: true,
        unique: false
    },
    carreras: {
        type: Array,
        required: true,
        unique: false
    },
},  {
    
}); 

const Escuela = mongoose.model('Escuela', escuelaSchema);

module.exports = Escuela;