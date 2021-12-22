// UN MIDDLEWARE se encargará de validar que si tengamos permiso a la ruta que queremos entrar token correcto o no haya expirado
import { Router } from 'express';
import { verify } from 'jsonwebtoken';

const authMiddleware = Router(); 
authMiddleware.use((req, res, next) => { //esta funcion Next se encarga de decir si continua o no continua al controlador 
    const token = req.headers['authorization']; //tome el toque que esta llegando de la cabezera que se coloco en POSTMAN authrization

    console.log("Token.middleware: " +token)

    if (token) {
        verify(token, process.env.JWT_SECRET, (err, decoded) => { //decoded return la inf que guardamos en el token     
        if (err) return res.json({ status:false, errors: 'Token Invalida' }); 

          req.user = decoded;    
          next();
        });

    } else {
      return res.send({
          status: false,
          errors: 'Token not found',
      });
    }
 });
 export {authMiddleware};
