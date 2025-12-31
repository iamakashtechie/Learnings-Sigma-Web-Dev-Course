import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { 
    register, 
    handleSubmit, 
    watch,
    setError,
    formState: { errors, isSubmitting } 
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success');
      }, d*1000);
    })
  }
  
  const onSubbbmit = async data => {
    // await delay(2);    
    // simulating network delay
    
    // let res = await fetch('http://localhost:5173', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });
    // let resData = await res.json();
    // console.log(resData);

    let r = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data)
    });
    let d = await r.text();
    console.log(d);

    if(data.username === "root@akash" && data.password === "root@root") {
      alert("Login Successful");
    }
    else if(data.username !== "root@akash" && data.username !== "rohan") {
      setError("myform", { message: "username is incorrect" });
    }
    else if(data.username === "rohan") {
      setError("blocked", { message: "Sorry, this user is blocked" });
    }
  }

  console.log(watch("example")); // watch input value by passing the name of it
  
  
  return (
    <>
      <h1>React Hook Form</h1>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubbbmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder='username' type='text' defaultValue="root" {...register("username", { required: {value: true, message: "this field is required"}, minLength: {value: 3, message: "min length should be 3"}, maxLength: {value: 18, message: "max length should be 18"} })} />
        {errors.username && <><br /><span style={{fontSize: "0.8rem", color: "red"}}>Error: {errors.username.message}</span></>}
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder='password' type='password' {...register("password", { required: {value: true, message: "this field is required"}, minLength: {value: 8, message: "min length should be 8"} })} />
        {errors.password && <><br /><span style={{fontSize: "0.8rem", color: "red"}}>Error: {errors.password.message}</span></>}
        <br />
        <input disabled={isSubmitting} type="submit" />
        {isSubmitting && <><br /><span style={{fontSize: "0.8rem", color: "white"}}>Submitting...</span></>}
        {/* disabled the submit button while the form is submitting ---> this will prevent the user from submitting multiple forms due to mistake */}

        {errors.myform && <><br /><span style={{fontSize: "0.8rem", color: "red"}}>Error: {errors.myform.message}</span></>}
        {errors.blocked && <><br /><span style={{fontSize: "0.8rem", color: "red"}}>Error: {errors.blocked.message}</span></>}
      </form>
    </>
  )
}

export default App
