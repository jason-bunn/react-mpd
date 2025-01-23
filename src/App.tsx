import { useState } from 'react'

import './App.css'

import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1>Basic Test Page</h1>
      <div className="card">
              <LoginForm onClick={() => setCount((count) => count + 1)}>
                  Login Form
              </LoginForm>
      </div>
      
    </>
  )
}

export default App
