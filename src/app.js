import express from "express";
import morgan from "morgan";
import pkg from '../package.json';
import productsRouter from './routes/products.routes';

const app = express();

app.set('pkg', pkg);
app.use(morgan('dev')); // HTTP request logger middleware
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/products', productsRouter);






export default app;