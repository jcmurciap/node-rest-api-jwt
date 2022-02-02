import {Schema, model} from 'mongoose';

// campos a guardar en la BBDD
const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgUrl: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema);
