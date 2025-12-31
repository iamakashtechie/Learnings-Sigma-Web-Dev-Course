import React, { useState } from 'react';
import './AddTask.css';

function AddTask({ onAddItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAddItem(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="+ Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="add-task-input"
      />
    </form>
  );
}

export default AddTask;