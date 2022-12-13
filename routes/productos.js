const express = require('express');
const router = express.Router();
const productosControl = require('../controllers/productosControl');

//rutas crud
//enlazo controlador con rutas
router.get('/', productosControl.consultarProductos);  
router.post('/', productosControl.agregarProductos);
router.get('/:id',productosControl.consultarProducto); 
router.delete('/:id', productosControl.eliminarProducto);
router.put('/:id', productosControl.modificarProducto);

module.exports = router;
