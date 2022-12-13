const express = require('express');
const router = express.Router();
const proveedoresControl = require('../controllers/proveedoresControl');

//rutas crud
//enlazo controlador con rutas
router.get('/', proveedoresControl.consultarProveedores);   //mostrar proveedores (get)
router.post('/', proveedoresControl.agregarProveedores);
router.get('/:id', proveedoresControl.consultarProveedor);  //mostrar un solo proveedor
router.delete('/:id', proveedoresControl.eliminarProveedor);
router.put('/:id', proveedoresControl.modificarProveedor);




//get mostrar o ver o consultar
//put actualizar o modificar
//delete eliminar
//post agregar

module.exports = router;
