import { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import './App.css'

import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h1>Basic Test Page</h1>

          <MDBCard>
              <MDBCardBody>
                  <LoginForm onClick={() => setCount((count) => count + 1)}>
                      Login Form
                  </LoginForm>
              </MDBCardBody>
          </MDBCard>
          <p>{count}</p>

    </>
  )
}

export default App
