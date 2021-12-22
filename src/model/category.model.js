import { Schema, model } from 'mongoose';  //importamos schema 

const categoryschema= new Schema({
    name:{type:String, required:true}, // validación requerida
    state:{type:Boolean, default:true},///tipo confirguracion de base de datos.
});

export default model('Category', categoryschema);







