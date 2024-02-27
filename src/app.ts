import express from 'express';
const app = express ();
import productRouter from './routes/productRoutes';

app.use ('/api/v1/products', productRouter);

export default app;