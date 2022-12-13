const mongoose = require('mongoose');
require('dotenv').config();

const conectarBD = () => {
    //conexion con mongodb
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('esta conectada a la base de datos mongo'))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;