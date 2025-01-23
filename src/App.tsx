import { useState } from 'react'

import './App.css'
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1>Basic Test Page</h1>
      <div className="card">
              <Button onClick={() => setCount((count) => count + 1)}>
                  count is {"" + count}
              </Button>
              <LoginForm>
              Login Form
              </LoginForm>
      </div>
      
    </>
  )
}

export default App
