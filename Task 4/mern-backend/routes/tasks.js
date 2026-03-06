const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/add', async (req, res) => {
  const task = new Task({ text: req.body.text });
  await task.save();
  res.json(task);
});

router.put('/update/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true });
  res.json(task);
});

router.delete('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

router.put('/toggle/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

module.exports = router;
