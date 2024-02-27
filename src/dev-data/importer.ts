require ('dotenv').config ({path: './config.env'});
import mongoose from "mongoose";
import Product from "../models/productModel";
import products from './products';

mongoose.connect (process.env.DATABASE!).then (() =>
{
    start ();
});


function start () : void 
{
    if (process.argv[2] === '--import')
        importProducts ();
    else
        deleteProducts ();
}


async function importProducts () : Promise<void>
{
    await Product.create(products);

    console.log ('Inserted products');
}

async function deleteProducts () : Promise<void>
{
    await Product.deleteMany ();

    console.log ('Deleted products.');
}