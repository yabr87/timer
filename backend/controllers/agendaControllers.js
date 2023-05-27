const { ctrlWrapper } = require('../helpers');
const { Agenda } = require('../models/agendaModel');

const getAll = async (req, res) => {
  const agenda = await Agenda.findAll();
  res.status(200).json(agenda);
};

const deleteById = async (req, res) => {};

module.exports = {
  getAll: ctrlWrapper(getAll),
  deleteById: ctrlWrapper(deleteById),
};
