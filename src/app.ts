import express from 'express';
const app = express ();
import productRouter from './routes/productRoutes';
import globalErrorHandler from './controllers/errorController';

app.use ('/api/v1/products', productRouter);


app.use (globalErrorHandler);

export default app;