const {request,response}= require ('express');

const ReservacionModelo=require('../models/ReservacionModelo.js');

async function buscarReservacion(peticion=request, respuesta=response){

    let datosconsultados= await ReservacionModelo.find();

    respuesta.json({
        mensaje:datosconsultados
    });
    
}

async function agregarReservacion(peticion=request, respuesta=response){
    
    let datosReservacion=peticion.body;

    let reservacion= new ReservacionModelo(datosReservacion);
    await reservacion.save();

    respuesta.json({
        mensaje:'Reservacion agregada',
        datos:reservacion
    });
}

async function editarReservacion(peticion=request, respuesta=response){

    let id= peticion.params.id;
    let datosReservacion=peticion.body;

    await ReservacionModelo.findByIdAndUpdate(id,datosReservacion);
    
    respuesta.json({
        mensaje:'Jugador actualizado con exito'
    });
}

async function eliminarReservacion(peticion=request, respuesta=response){

    let id= peticion.params.id;
    await ReservacionModelo.findByIdAndDelete(id);
    
    respuesta.json({
        mensaje:'Jugador eliminado con exito'
    });
}

module.exports={
    buscarReservacion,
    agregarReservacion,
    editarReservacion,
    eliminarReservacion
}