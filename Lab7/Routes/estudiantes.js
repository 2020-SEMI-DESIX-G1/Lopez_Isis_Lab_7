var express = require('express');
var app = express();
var estudiante = require('../Models/Estudiantes');

app.post('/estudiante/create', (req, res) => {

    var data = req.body;
    let estudiante = new estudiante({
        nombre: data.nombre,
        apellido: data.apellido,
        edad: data.edad,

    });

    estudiante.save((err, librodb) => {
        if (err) {
            res.json({
                exito: false,
                err
            });
        } else {


            res.json({
                exito: true,

            });

            console.log(estudiante);
        }

    });

});


app.get('/estudiante/:id', function(req, res, next) {

    var id_estudiante = req.params.id;

    estudiante.findById({ _id: id_estudiante }, (err, estudiantedb) => {
        if (err) {
            res.status(400).json({
                exito: false,
                err: {
                    message: `No se encontro registro con el Id ${id_usuario}`
                }
            });
        }

        res.json({
            exito: true,
            estudiantedb
        });
    });
});

app.get('/estudiante/', function(req, res, next) {


    estudiante.find({}, (err, estudiantedb) => {
        if (err) {
            res.status(400).json({
                exito: false,
                err: {
                    message: `No se encontro registro con el Id ${id_usuario}`
                }
            });
        }

        res.json({
            exito: true,
            estudiantedb
        });
    });
});


app.put('/estudiante/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    estudiante.findByIdAndUpdate(id, body, { new: true }, (err, estudiantedb) => {
        if (err) {
            res.json({
                exito: false,
                err
            });
        }

        res.json({
            ok: true,
            estudiantedb
        })
    })
});

app.delete('/estudiante/delete/:id', (req, res) => {
    var id_productos = req.params.id
    estudiante.findByIdAndDelete(id_productos, (err, estudianteDB) => {
        if (err) {
            res.status(400).json({
                exito: false,
                err

            });
        }

        res.json({
            exito: true,
            estudianteDB
        });
    });

});



module.exports = app;