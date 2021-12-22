import { Router } from 'express';
import { register, login, getUser } from './../controller/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.post('/auth/login', login); //libre de autenticación
app.post('/auth/register', register); //libre de autenticación
app.get('/auth', authMiddleware, getUser); //quiero obtener el usuario? esta protegido

export default app;