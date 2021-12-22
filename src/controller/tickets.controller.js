import ticketsModel from '../model/tickets.model';

const index = async (req, res) => {
  try {
    const data = await ticketsModel.find({})
    .populate('id_tolls')
    .populate('id_rifdcard')
    .populate('id_users')    
    .populate('id_users_trans') 
    .populate('id_booths')
    ;
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new ticketsModel(data);
    await model.save();
    //await updateBalance(data.id_rifdcard, data.value3);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await ticketsModel.findById(params.ticketsId);
    return res.json({ status: true, item: category });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await ticketsModel.findByIdAndUpdate(params.ticketsId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await ticketsModel.findByIdAndDelete(params.ticketsId);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};


export { index, save, edit, update, remove };