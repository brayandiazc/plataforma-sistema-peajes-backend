import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const usertollsSchema = new Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 

    password: { type: String, required:true },
    gender: { type: String,default: 'M' },   
    type_doc: { type: String, default: 'CC' },   
    num_doc: { type: Number, required:true },   
    cellphone: { type: String, 
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        required:true 
    }, 
    addresses:String,
    addresses2:String,
    id_rifd: { type: Schema.Types.ObjectId, ref: 'Rifd_Card' },
    country: String,
    stateCountry: String,
    zip: Number,
    role: { type: String, default: 'ADMIN' },
    state: { type: Boolean, default: true },
});

export default model('Users', usertollsSchema);