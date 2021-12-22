import { Schema, model } from 'mongoose';


const ticketSchema = new Schema({
    //id_booths:{type: Schema.Types.ObjectId, ref: 'booths'},
    id_booths:{type:String, required:true},
    //id_tolls:{type:String, required:true},
    id_tolls:{type: Schema.Types.ObjectId, ref: 'Tolls'},



    name_category:{type:String, required:true},
    type_payment:{type:String, required:true},
    id_rifdcard: { type: Schema.Types.ObjectId, ref: 'Rifd_Card' },
    id_users: { type: Schema.Types.ObjectId, ref: 'Users' },
    plate:{type:String, required:true},
    value1: { type: Number, required:true },
    value2: { type: Number, required:true },
    value3: { type: Number, required:true }, 
    id_users_trans: { type: Schema.Types.ObjectId, ref: 'Users' },  
    img:{type:String, required:true},
    date: {type:Date, default:Date.now},
    state: { type: Boolean, default: true },
});

export default model('Tickets', ticketSchema);