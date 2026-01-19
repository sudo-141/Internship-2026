function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <li>No tasks yet</li>
      ) : (
        tasks.map((task) => (
          <li key={task._id}>{task.text}</li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
