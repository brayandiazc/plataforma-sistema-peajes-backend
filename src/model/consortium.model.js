import { Schema, model } from 'mongoose';

const consortiumSchema = new Schema({
  name:{type:String, required:true},
  desc:{type:String, required:true},
  img:{type:String, required:true},
  state:{type:Boolean, default:true},///tipo confirguracion de base de datos.
});

export default model('Consortium', consortiumSchema);