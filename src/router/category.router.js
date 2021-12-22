import { Router } from 'express';
import {
    index,
    save,
    edit,
    update,
    remove,
} from './../controller/category.controller';

import { authMiddleware } from '../middleware/auth.middleware' //

const app = Router();
// esto se conoce como API RES (recursos)
app.get('/category', authMiddleware, index); // esta ruta va estar protegida con la import del Middleware si quiero tener varios middleware se coloca dentro de [authMiddleware,etc]
app.post('/category', authMiddleware, save);
app.get('/category/:categoryId', authMiddleware, edit);
app.put('/category/:categoryId', authMiddleware, update);
app.delete('/category/:categoryId', authMiddleware, remove);

export default app;
