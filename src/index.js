import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import CategoryRouter from './router/category.router';
import ProductRouter from './router/product.router';
import userRouter from './router/user.router';
import ConsortiumRouter from './router/consortium.router';
import UsertollsRouter from './router/usertolls.router';
import rifdcardRouter from './router/rifdcard.router';
import tollsRouter from './router/tolls.router';
import rifdcardtransRouter from './router/rifdcardtrans.router';
import ticketsRouter from './router/tickets.router';


dotenv.config();
const app = express();

const main = async () => {  //const main se iguala a una función flecha que es Asincronica
  await mongoose.connect(process.env.URL_DB); //conexión a la base de datos URL_DB es el nombre que se le dio en .env
  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.use('/api', CategoryRouter);
  app.use('/api', ProductRouter);
  app.use('/api', userRouter);
  app.use('/api', ConsortiumRouter);
  app.use('/api', UsertollsRouter); 
  app.use('/api', rifdcardRouter);    
  app.use('/api', tollsRouter);      
  app.use('/api', rifdcardtransRouter);    
  app.use('/api', ticketsRouter);
  app.listen(process.env.PORT, () => {
    console.log(`app listening at port ${process.env.PORT}`);
  });
};

main().catch((err) => console.log(err)); // Si ocurre un error




