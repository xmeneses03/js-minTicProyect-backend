const express = require('express');     //ejecutar express para que se ejecute el servidor backend
const conectarBD = require('../config/bd');
const cors = require('cors');

//creamos el servidor
const app = express();
//definir puerto
const port = 5000;

//enlazar la conexion
conectarBD();
app.use(cors());
app.use(express.json());

//ruta postman
app.use('/api/proveedores', require('../routes/proveedores'));
app.use('/api/clientes', require('../routes/clientes'));
app.use('/api/productos', require('../routes/productos'));
app.use('/api/solicitudes', require('../routes/solicitudes'));

//mostrar un mensaje en el servidor para verificar
app.get('/', (req, res) => {    //revisar parametros
    res.send("Bienvenido, el servidor esta configurado, esto se muestra en navegador");
})

//mensaje de inicializacion
app.listen(port, () => console.log("servidor conectado al puerto", port));


