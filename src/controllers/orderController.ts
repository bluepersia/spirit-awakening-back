import { Request, Response } from "express";
import { createOrder, captureOrder } from "../util/PayPal";;
import handle from 'express-async-handler';

export const createPayPalOrder = handle (async (req:Request, res:Response) : Promise<void> =>
{
    try {
        // use the cart information passed from the front-end to calculate the order amount detals
        const {email, order}  = req.body;
        const { jsonResponse, httpStatusCode } = await createOrder(email, order);
        
        res.status(httpStatusCode).json(jsonResponse);
      } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
      }
});

export const capturePayPalOrder = handle (async(req:Request, res:Response) : Promise<void> =>
{
    try {
        const { orderID } = req.body;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        res.status(httpStatusCode).json(jsonResponse);
      } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
      }


});