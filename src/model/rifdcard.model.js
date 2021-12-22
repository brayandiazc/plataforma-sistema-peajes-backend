import { Schema, model } from 'mongoose';

const rifdcardSchema = new Schema({
    balance: { type: Number, required:true }, 
    plate:{type:String, required:true},
    state: { type: Boolean, default: true },
});

export default model('Rifd_Card', rifdcardSchema);