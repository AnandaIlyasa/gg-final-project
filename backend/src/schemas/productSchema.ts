import { model, Schema } from "mongoose";
import Product from "../models/entity/product";

const productSchema = new Schema({
    productLink: {
        type: Schema.Types.String,
        required: true,
    },
    title: {
        type: Schema.Types.String,
        required: true,
    },
    price: {
        type: Schema.Types.Number,
        required: true,
    },
    imgUrl: {
        type: Schema.Types.String,
        required: true,
    }
},
{
    versionKey: false
});

export default model<Product>('products', productSchema);