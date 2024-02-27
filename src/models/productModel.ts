import {Schema, model } from 'mongoose';


export interface IProduct 
{
    name:string,
    summary:string,
    descriptionHtml:string,
    image:string,
    price:number,
    priceTxt:string
}

const productSchema = new Schema<IProduct>({
    name: {
        type:String,
        required:true
    },
    summary: {
        type:String,
        required:true
    },
    descriptionHtml: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required:true
    },
    priceTxt: {
        type:String,
        required: true
    }
})


const Product = model ('Product', productSchema);


export default Product;