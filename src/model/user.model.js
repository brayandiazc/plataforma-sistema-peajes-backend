import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    state: { type: Boolean, default: true }, //confirmar correo electronico para que confirme debe ser false si confirma pasará a true 
    email: { type: String },
    password: { type: String },
    role: { type: String, default: 'CLIENT' },
});

export default model('User', userSchema);
//1 Modelo, 2 Controlador , 3 Ruta