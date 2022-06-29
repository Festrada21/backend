
import {Router} from 'express';
import TokenValidation from '../libs/validateToken';
import { profile, singIn, singUp } from '../controllers/Auth';


const authrouter = Router();


authrouter.post('/singup',singUp);
authrouter.post('/singin',singIn);

authrouter.get('/profile',TokenValidation,profile)

export default authrouter;