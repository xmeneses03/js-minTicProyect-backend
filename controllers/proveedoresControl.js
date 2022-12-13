const Proveedores = require('../models/Proveedor');

exports.consultarProveedores = async(req, res) => {
    try {
        const proveedores = await Proveedores.find();
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar los proveedores');
    }
}

exports.agregarProveedores = async(req, res) => {
    try {
        let proveedor;
        proveedor = new Proveedores(req.body)
        await proveedor.save();
        res.send(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar los proveedores');
    }
}

exports.consultarProveedor = async(req, res) => {
    try {
        let proveedor = await Proveedores.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg: 'no se logra encontrar el proveedor'});
        }
        res.send(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar un proveedor');
    }
}

exports.eliminarProveedor = async(req, res) => {
    try {
        let proveedor = await Proveedores.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg: 'no existe el proveedor'});
            return 
        }

        await Proveedores.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'el proveedor fue eliminado'});
    } catch (error) {
        console.log(error);
        res.status(500).send('error al conectar un proveedor');
    }
}

exports.modificarProveedor = async(req, res) => {
    try {       
        const {nombres, apellidos, documento, correo, telefono, empresa} = req.body;
        let proveedor = await Proveedores.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg: 'no existe el proveedor'});
            return 
        }

        proveedor.nombres = nombres;
        proveedor.apellidos = apellidos;
        proveedor.documento = documento;       
        proveedor.correo = correo;
        proveedor.telefono = telefono;
        proveedor.empresa = empresa;

        proveedor = await Proveedores.findByIdAndUpdate({_id: req.params.id}, proveedor, 
            {new: true});

        res.json(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al modificar un proveedor');
    }
}