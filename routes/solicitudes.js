const express = require('express');
const router = express.Router();
const solicitudesControl = require('../controllers/solicitudesControl');

//rutas crud
//enlazo controlador con rutas
router.get('/', solicitudesControl.consultarSolicitudes);  
router.post('/', solicitudesControl.agregarSolicitudes);
router.get('/:id',solicitudesControl.consultarSolicitud); 
router.delete('/:id', solicitudesControl.eliminarSolicitud);
router.put('/:id', solicitudesControl.modificarSolicitud);

module.exports = router;
