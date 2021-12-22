import { Schema, model, now } from 'mongoose';

const lotschema= new Schema({
    name:String,
    state:{type:Boolean, default:true},///tipo confirguracion de base de datos.
    date: {type: Date, default: Date-now}
});

export default model('Lot', lotschema);