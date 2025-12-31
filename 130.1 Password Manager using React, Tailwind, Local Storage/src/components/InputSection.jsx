import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import {
  setSavedDetails,
  setWebsite,
  setUsername,
  setPassword,
  setIsEditing,
  setEditId,
  setEditIndex,
} from '../features/detailsSlice';

const InputSection = () => {
  const dispatch = useDispatch();
  const {
    savedDetails,
    website,
    username,
    password,
    isEditing,
    editId,
    editIndex,
  } = useSelector((state) => state.details);

  const [isClickedBIcon, setIsClickedBIcon] = useState(false);
  const [isHoverAIcon, setIsHoverAIcon] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    // This effect will run whenever the props change
    dispatch(setWebsite(website));
    dispatch(setUsername(username));
    dispatch(setPassword(password));
  }, [website, username, password, dispatch]);

  const handleToggle = () => {
    setShowPass((prevState) => !prevState);
    // setShowPass(!showPass);
    // console.log(`isClicked ---> ${showPass}`);
  };

  const generateDummyData = () => {
    const dummyData = Array(5).fill().map((_, index) => ({
      website: `https://website${index + 1}.com`,
      username: `user${index + 1}@example.com`,
      password: Math.random().toString(36).slice(-8),
      id: uuidv4()
    }));
  
    const updatedDetails = [...savedDetails, ...dummyData];
    dispatch(setSavedDetails(updatedDetails));
    localStorage.setItem("passwordDetails", JSON.stringify(updatedDetails));
  };

  const savePassword = () => {
    const passwordDetails = {
      website,
      username,
      password,
      id: isEditing ? editId : uuidv4(),
    };

    // Fetch existing data from local storage
    let existingData = JSON.parse(localStorage.getItem("passwordDetails")) || [];

    if (isEditing) {
      existingData = existingData.filter((detail) => detail.id !== editId);
      existingData.splice(editIndex, 0, passwordDetails); // Insert at the original index
    } else {
      // Add new details to the existing data
      existingData.push(passwordDetails);
    }

    // Save updated data back to local storage
    localStorage.setItem("passwordDetails", JSON.stringify(existingData));

    // Log the JSON details
    console.log(passwordDetails);

    // Clear input fields
    dispatch(setWebsite(""));
    dispatch(setUsername(""));
    dispatch(setPassword(""));

    // Update saved details state
    dispatch(setSavedDetails(existingData));

    dispatch(setIsEditing(false));
    dispatch(setEditId(null));
    dispatch(setEditIndex(null));
  };

  const clearAllData = () => {
    if (window.confirm("This will erase all the saved detail?")) {
      localStorage.removeItem("passwordDetails");
      dispatch(setSavedDetails([]));
    }
  };

  return (
    <div className="input-section flex flex-col gap-5 text-black p-4">
      <div className="w-full relative">
        <input
          className="w-full rounded-full border border-green-500 px-7 py-2"
          placeholder="Enter Website URL"
          type="text"
          name=""
          onFocus={() => setIsClickedBIcon(true)}
          onBlur={() => setIsClickedBIcon(false)}
          value={website}
          onChange={(e) => dispatch(setWebsite(e.target.value))}
        />
        <div className="absolute top-1.5 left-2">
          <lord-icon
            src="https://cdn.lordicon.com/rpviwvwn.json"
            trigger="loop"
            delay="2000"
            stroke="bold"
            state={isClickedBIcon ? "hover-rotate-up-to-down" : "hover-rotate"}
            colors="primary:#121331,secondary:#22c55e"
            style={{ width: "1rem", height: "1rem" }}
          ></lord-icon>
        </div>
      </div>
      <div className="flex gap-5 w-full">
        <input
          className="rounded-full border border-green-500 px-4 py-2 w-1/2"
          placeholder="Username"
          type="text"
          name=""
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        <div className="w-1/2 relative cursor-pointer">
          <input
            className="rounded-full border border-green-500 px-4 pr-9 py-2 w-full"
            placeholder="Password"
            type={showPass ? "text" : "password"}
            name=""
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <div className="absolute top-2.5 right-2.5" onClick={handleToggle}>
            {showPass ? (
              <lord-icon
                src="https://cdn.lordicon.com/dicvhxpz.json"
                trigger="loop"
                delay="3000"
                stroke="bold"
                state="hover-blink"
                colors="primary:#121331,secondary:#22c55e"
                style={{ width: "1.1rem", height: "1.1rem" }}
              ></lord-icon>
            ) : (
              <lord-icon
                src="https://cdn.lordicon.com/dicvhxpz.json"
                trigger="loop"
                delay="1000"
                stroke="bold"
                state="hover-cross"
                colors="primary:#121331,secondary:#22c55e"
                style={{ width: "1.1rem", height: "1.1rem" }}
              ></lord-icon>
            )}
          </div>
        </div>
      </div>
      <div className="flex max[480px]:flex-col justify-between items-center gap-5">
      <button
        onClick={savePassword}
        onMouseEnter={() => setIsHoverAIcon(true)}
        onMouseLeave={() => setIsHoverAIcon(false)}
        className="flex justify-center items-center gap-1 bg-green-500 border border-green-500 rounded-full w-fit px-4 py-1 self-end"
        >
        <lord-icon
          src="https://cdn.lordicon.com/jgnvfzqg.json"
          trigger={isHoverAIcon ? "loop" : ""}
          style={{ width: "1.4rem", height: "1.4rem" }}
        ></lord-icon>
        <span>{isEditing ? "Update" : "Add"}</span>
      </button>

      <button
        onClick={clearAllData}
        className="flex justify-center items-center gap-1 bg-red-500 border border-red-500 rounded-full w-fit px-4 py-1 text-white hover:bg-red-600 transition-colors"
      >
        <span>Clear All Data</span>
      </button>

      <button
        onClick={generateDummyData}
        className="flex justify-center items-center gap-1 bg-blue-500 border border-blue-500 rounded-full w-fit px-4 py-1 text-white hover:bg-blue-600 transition-colors"
      >
        <span>Generate Dummy Data</span>
      </button>
      </div>
    </div>
  );
};

export default InputSection;
