const Solicitudes = require('../models/Solicitud');

exports.consultarSolicitudes = async(req, res) => {
    try {
        const solicitudes = await Solicitudes.find();
        res.json(solicitudes);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar las solicitudes');
    }
}

exports.agregarSolicitudes = async(req, res) => {
    try {
        let solicitudes;
        solicitudes = new Solicitudes(req.body)
        await solicitudes.save();
        res.send(solicitudes);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar las solicitudes');
    }
}

exports.consultarSolicitud = async(req, res) => {
    try {
        let solicitud = await Solicitudes.findById(req.params.id);
        if(!solicitud){
            res.status(404).json({msg: 'no se logra encontrar la solicitud'});
        }
        res.send(solicitud);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar una solicitud');
    }
}

exports.eliminarSolicitud = async(req, res) => {
    try {
        let solicitud = await Solicitudes.findById(req.params.id);
        if(!solicitud){
            res.status(404).json({msg: 'no existe la solicitud'});
            return 
        }

        await Solicitudes.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'la solicitud fue eliminada'});
    } catch (error) {
        console.log(error);
        res.status(500).send('error al conectar una solicitud');
    }
}

exports.modificarSolicitud = async(req, res) => {
    try {       
        const {fechaInicio, fechaFinal, valor, seguro, equipo} = req.body;
        let solicitud = await Solicitudes.findById(req.params.id);
        if(!solicitud){
            res.status(404).json({msg: 'no existe el solicitud'});
            return 
        }
        solicitud.fechaInicio = fechaInicio;
        solicitud.fechaFinal = fechaFinal;
        solicitud.valor = valor;
        solicitud.seguro = seguro;
        solicitud.equipo = equipo;

        solicitud = await Solicitudes.findByIdAndUpdate({_id: req.params.id}, solicitud, 
            {new: true});

        res.json(solicitud);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al modificar un solicitud');
    }
}