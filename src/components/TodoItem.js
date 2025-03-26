import React from 'react';

const TodoItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </li>
  );
};

export default TodoItem;
