import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaTrash, FaEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  // todo is a state variable that stores the value of the input field
  const [todos, setTodos] = useState([]);
  // todos is a state variable that stores the list of tasks
  const [isChecked, setIsChecked] = useState(false);

  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    try {
      const todoString = localStorage.getItem("todos");
      if (todoString) {
        const todos = JSON.parse(todoString);
        setTodos(todos);
      }
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  }, []);

  const saveToLS = () => {
    // first clear previous localStorage then set new todos
    // localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  
  const handleAdd = () => {
    if (!todo.trim()) return; // Validate input
    
    try {
      const newTodos = [...todos, { 
        todo, 
        isChecked: false, 
        id: uuidv4() 
      }];
      
      // Update localStorage first
      localStorage.setItem("todos", JSON.stringify(newTodos));
      
      // Then update state
      setTodos(newTodos);
      setTodo("");
      console.log(todos);
    } catch (error) {
      console.error("Error saving todo:", error);
    }
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

    saveToLS();
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
    
    saveToLS();
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

    saveToLS();
  };

  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container w-full border min-h-[70vh] border-black">
        <h1 className="text-xl font-bold m-8 px-4 py-1 bg-slate-400">
          To-do s
        </h1>

        <div className="addTodos">
          <input
            ref={inputRef}
            type="text"
            value={todo}
            onChange={handleChange}
            onKeyDown={handleEnter}
            className="border border-black mx-8 p-2 w-4/5"
            placeholder="Add a new task (Ctrl + K)"
          />
          <button onClick={() => handleAdd} disabled={todo.length<=3} className="bg-green-500 disabled:bg-green-800 text-white p-2">
            Add
          </button>
          {todo.length<=3 && <p className="text-red-500 text-xs mx-8">*Task should be more than 3 characters</p>}
        </div>

        <input className='my-4 ml-8' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
        <label className='mx-2' htmlFor="show">Show Finished</label> 

        <div className="todos border border-black m-8 p-4 flex flex-col gap-2">
          {(todos.length === 0) && 
            <div>No todos to display</div>
          }
          {/* Conditionally renders "No todos to display" when the todos array is empty. */}
          {todos.map((item) => {
            return (showFinished || !item.isChecked) && (
              <li
                key={item.id}
                className="list-none bg-gray-300 px-2 py-1 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <input
                    name={item.id}
                    onChange={handleCheck}
                    checked={item.isChecked}
                    className="mx-1"
                    type="checkbox"
                  />
                  <span className={`flex ${item.isChecked ? "line-through" : ""}`}>
                    {item.todo}
                  </span>
                </div>
                <div className="btns flex gap-2">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="px-2 py-0.5"
                  >
                    {/* Edit */}
                    <CiEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="px-2 py-0.5"
                  >
                    {/* Delete */}
                    <MdOutlineDeleteOutline />
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

export default App;
