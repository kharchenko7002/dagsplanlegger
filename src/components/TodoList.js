import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem 
          key={task.id} 
          task={task} 
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};



export default TodoList;
