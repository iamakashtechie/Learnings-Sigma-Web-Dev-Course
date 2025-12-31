import { useState } from 'react'
import './App.css'

function App() {
  const handleClick = () => {
    console.log('Button clicked')
  }

  const handleMouseOver = () => {
    console.log('Mouse over') 
  }

  // const [name, setName] = useState("Akash")
  const [form, setForm] = useState({
    name: 'Akash',
    phone: '1234567890'
  })
  // const [form, setForm] = useState({}) 
  // ---> if left empty, it will be an empty object
  // for that form.name and form.phone will be undefined ---> gives error
  // so, we need to give some default values to it
  // form.name? form.email:"" ---> if form.name is undefined, then it will be empty string

  const handleChange = (e) => {
    // setForm(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="btn">
        <button onClick={handleClick}>Click me</button>
        <button onMouseOver={handleMouseOver}>Mouse over</button>
        <input type="text" name='name' value={form.name? form.name:""} onChange={handleChange} />
        <input type="text" name='phone' value={form.phone? form.phone:""}  onChange={handleChange} />
        {/* A very standard practice with input tags */}
      </div>
    </>
  )
}

export default App
