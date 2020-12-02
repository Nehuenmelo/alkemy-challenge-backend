'use strict'

var Operation = require('../models/operation');

var controller = {
    
    saveOperation: function(req,res){
        var operation = new Operation();
        
        var params = req.body;
        operation.concept = params.concept;
        operation.amount = params.amount;
        operation.date = params.date;
        operation.income = params.income;

        // .save es un metodo de mongoose para guardar el json en la base de datos
        operation.save((err, operationStored) => {
            if(err) return res.status(500).send({message: "Error al guardar el documento"});

            if(!operationStored) return res.status(404).send({message: "No se ha podido guardar la operacion"});

            return res.status(200).send({operation: operationStored});
        })

    },

    getOperation: function(req, res){
        var operationId = req.params.id;

        if(operationId == null) return res.status(404).send({message: "La operacion no existe"});

        Operation.findById(operationId, (err, operation) => {
            if(err) return res.status(500).send({message: "Error al devolver los datos"});

            if(!operation) return res.status(404).send({message: "La operacion no existe"});

            return res.status(200).send({
                operation
            });
        });
    },

    getOperations: function(req, res){
        Operation.find({}).exec((err, operations) => {
            if(err) return res.status(500).send({message: "Error al devolver los datos"});

            if(!operations) return res.status(404).send({message: "No hay projectos para mostrar"});

            return res.status(200).send({operations});
        })
    },

    updateOperation: function(req, res){
        var operationId = req.params.id;
        var update = req.body;

        Operation.findByIdAndUpdate(operationId, update, {new: true}, (err, operationUpdated) => {
            if(err) return res.status(500).send({message: "Error al actualizar"});

            if(!operationUpdated) return res.status(404).send({message: "No existe el projecto para actualizar"});

            return res.status(200).send({operation: operationUpdated});
        })
    },

    deleteOperation: function(req, res){
        var operationId = req.params.id;

        Operation.findByIdAndDelete(operationId, (err, operationRemoved) => {
            if (err) return res.status(500).send({message: "No se ha podidod borrar la operacion"});

            if(!operationRemoved) return res.status(404).send({message: "No se puede eliminar esa operacion"});

            return res.status(200).send({
                operation: operationRemoved
            });
        })
    }

};

module.exports = controller;