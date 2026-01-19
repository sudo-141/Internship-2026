const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// For Adding New Tasks
router.post("/add", async (req, res) => {
  try {
    const newTask = new Task({ text: req.body.text });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed To Add New Task" });
  }
});

// For Fetching the Tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed To Retrieve The Tasks" });
  }
});

// For Deleting a Task
router.delete("/delete/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted Successfully" });
});


module.exports = router;
