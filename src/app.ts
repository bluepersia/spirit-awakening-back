import express from 'express';
const app = express ();
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
const xss = require ('xss-clean');
import hpp from 'hpp';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import productRouter from './routes/productRoutes';
import orderRouter from './routes/orderRoutes';
import globalErrorHandler from './controllers/errorController';
import AppError from './util/AppError';

app.use (helmet ());
app.use (mongoSanitize ());
app.use (xss());
app.use (hpp());

app.use (cors ({
    origin: process.env.HOME_URL,
    credentials: true
}));

app.use (express.static (`./public`, {
    setHeaders: res => res.header ('Cross-Origin-Resource-Policy', 'cross-origin')
}))

app.use (rateLimit ({
    windowMs: 5000,
    max: 5,
    message: 'Exceeded the rate limit'
}))

app.use (compression ());

app.use (express.json ({limit:'10kb'}));

app.use ('/api/v1/products', productRouter);
app.use ('/api/v1/orders', orderRouter);

app.all ('*', () => { throw new AppError ('Route was not found!', 404)});

app.use (globalErrorHandler);

export default app;