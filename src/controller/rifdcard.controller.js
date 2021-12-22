import Rifd_CardModel from '../model/rifdcard.model';

const index = async (req, res) => {
  try {
    const data = await Rifd_CardModel.find({});
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new Rifd_CardModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await Rifd_CardModel.findById(params.rifdcardId);
    return res.json({ status: true, item: category });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await Rifd_CardModel.findByIdAndUpdate(params.rifdcardId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await Rifd_CardModel.findByIdAndDelete(params.rifdcardId);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

export { index, save, edit, update, remove };