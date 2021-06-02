const {model, Schema}=require('mongoose');

const reservacionEsqueleto=Schema({

    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechaIncio:{
        type:String,
        required:true
    },
    fechaFinal:{
        type:String,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    tipoPaquete:{
        type:String,
        required:true
    }

});

module.exports=model('reservacion',reservacionEsqueleto);