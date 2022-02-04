import {Router} from 'express';
const router = Router();
import * as userController from '../controllers/user.controller';
import {authJwt, verifySignup} from '../middlewares';

const router = Router();

    // Crea usuarios
    router.post('/', [
        authJwt.verifyToken, 
        authJwt.isAdmin,
        verifySignup.checkRolesExisted
    ], userController.createUser);
    
    // Obtiene todos los usuarios


export default router;