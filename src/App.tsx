import { useState } from 'react'

import {
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import './App.css'

import LoginForm from "./components/LoginForm";
import HelloWorld from "./components/HelloWorld";



function App() {

    const [loggedIn, setLoggedIn] = useState<string>();
   
    function onLoginClick(someArg: string) {
        setLoggedIn(someArg);
    }

    if (!loggedIn) {
        return (
            <>
                <h1>Basic Test Page now with CI</h1>

                <MDBCard className="w-50">
                    <MDBCardBody>
                        <LoginForm onClick={onLoginClick}>
                            Login Form
                        </LoginForm>
                    </MDBCardBody>
                </MDBCard>

               
            </>
        )
    }
    return (
        <>
            
            <h1>Welcome</h1>

            <HelloWorld currentUser={loggedIn} />

            
        </>
    )
}

export default App
