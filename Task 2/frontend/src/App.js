import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;

    await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: task }),
    });

    setTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  const updateTask = async (id) => {
    if (!editedText.trim()) return;

    await fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: editedText }),
    });

    setEditingId(null);
    setEditedText("");
    fetchTasks();
  };

  const toggleComplete = async (id) => {
    await fetch(`http://localhost:5000/toggle/${id}`, {
      method: "PUT",
    });
    fetchTasks();
  };

  return (
    <div className="app-container">
      <div className="cards-container">

        {/* LEFT CARD */}
        <div className="todo-card">
          <div className="card-header">
            <img
              src="https://img.icons8.com/?size=100&id=N1AnLQK3VcgT&format=png&color=000000"
              alt="Todo Icon"
            />
            <h2>Add Task</h2>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="task-card">
          <div className="card-header">
            <img
              src="https://img.icons8.com/?size=100&id=N1AnLQK3VcgT&format=png&color=000000"
              alt="Task Icon"
            />
            <h3>Added Tasks</h3>
          </div>

          <div className="task-count">
            Total Tasks: {tasks.length}
          </div>

          <ul className="task-list">
            {tasks.length === 0 ? (
              <li>No tasks yet</li>
            ) : (
              tasks.map((t) => (
                <li key={t._id} className="task-item">

                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleComplete(t._id)}
                  />

                  {editingId === t._id ? (
                    <>
                      <input
                        className="edit-input"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                      <button
                        className="save-btn"
                        onClick={() => updateTask(t._id)}
                      >
                        💾
                      </button>
                    </>
                  ) : (
                    <>
                      <span className={t.completed ? "completed" : ""}>
                        {t.text}
                      </span>

                      <div className="task-actions">
                        <button
                          className="icon-btn"
                          onClick={() => {
                            setEditingId(t._id);
                            setEditedText(t.text);
                          }}
                        >
                          ✏️
                        </button>

                        <button
                          className="icon-btn"
                          onClick={() => deleteTask(t._id)}
                        >
                          🗑️
                        </button>
                      </div>
                    </>
                  )}

                </li>
              ))
            )}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;
