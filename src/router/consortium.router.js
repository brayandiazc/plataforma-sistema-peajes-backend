import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from './../controller/consortium.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/consortium', authMiddleware, index);
app.post('/consortium', authMiddleware, save);
app.get('/consortium/:consortiumId', authMiddleware, edit);
app.put('/consortium/:consortiumId', authMiddleware, update);
app.delete('/consortium/:consortiumId', authMiddleware, remove);

export default app;