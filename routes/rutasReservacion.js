const{  Router }= require('express');


const{ buscarReservacion }= require('../controllers/controladorReservacion.js');
const{ agregarReservacion }= require('../controllers/controladorReservacion.js');
const{ editarReservacion }= require('../controllers/controladorReservacion.js');
const{ eliminarReservacion }= require('../controllers/controladorReservacion.js');

const { validarPeticion }= require('../validations/validaciones.js');
const { check }= require('express-validator');

let validaciones=Array(

    check('nombre',"Este campo es obligatorio").not().isEmpty(),
    check('apellido',"Este campo es obligatorio").not().isEmpty(),
    check('telefono',"Este campo es obligatorio").not().isEmpty(),
    check('fechaIncio',"Este campo es obligatorio").not().isEmpty(),
    check('fechaFinal',"Este campo es obligatorio").not().isEmpty(),
    check('numeroPersonas',"Este campo es obligatorio").not().isEmpty(),
    check('tipoPaquete',"Este campo es obligatorio").not().isEmpty(),
    validarPeticion
);

const rutas=Router();

rutas.get('/reservacion/:id',buscarReservacion);
rutas.post('/reservacion/nueva',validaciones,agregarReservacion);
rutas.put('/reservacion/editar/:id',editarReservacion);
rutas.delete('/reservacion/eliminar/:id',eliminarReservacion);

module.exports=rutas;