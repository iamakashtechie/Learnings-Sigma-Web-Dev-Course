# Why are we using useState Hook?

## You might think that you can do like this

```App.jsx
import { useState } from 'react'
...
function App() {
    let a = 5;
    return (
    <>
        <div>The count is {a}</div>
        <button onClick={()=>{a=a+1}}>Update Count</button>
    </>
  )
}

export default App
```
- But this will not show the updated count by updating the value of a in that div.
- Instead it will update the value of a in the memory but since the a is already showed in the html and will not be updated again and again.
- useState is used because it updates the value of the variable from everywhere in the code.

```App.jsx
import { useState } from 'react'
...
function App() {
    const [count, setCount] = useState(0)
    return (
    <>
        <div> The count is {count} </div>
      {/* here count is used as a variable */}

      <button onClick={() => setCount((count) => count + 1)}>
        Update Count
      </button>
    </>
  )
}

export default App
```