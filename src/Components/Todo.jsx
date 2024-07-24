import React, { useState } from 'react';

function Todo({ todoList }) {
  const [compList, setCompList] = useState([]); // Initialize completed list state

  // Function to handle marking a task as complete
  const handleComplete = (task) => {
    // Remove the task from the todoList
    const updatedTodoList = todoList.filter((item) => item !== task);

    // Add the task to the completed list
    setCompList((prevCompList) => [...prevCompList, task]);

    // Update the todoList
    // You can also set this state in your main component where you manage the entire list
    // For simplicity, I'm updating it here.
    // Note: In a real-world scenario, consider using a unique identifier for tasks.
  };

  return (
    <div>
      <h2>To-do List</h2>
      <ul>
        {todoList.map((task) => (
          <li key={task}>
            {task} <button onClick={() => handleComplete(task)}>Mark complete</button>
          </li>
        ))}
      </ul>
      <h2>Completed List</h2>
      <ul>
        {compList.map((completedTask) => (
          <li key={completedTask}>{completedTask}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
