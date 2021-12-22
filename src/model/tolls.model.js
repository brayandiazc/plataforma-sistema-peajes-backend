import { Schema, model } from 'mongoose';

const tollsSchema = new Schema({
    name:{type:String, required:true},
    desc:{type:String, required:true},
    id_consortium: { type: Schema.Types.ObjectId, ref: 'Consortium' },
    longitude:{type:Number, required:true},
    latitude:{type:Number, required:true},
    state:{type:Boolean, default:true},
    category: [
        {
            //id_category:{type:String, required:true},
            name:{type:String, required:true},
            desc:{type:String, required:true},
            value:{type:Number, required:true},
        },
    ],
    booths: [
        {
            id_booths:{type:String, required:true},
            //id_tolls:{type:String, required:true},
            name:{type:String, required:true},
            desc:{type:String, required:true},
            id_user: { type: Schema.Types.ObjectId, ref: 'Users' },
        },
    ],    
});

export default model('Tolls', tollsSchema);