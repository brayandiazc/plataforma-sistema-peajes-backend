import usertollsModel from './../model/usertolls.model';
import { hashSync, compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { createTransport } from 'nodemailer';

const register = async (req, res) => {
  try {
    const body = req.body;
    body.password = hashSync(body.password, 10);
    console.log("body: "+body);
    const user = new usertollsModel(body);
    console.log(user);
    console.log("voy salvar4");
    await user.save();
    console.log("Debi salvar");
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
    from: '"Tolls News 👻" <javinasperez@gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: 'Hello - Confirm you register... ✔', // Subject line
    html: `<b>Confirm Email <a href='localhost:3001/api/confirm/email/${user._id}'>Click here</a></b>`, // html body
  });
};

const login = async (req, res) => {
  try {
    const body = req.body;
    const verify = await usertollsModel.findOne({ email: body.email, state: true });
    if (verify) {
      if (compareSync(body.password, verify.password)) {
        const token = sign(//Generacion de Token personalizado
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: { id: verify._id, name: verify.name, email: verify.email, role: verify.role  },
          },
          process.env.JWT_SECRET
        );

        return res.json({ status: true, token});
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

const getUser = async (req, res) => {
    const user = req.user;
    console.log("user: "+user);
    return res.json({ status: true, item: user });
  };
  
  const edit = async (req, res) => {
    try {
      const params = req.params;
      const usertolls = await usertollsModel.findById(params.usertollsId);
      return res.json({ status: true, item: usertolls });
    } catch (ex) {
      return res.json({ status: false, errors: ex.message });
    }
  };
  
const update = async (req, res) => {
    try {
      const params = req.params;
      const body = req.body;
      await usertollsModel.findByIdAndUpdate(params.usertollsId, body);
      return res.json({ status: true });
    } catch (ex) {
      return res.json({ status: false, errors: ex.message });
    }
};

  const index = async (req, res) => {
    try {
      const data = await usertollsModel.find({})
        .populate('id_rifd')
        //.populate('features.lot_id');
      return res.json({ status: true, items: data });
    } catch (ex) {
      return res.json({ status: false, errors: ex.message });
    }
  };

export { register, login, getUser,index, update, edit };