import {Router} from 'express';
import * as authController from '../controllers/auth.controller';
const router = Router();
import {verifySignup, authJwt} from '../middlewares'

router.post('/signup', [
    verifySignup.checkRolesExisted,
    verifySignup.checkDuplicateUsernameOrEmail,

] ,authController.signUp);

router.post('/signin', authController.signIn);

export default router;