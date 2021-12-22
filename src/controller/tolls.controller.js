import tollsModel from '../model/tolls.model';

const index = async (req, res) => {
  try {
    const data = await tollsModel.find({})
    .populate('id_consortium').populate('booths.id_user');
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new tollsModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const tolls = await tollsModel.findById(params.tollsdId);
    return res.json({ status: true, toll: tolls });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await tollsModel.findByIdAndUpdate(params.tollsdId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await tollsModel.findByIdAndDelete(params.tollsdId);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

export { index, save, edit, update, remove };