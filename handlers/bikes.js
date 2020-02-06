const db = require('../models');

exports.store = async (req, res) => {
  try {
    let bike = await db.Bike.create(req.body);
    return res
      .status(201)
      .json(bike);
  } catch (err) {
    return res
      .status(403)
      .json({
        message: 'Oups ! la création de la chaussette n\'a pas eu lieue',
        error: err.message
      });
  }
};

module.exports.all = async (req, res) => {
  try {
    let bikes = await db.Bike.find(req.query);
    return res
      .status(200)
      .json(bikes);
  } catch (err) {
    return res
      .status(500)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

module.exports.show = async (req, res) => {
  try {
    let bike = await db.Bike.findById(req.params.id);
    return res
      .status(200)
      .json(bike);
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

module.exports.update = async (req, res) => {
  try {
    let bike = await db.Bike.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    return res
      .status(200)
      .json(bike);
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

module.exports.delete = async (req, res) => {
  try {
    await db.Bike.findByIdAndRemove(req.params.id);
    return res
      .status(204)
      .json({});
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};
