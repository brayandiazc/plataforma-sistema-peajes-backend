import { Router } from 'express';
import {
   index,
//   save,
   edit,
   update,
//   remove,
  register, login, getUser 
} from './../controller/usertolls.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.post('/aut/login', login);
app.post('/aut/register', register);
app.get('/aut', getUser);
app.get('/aut/index', authMiddleware, index);
app.get('/aut/:usertollsId', authMiddleware, edit);
app.put('/aut/:usertollsId', authMiddleware, update);

export default app;