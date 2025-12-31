import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import InputSection from '../components/InputSection'
import Dashboard from '../components/Dashboard'
import { v4 as uuidv4 } from "uuid";
import { setSavedDetails } from '../features/detailsSlice';

const Manager = () => {
  // const [savedDetails, setSavedDetails] = useState([]);
  // const [website, setWebsite] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [isEditing, setIsEditing] = useState(false);
  // const [editId, setEditId] = useState(null);
  // const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const savedDetails = useSelector((state) => state.details.savedDetails);

  const fetchSavedDetails = () => {
    const data = JSON.parse(localStorage.getItem('passwordDetails')) || [];
    dispatch(setSavedDetails(data));
  };

  useEffect(() => {
      fetchSavedDetails();
  }, []);
    
  return (
    <section className="mx-auto max-w-4xl">
      <div className="w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[210px] w-[210px] rounded-full bg-green-300 opacity-80 blur-[120px]"></div>
        </div>
        <h1 className="text-2xl font-bold text-center mt-4">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-center mb-4">Your own password manager</p>
      </div>

      <InputSection
        // savedDetails={savedDetails}
        // setSavedDetails={setSavedDetails}
        // website={website}
        // setWebsite={setWebsite}
        // username={username}
        // setUsername={setUsername}
        // password={password}
        // setPassword={setPassword}
        // isEditing={isEditing}
        // setIsEditing={setIsEditing}
        // editId={editId}
        // setEditId={setEditId}
        // editIndex={editIndex}
        // setEditIndex={setEditIndex}
      />
      <Dashboard
        // savedDetails={savedDetails}
        // setSavedDetails={setSavedDetails}
        // setWebsite={setWebsite}
        // setUsername={setUsername}
        // setPassword={setPassword}
        // setIsEditing={setIsEditing}
        // setEditId={setEditId}
        // setEditIndex={setEditIndex}
      />
    </section>
  );
};

export default Manager;
