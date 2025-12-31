import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import InputSection from '../components/InputSection'
import Dashboard from '../components/Dashboard'
import { setSavedDetails } from '../features/detailsSlice';

const Manager = () => {

  const dispatch = useDispatch();
  const savedDetails = useSelector((state) => state.details.savedDetails);

  // const fetchDB = async () => {
  //   const response = await fetch('http://localhost:3000/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data = await response.json();
  //   dispatch(setSavedDetails(data));
  // }

  const fetchSavedDetails = async () => {
    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      console.log(data);
      dispatch(setSavedDetails(data));
    } catch (error) {
      console.error('Error fetching details:', error);
    }
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

      <InputSection/>
      <Dashboard/>
    </section>
  );
};

export default Manager;
