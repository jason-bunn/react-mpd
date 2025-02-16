import { useState } from 'react'

import {
    MDBCard,
    MDBCardBody,
    MDBContainer,
} from 'mdb-react-ui-kit';
import './App.css'

import LoginForm from "./components/LoginForm";
import HelloWorld from "./components/HelloWorld";
import FetchTest from "./components/FetchTest";



function App() {

    const [loggedIn, setLoggedIn] = useState<string>();
   
    function onLoginClick(someArg: string) {
        setLoggedIn(someArg);
    }

    if (!loggedIn) {
        return (
            <>
                <MDBContainer className="d-flex justify-content-center">
                <h1>Basic Test Page now with CI amazingness</h1>
                    <MDBCard className="w-50">
                        <MDBCardBody>
                            <LoginForm onClick={onLoginClick}>
                                Form
                            </LoginForm>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
                

               
            </>
        )
    }
    return (
        <>
            
            <h1>Welcome</h1>

            <HelloWorld currentUser={loggedIn} />
            <FetchTest></FetchTest>
            
        </>
    )
}

export default App
