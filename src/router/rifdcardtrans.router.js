import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
  updateBalance,
} from './../controller/rifdcardtrans.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/rifdcardtrans', authMiddleware, index);
app.post('/rifdcardtrans', authMiddleware, save);
app.get('/rifdcardtrans/:rifdcardtransId', authMiddleware, edit);
app.put('/rifdcardtrans/:rifdcardtransId', authMiddleware, update);
app.delete('/rifdcardtrans/:rifdcardtransId', authMiddleware, remove);

export default app;