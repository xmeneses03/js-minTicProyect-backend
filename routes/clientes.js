const express = require('express');
const router = express.Router();
const clientesControl = require('../controllers/clientesControl');

//rutas crud
//enlazo controlador con rutas
router.get('/', clientesControl.consultarClientes);  
router.post('/', clientesControl.agregarClientes);
router.get('/:id',clientesControl.consultarCliente); 
router.delete('/:id', clientesControl.eliminarCliente);
router.put('/:id', clientesControl.modificarCliente);

module.exports = router;
