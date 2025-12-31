import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  setSavedDetails,
  setWebsite,
  setUsername,
  setPassword,
  setIsEditing,
  setEditId,
  setEditIndex,
} from '../features/detailsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const savedDetails = useSelector((state) => state.details.savedDetails);
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this detail?")) {
      const updateDetails = savedDetails.filter((detail) => detail.id !== id);
      dispatch(setSavedDetails(updateDetails));
      localStorage.setItem("passwordDetails", JSON.stringify(updateDetails));
    }
  };

  const handleEdit = (id) => {
    const detailToEdit = savedDetails.find((detail) => detail.id === id);
    const indexToEdit = savedDetails.findIndex((detail) => detail.id === id);

    if (detailToEdit) {
      dispatch(setWebsite(detailToEdit.website));
      dispatch(setUsername(detailToEdit.username));
      dispatch(setPassword(detailToEdit.password));
      dispatch(setIsEditing(true));
      dispatch(setEditId(id));
      dispatch(setEditIndex(indexToEdit));
      const updateDetails = savedDetails.filter((detail) => detail.id !== id);
      dispatch(setSavedDetails(updateDetails));
      // localStorage.setItem("passwordDetails", JSON.stringify(updateDetails));
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    // alert("Copied to clipboard -> " + text);
    toast('🦄 Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: "Bounce",
      });
  }

  return (
    <section className="mx-auto max-w-4xl">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition="Bounce"
      />
      <div className="saved-details mt-5 max-w-4xl">
        <h3 className="font-bold text-2xl py-4">Saved Details:</h3>
        {savedDetails.length === 0 && <div> No passwords to show</div>}
        {savedDetails.length !== 0 && (
          <div className="max-w-4xl overflow-x-auto">
            <table className="table-auto w-full mb-10 max-w-4xl">
              <thead className="bg-green-800 text-white w-full">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-sm leading-4 font-medium uppercase tracking-wider">
                    Website URL
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-sm leading-4 font-medium uppercase tracking-wider">
                    Username
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left text-sm leading-4 font-medium uppercase tracking-wider">
                    Password
                  </th>
                  <th className="w-24 py-2 px-4 border-b border-gray-200 text-left text-sm leading-4 font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-green-100 w-full">
                {savedDetails.map((detail) => {
                  return (
                    <tr key={detail.id} className="w-full">
                      <td className="w-1/4 py-2 px-4 border-b border-gray-400 cursor-pointer">
                        <a href={detail.website} target="_blank">
                          {detail.website}
                        </a>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-400">
                        <button
                          onClick={() => copyText(detail.username)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            style={{ width:"1.2rem", height:"1.2rem" }}
                          ></lord-icon>
                          {/* <img className="size-4 mr-2" src="/copy.svg" alt="copy" /> */}
                        </button>
                        <span>{detail.username}</span>
                      </td>
                      
                      <td className="py-2 px-4 border-b border-gray-400">
                        <button
                          onClick={() => copyText(detail.password)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            style={{ width:"1.2rem", height:"1.2rem" }}
                          ></lord-icon>
                          {/* <img className="size-4 mr-2" src="/copy.svg" alt="copy" /> */}
                        </button>
                        <span>{detail.password}</span>
                      </td>

                      <td className="flex justify-between py-2 px-4 border-b border-gray-400 text-center">
                        <button
                          onClick={() => handleEdit(detail.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "1rem", height: "1rem" }}
                          ></lord-icon>
                        </button>
                        <button
                          onClick={() => handleDelete(detail.id)}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            // colors="primary:#ef4444"
                            style={{ width: "1rem", height: "1rem" }}
                          ></lord-icon>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
