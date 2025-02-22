import { useState } from "react";

import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

import LoginForm from "./components/LoginForm";
import HelloWorld from "./components/HelloWorld";
import FetchTest from "./components/FetchTest";
import NavBar from "./components/NavBar";
import imagePath from "./assets/react.svg";
// Create a queryclient
const queryClient = new QueryClient();

function App() {
  const [loggedIn, setLoggedIn] = useState<string>();

  function onLoginClick(someArg: string) {
    setLoggedIn(someArg);
  }

  if (!loggedIn) {
    return (
      <>
        <h1>Basic Test Page now with CI amazingness</h1>
        <hr />
        <NavBar brandName="Bunn Co" imageSrc={imagePath} />
        <hr/>
        <MDBContainer className="d-flex justify-content-center">
          <MDBCard className="w-50">
            <MDBCardBody>
              <LoginForm onClick={onLoginClick}>Form</LoginForm>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </>
    );
  }
  return (
    <>
      <h1>Welcome</h1>
      <hr/>
      <NavBar brandName="Bunn Co" imageSrc={imagePath} />
      <hr/>
      <HelloWorld currentUser={loggedIn} />
      <QueryClientProvider client={queryClient}>
        <FetchTest></FetchTest>
      </QueryClientProvider>
    </>
  );
}

export default App;
