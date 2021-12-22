import { Schema, model } from 'mongoose';

const rifdcardtransSchema = new Schema({
    id_rifdcard: { type: Schema.Types.ObjectId, ref: 'Rifd_Card' },
    id_users: { type: Schema.Types.ObjectId, ref: 'Users' },
    type_trans: {type:String, required:true},
    date: {type:Date, default:Date.now},
    value1: { type: Number, required:true },
    value2: { type: Number, required:true },
    value3: { type: Number, required:true },
    state: { type: Boolean, default: true },
});

export default model('Rifd_CardTrans', rifdcardtransSchema);