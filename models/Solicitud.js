const mongoose = require('mongoose');
//se coloca el esquema que esta en la base de datos

const solicitudesSchema = mongoose.Schema({
    fechaInicio:{
        type: String,
        required:true
    }, 
    fechaFinal:{
        type: String,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    seguro:{
        type: Number,
        required: true
    },
    equipo:{
        type: String,
        required: true
    }
},{versionkey: false});

module.exports = mongoose.model('Solicitudes', solicitudesSchema);