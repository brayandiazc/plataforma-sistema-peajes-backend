import rifdcardModel from '../model/rifdcard.model';
import Rifd_CardTransModel from '../model/rifdcardtrans.model';

const index = async (req, res) => {
  try {
    const data = await Rifd_CardTransModel.find({});
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new Rifd_CardTransModel(data);
    await model.save();
    await updateBalance(data.id_rifdcard, data.value3);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await Rifd_CardTransModel.findById(params.rifdcardtransId);
    return res.json({ status: true, item: category });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await Rifd_CardTransModel.findByIdAndUpdate(params.rifdcardtransId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await Rifd_CardTransModel.findByIdAndDelete(params.rifdcardtransId);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const updateBalance = async (data, value) => {
    try {
        let alert = require('alert'); 
        const verify = await rifdcardModel.findOne({id_rifdcard: data});
        let t_value=verify.balance+value;
        //alert(t_value);
        //const t_balance = await rifdcardModel.findByIdAndUpdate(data, { balance: t_value});
        if (verify) {
            const t_balance = await rifdcardModel.findByIdAndUpdate(data, { balance: t_value});
            alert(t_balance);
        } 
    } catch (e) {
        return res.json({ status: false, errors: e.message });
    }
};


export { index, save, edit, update, remove,updateBalance };