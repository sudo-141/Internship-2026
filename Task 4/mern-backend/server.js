const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", authRoutes);

// App.js uses http://localhost:5000/tasks , /add, /update/:id, /delete/:id, /toggle/:id
// So we map them to root or /tasks depending on how we set up routes.
// Route file is mapped to '/' inside it, but for compatibility with App.js which expects '/tasks' for get, but '/add' for post...
// It would be best to mount taskRoutes at root since App.js calls /tasks, /add, /update, /delete, /toggle
app.use("/", taskRoutes);

// Note: /tasks in App.js is mapped to router.get('/tasks') if I update the router. Let me re-write the router and server.

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});
