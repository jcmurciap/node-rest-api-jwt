import express from "express";
import morgan from "morgan";
import pkg from '../package.json';
import productsRouter from './routes/products.routes';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import { createRoles } from "./libs/initialSetup";
import User from "./models/User";


const app = express();

createRoles();
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

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);






export default app;