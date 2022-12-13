const mongoose = require('mongoose');
//se coloca el esquema que esta en la base de datos

const productosSchema = mongoose.Schema({
    codigo:{
        type: String,
        required:true
    }, 
    nombreProducto:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    empresa:{
        type: String,
        required: true
    }
},{versionkey: false});

module.exports = mongoose.model('Productos', productosSchema)