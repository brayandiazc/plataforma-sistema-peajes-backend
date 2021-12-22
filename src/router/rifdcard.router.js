import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from './../controller/rifdcard.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/rifdcard', authMiddleware, index);
app.post('/rifdcard', authMiddleware, save);
app.get('/rifdcard/:rifdcardId', authMiddleware, edit);
app.put('/rifdcard/:rifdcardId', authMiddleware, update);
app.delete('/rifdcard/:rifdcardId', authMiddleware, remove);

export default app;