
import { MDBInput } from 'mdb-react-ui-kit';
import Button from "./Button";
import { useState } from "react";
interface Props {
    children: string;
    onClick: (someArg:string ) => void;
}
function LoginForm({ children, onClick }: Props) {

    const [currentUser, setCurrentUser] = useState("user");

    return (
        <>
            <h2>{children}</h2>
            <MDBInput label="User Name" id="form1" type="text" value={currentUser} onChange={(e) => setCurrentUser(e.target.value) } />
            <MDBInput label="Password" id="form1" type="text" />
            <Button onClick={() => {
                onClick(currentUser)
            }}>Login {children}</Button>
        </>
        
    );
}

export default LoginForm;