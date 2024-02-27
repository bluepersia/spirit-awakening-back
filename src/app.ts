import express from 'express';
const app = express ();
import productRouter from './routes/productRoutes';
import globalErrorHandler from './controllers/errorController';
import AppError from './util/AppError';

app.use ('/api/v1/products', productRouter);

app.all ('*', () => { throw new AppError ('Route was not found!', 404)});

app.use (globalErrorHandler);

export default app;