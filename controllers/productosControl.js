const Productos = require('../models/Producto');

exports.consultarProductos = async(req, res) => {
    try {
        const productos = await Productos.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar los productos');
    }
}

exports.agregarProductos = async(req, res) => {
    try {
        let productos;
        productos = new Productos(req.body)
        await productos.save();
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar los productos');
    }
}

exports.consultarProducto = async(req, res) => {
    try {
        let producto = await Productos.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'no se logra encontrar el producto'});
        }
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al consultar un producto');
    }
}

exports.eliminarProducto = async(req, res) => {
    try {
        let producto = await Productos.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'no existe el producto'});
            return 
        }

        await Productos.findOneAndRemove({_id:req.params.id});
        res.json({msg: 'el producto fue eliminado'});
    } catch (error) {
        console.log(error);
        res.status(500).send('error al conectar un producto');
    }
}

exports.modificarProducto = async(req, res) => {
    try {
       
        const {codigo, nombreProducto, cantidad, fecha, empresa} = req.body;
        let producto = await Productos.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'no existe el producto'});
            return 
        }
        producto.codigo = codigo;
        producto.nombreProducto = nombreProducto;
        producto.cantidad = cantidad;
        producto.fecha = fecha;
        producto.empresa = empresa;

        producto = await Productos.findByIdAndUpdate({_id: req.params.id}, producto, 
            {new: true});

        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('error al modificar un producto');
    }
}