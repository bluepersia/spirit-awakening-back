import { Request, Response } from "express";
import AppError from "../util/AppError";

export default function globalErrorHandler (err:Error, req:Request, res:Response, next:() => void) : void
{
    let status = 'error';
    let statusCode = 500;
    let message = 'Something went very wrong.'
    if (err instanceof AppError)
    {
        const appError = err as AppError;
        status = appError.status;
        statusCode = appError.statusCode;
        message = appError.message;
    }

    res.status (statusCode);

    if (process.env.NODE_ENV === 'development')
    {
        res.json ({
            status,
            message: err.message,
            err,
            stack: err.stack
        })
        return;
    }

    res.json ({
        status,
        message
    })
}