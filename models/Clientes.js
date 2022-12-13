const mongoose = require('mongoose');
//se coloca el esquema que esta en la base de datos

const clientesSchema = mongoose.Schema({
    cedula:{
        type: Number,
        required:true
    }, 
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    }, 
    ciudad:{
        type: String,
        required: true
    }
},{versionkey: false});

module.exports = mongoose.model('Clientes', clientesSchema)