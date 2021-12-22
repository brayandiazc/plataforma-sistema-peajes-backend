import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from './../controller/product.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const app = Router();

app.get('/product', index);
app.post('/product', save);
app.get('/product/:productId', edit);
app.put('/product/:productId', update);
app.delete('/product/:productId', remove);

export default app;