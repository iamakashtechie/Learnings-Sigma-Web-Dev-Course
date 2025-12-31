import React from 'react';
import './NewListButton.css';

function NewListButton({ onAddList }) {
  return (
    <button className="new-list-button" onClick={onAddList}>
      + Add New List
    </button>
  );
}

export default NewListButton;