const { ctrlWrapper } = require('../helpers');
const { Agenda } = require('../models/agendaModel');
const { HttpError } = require('../helpers');

const getAll = async (req, res) => {
  const agenda = await Agenda.findAll();
  res.status(200).json(agenda);
};

const createTodo = async (req, res) => {
  const { todo, duration, isDone } = req.body;
  const agenda = await Agenda.create({ todo, duration, isDone });
  res.status(201).json(agenda);
};

const updateTodo = async (req, res) => {
  const { todoId } = req.params;

  const { todo, duration, isDone } = req.body;

  const updateTodo = await Agenda.findByPk(todoId);

  if (!updateTodo) {
    throw new HttpError(404, `Todo with ${todoId} not found`);
  }

  updateTodo.todo = todo;
  updateTodo.duration = duration;
  updateTodo.isDone = isDone;

  await updateTodo.save();

  res.status(200).json(updateTodo);
};

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const todo = await Agenda.findByPk(todoId);
  if (!todo) {
    throw new HttpError(404, `Todo with ${todoId} not found`);
  }

  await todo.destroy();

  res.status(200).json({ message: 'Todo successfully deleted' });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  createTodo: ctrlWrapper(createTodo),
  updateTodo: ctrlWrapper(updateTodo),
  deleteTodo: ctrlWrapper(deleteTodo),
};
