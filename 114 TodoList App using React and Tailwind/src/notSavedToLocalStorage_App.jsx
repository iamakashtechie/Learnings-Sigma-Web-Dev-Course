import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Navbar from "./components/Navbar";

function _App() {
  const [todo, setTodo] = useState("");
  // todo is a state variable that stores the value of the input field
  const [todos, setTodos] = useState([]);
  // todos is a state variable that stores the list of tasks
  const [isChecked, setIsChecked] = useState(false);

  const handleAdd = () => {
    setTodos([...todos, { todo, isChecked: false, id: uuidv4() }]);
    setTodo("");
    // console.log("i++ ===>" + i);
    console.log(todos);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  // explanation of handleCheck() is below
  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isChecked = !newTodos[index].isChecked;
    setTodos(newTodos);
  };

// The handleCheck function handles the event when a checkbox is toggled in your todo list. 
// Here's how it works:

// ---> Retrieves the id of the todo item from e.target.name.
// ---> Uses todos.findIndex to find the index of the todo item with the matching id.
// ---> Creates a new array newTodos that is a copy of the current todos array.
// ---> Toggles the isChecked property of the todo item at the found index in newTodos.
// ---> Calls setTodos(newTodos) to update the state with the modified todo list.

  const handleChange = (e) => {
    setTodo(e.target.value);
    // Calls setTodo(e.target.value) to update the todo state with the current value of the input field.  
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((item) => {
      return item.id === id;
    })
    setTodo(t[0].todo);
    // deleting the previous one
    let newTodos = todos.filter((item) => {
      return item.id !== id; 
    });
    setTodos(newTodos);
    
  };

  const handleDelete = (e, id) => {
    let confirmDelete = confirm("Are you sure you want to delete this task?");

    if (confirmDelete) {
    // User clicked OK
    console.log("User clicked OK");
    // console.log("id ===>" + id);
    let newTodos = todos.filter((item) => {
      return item.id !== id; 
    });
    setTodos(newTodos);
    } else {
    // User clicked Cancel
    console.log("User clicked Cancel");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container w-full border min-h-[70vh] border-black">
        <h1 className="text-xl font-bold m-8 px-4 py-1 bg-slate-400">
          To-do s
        </h1>

        <div className="addTodos">
          <input
            onKeyDown={handleEnter}
            onChange={handleChange}
            value={todo}
            type="text"
            className="border border-black mx-8 p-2"
            placeholder="Add a new task"
          />
          <button onClick={handleAdd} className="bg-green-500 text-white p-2">
            Add
          </button>
        </div>

        <div className="todos border border-black m-8 p-4 flex flex-col gap-2">
          {(todos.length === 0) && 
            <div>No todos to display</div>
          }
          {/* Conditionally renders "No todos to display" when the todos array is empty. */}
          {todos.map((item) => {
            return (
              <li
                key={item.id}
                className="list-none bg-gray-300 px-2 py-1 flex justify-between items-center"
              >
                <div className="">
                  <input
                    name={item.id}
                    onChange={handleCheck}
                    value={item.isChecked}
                    className="mx-1"
                    type="checkbox"
                  />
                  <span className={item.isChecked ? "line-through" : ""}>
                    {item.todo}
                  </span>
                </div>
                <div className="btns flex gap-2">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-neutral-400 px-2 py-0.5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-neutral-400 px-2 py-0.5"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default _App;
