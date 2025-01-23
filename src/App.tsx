import { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn
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
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <LoginForm onClick={() => setCount((count) => count + 1)}>
                      Login Form
                  </LoginForm>
                  <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
          </MDBCard>
          <p>{count}</p>

    </>
  )
}

export default App
