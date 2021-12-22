import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from './../controller/tolls.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/tolls', authMiddleware, index);
app.post('/tolls', authMiddleware, save);
app.get('/tolls/:tollsdId', authMiddleware, edit);
app.put('/tolls/:tollsdId', authMiddleware, update);
app.delete('/tolls/:tollsdId', authMiddleware, remove);

export default app;