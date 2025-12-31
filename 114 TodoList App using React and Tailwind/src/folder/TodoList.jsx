import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ list, onDeleteList }) {
  const [items, setItems] = useState(list.items);
    const handleAddItem = (text) => {
        const newItem = {
            id: Date.now(),
            text,
            completed: false,
        };
        setItems([...items, newItem]);
    };

    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };
    const handleToggleItem = (id) => {
        setItems(items.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };
  return (
    <div className="todo-list">
      <div className="todo-header">
        <h3>{list.title}</h3>
        <button className="delete-list-button" onClick={() => onDeleteList(list.id)}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="todo-date">{list.date}</div>
      <div className="todo-items">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
              onToggleItem={handleToggleItem}
          />
        ))}
      </div>
        <AddTask onAddItem={handleAddItem} />
    </div>
  );
}

export default TodoList;