const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;
//
//DATOS DE LOS Estudiantes
const EstudiantesSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es Necesario'],
    },
    apellido: {
        type: String,
        required: true,

    },
    edad: {
        type: String,
        require: [true, 'Reseña necesaria']
    },


});


module.exports = mongoose.model('Estudiantes', EstudiantesSchema);