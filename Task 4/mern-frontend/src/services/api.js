const API_BASE = "http://localhost:5000";

export async function getTasks() {
  const res = await fetch(`${API_BASE}/tasks`);
  return res.json();
}

export async function addTask(text) {
  const res = await fetch(`${API_BASE}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
}

export async function updateTask(id, data) {
  const res = await fetch(`${API_BASE}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${API_BASE}/delete/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function toggleTask(id) {
  const res = await fetch(`${API_BASE}/toggle/${id}`, {
    method: "PUT",
  });
  return res.json();
}
