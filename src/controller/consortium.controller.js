import consortiumModel from '../model/consortium.model';

const index = async (req, res) => {
  try {
    const data = await consortiumModel.find({});
    return res.json({ status: true, items: data });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new consortiumModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await consortiumModel.findById(params.consortiumId);
    return res.json({ status: true, item: category });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await consortiumModel.findByIdAndUpdate(params.consortiumId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await consortiumModel.findByIdAndDelete(params.consortiumId);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

export { index, save, edit, update, remove };