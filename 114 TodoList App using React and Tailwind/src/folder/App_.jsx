import React, { useState } from 'react';
import NewListButton from './folder/NewListButton';
import TodoList from './folder/TodoList';
import './App.css';

function App() {
  const [todoLists, setTodoLists] = useState([]);

  const handleAddList = () => {
    const newList = {
      id: Date.now(),
      title: "Daily To-Do",
      date: new Date().toDateString(),
      items: [],
    };
    setTodoLists([...todoLists, newList]);
  };
    const handleDeleteList = (id) => {
        setTodoLists(todoLists.filter((list) => list.id !== id));
    };

  return (
    <div className="app">
      <div className="header">
        <h1>My Todo App</h1>
        <NewListButton onAddList={handleAddList} />
      </div>
      <div className="todo-lists">
        {todoLists.map((list) => (
          <TodoList key={list.id} list={list} onDeleteList={handleDeleteList} />
        ))}
      </div>
    </div>
  );
}

export default App;