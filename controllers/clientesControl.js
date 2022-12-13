const Clientes = require('../models/Clientes');

exports.consultarClientes = async(req, res) => {
    try {
        const clientes = await Clientes.find();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar los clientes');
    }
}

exports.agregarClientes = async(req, res) => {
    try {
        let clientes;
        clientes = new Clientes(req.body)
        await clientes.save();
        res.send(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar los clientes');
    }
}

exports.consultarCliente = async(req, res) => {
    try {
        let cliente = await Clientes.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: 'no se logra encontrar el cliente'});
        }
        res.send(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar un cliente');
    }
}

exports.eliminarCliente = async(req, res) => {
    try {
        let cliente = await Clientes.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: 'no existe el cliente'});
            return 
        }

        await Clientes.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'el cliente fue eliminado'});
    } catch (error) {
        console.log(error);
        res.status(500).send('error al conectar un cliente');
    }
}

exports.modificarCliente = async(req, res) => {
    try {
       
        const {cedula, nombres, apellidos, correo, telefono, ciudad} = req.body;
        let cliente = await Clientes.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: 'no existe el cliente'});
            return 
        }
        cliente.cedula = cedula;
        cliente.nombres = nombres;
        cliente.apellidos = apellidos;
        cliente.correo = correo;
        cliente.telefono = telefono;
        cliente.ciudad = ciudad;

        cliente = await Clientes.findByIdAndUpdate({_id: req.params.id}, cliente, 
            {new: true});

        res.json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al modificar un cliente');
    }
}