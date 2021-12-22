import UserModel from './../model/user.model';
import { hashSync, compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';    //Metodo sing genera el token, firmar el token
import { createTransport, sendMail } from 'nodemailer';

const register = async (req, res) => {
  try {
    const body = req.body;
    body.password = hashSync(body.password, 10); // incriptar contraseña --> 10 vueltas 'SALD'
    const user = new UserModel(body); //BODY CON PASS INCRIPTADO
    await user.save();
    await sendEmail(user);
    return res.json({ status: true });
  } catch (e) {
    return res.json({ status: false, errors: e.message });
  }
};

const sendEmail = async (user) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  await transporter.sendMail({
    from: '"Fred Foo 👻" <javinasperez@gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: 'Hello ✔', // Subject line
    html: `<b>Confirm Email <a href='localhost:3001/api/confirm/email/${user._id}'>Click here</a></b>`, // html body
  });
};

const login = async (req, res) => {
  try {
    const body = req.body;
    const verify = await UserModel.findOne({ email: body.email, state: true });
    if (verify) {
      if (compareSync(body.password, verify.password)) {
        const token = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60, //expira en una hora
            data: { id: verify._id, name: verify.name, email: verify.email },
          },
          process.env.JWT_SECRET
        );

        return res.json({ status: true, mensaje: token });
      }
    } else {
      return res.json({
        status: false,
        errors: 'Email and password incorrect',
      });
    }
  } catch (e) {
    return res.json({ status: false, errors: e.message });
  }
};

const getUser = async (req, res) => {;
const user = req.user;  // retornar la información del usuario logeado 
return res.json({status: true, item: user}); //viene de authmiddleware
};

export { register, login, getUser };