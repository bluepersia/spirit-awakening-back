import { Request, Response } from "express";
import Product from "../models/productModel";
import handle from 'express-async-handler';
import AppError from "../util/AppError";

export const getAllProducts = handle (async (req:Request, res:Response) : Promise<void> =>
{
    const products = await Product.find (req.query);

    res.status (200).json ({
        status: 'success',
        result: products.length,
        data: {
            products
        }
    })
});

export const getProduct = handle (async (req:Request, res:Response) : Promise<void> =>
{
    const product = await Product.findById (req.params.id);

    if (!product)
        throw new AppError ('Product was not found!', 404);

    res.status (200).json ({
        status: "success",
        data: {
            product
        }
    })
});