import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  category_id: { type: Schema.Types.ObjectId, ref: 'Category' },
  size: {
    width: Number,
    height: Number,
  },
  state: { type: Boolean, default: true },
  colors: [String],
  features: [
    {
      name: String,
      decription: String,
      lot_id: { type: Schema.Types.ObjectId, ref: 'Lot' },
    },
  ],
});

export default model('Product', productSchema);



// import { Schema, model, now, ObjectId } from 'mongoose';

// const productschema= new Schema({
//     name:String,
//     category_id:{type: ObjectId, ref:'Category'},
//     size: {
//         width: Number,
//         height: Number,
//     },
//     state:{type:Boolean, default:true},///tipo confirguracion de base de datos.
//     colors: [String], //Array de las dos formas...
//     features:[{
//         name: String,
//         descript: String,
//         lod_id:{ type: ObjectId, ref:'Lot'},
//     }],
//     date: {type: Date, default: Date}
// });

// export default model('Products', productschema);