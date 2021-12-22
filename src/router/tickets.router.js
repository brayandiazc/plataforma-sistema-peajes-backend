import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from './../controller/tickets.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/tickets', authMiddleware, index);
app.post('/tickets', authMiddleware, save);
app.get('/tickets/:ticketsId', authMiddleware, edit);
app.put('/tickets/:ticketsId', authMiddleware, update);
app.delete('/tickets/:ticketsId', authMiddleware, remove);

export default app;