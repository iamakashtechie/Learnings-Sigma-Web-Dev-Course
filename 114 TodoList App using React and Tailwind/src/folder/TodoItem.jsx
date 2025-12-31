import React from 'react';
import './TodoItem.css';

function TodoItem({ item, onDeleteItem, onToggleItem }) {
    const handleCheckboxChange = () => {
        onToggleItem(item.id);
    };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </span>
      <button className="delete-item-button" onClick={() => onDeleteItem(item.id)}>
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}

export default TodoItem;